const express = require("express");
const router = express.Router();

console.log("VIDEO ROUTES LOADED");

const videoController = require("../controllers/videoController");
const upload = require("../middleware/upload");

const Video = require("../models/video");
const WatchHistory = require("../models/watchHistory");

console.log(videoController);

router.post(
  "/upload",
  upload.fields([
    { name: "thumbnail", maxCount: 1 },
    { name: "video", maxCount: 1 }
  ]),
  videoController.uploadVideo
);

router.get("/", videoController.getAllVideos);

router.get("/search", videoController.searchVideos);
router.get("/creator/:id", videoController.getCreatorVideos);
router.get("/category/:category", videoController.getVideosByCategory);
router.post("/:id/like", videoController.likeVideo);


router.get("/recommended", async (req, res) => {

  try {

    const videos = await Video.find()
      .sort({
        views: -1,
        likes: -1
      })
      .limit(10);


    res.json({
      videos: videos,
      interests: []
    });


  } catch(error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });

  }

});

router.get("/recommended/:userId", async (req, res) => {

  console.log("Recommended route called");


  try {

    const userId = req.params.userId;


    const history = await WatchHistory.find({
      user: userId
    }).populate("video");


    if(history.length === 0) {

      const videos = await Video.find()
        .sort({
          views: -1,
          likes: -1
        })
        .limit(10);


      return res.json({
        videos: videos,
        interests: []
      });

    }


  
    const categories = [
      ...new Set(
        history
          .filter(item => item.video)
          .map(item => item.video.category)
      )
    ];


  
    const recommended = await Video.find({

      category: {
        $in: categories
      }

    })
    .sort({
      views: -1,
      likes: -1
    })
    .limit(10);



    res.json({

      videos: recommended,

      interests: categories

    });


  } catch(error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });

  }

});


router.post("/watch/:videoId", async (req, res) => {

  try {

    const { userId } = req.body;


    if(!userId) {

      return res.status(400).json({

        message: "User ID required"

      });

    }


    const history = new WatchHistory({

      user: userId,

      video: req.params.videoId

    });


    await history.save();


    res.json({

      message: "Watch history saved"

    });


  } catch(error) {

    console.log(error);


    res.status(500).json({

      message: "Server Error"

    });

  }

});
router.post("/:id/view", videoController.addView);
router.get("/:id", videoController.getVideoById);


module.exports = router;