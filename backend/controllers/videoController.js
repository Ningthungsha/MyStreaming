const Video = require("../models/video");

const uploadVideo = async (req, res) => {

  try {
       console.log("Files:", req.files);
    const { title, description, category, creator } = req.body;

    const thumbnail = req.files?.thumbnail
      ? req.files.thumbnail[0].filename
      : "";

    const videoUrl = req.files?.video
      ? req.files.video[0].filename
      : "";

    const video = await Video.create({

      title,
      description,
      category,
      creator,
      thumbnail,
      videoUrl,

    });

    res.status(201).json({
      message: "Video uploaded successfully",
      video,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

const getAllVideos = async (req, res) => {
  try {
    const videos = await Video.find().populate("creator", "username");

    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const getVideoById = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id).populate(
      "creator",
      "username"
    );

    if (!video) {
      return res.status(404).json({
        message: "Video not found",
      });
    }

    res.json(video);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const searchVideos = async (req, res) => {
  try {
    const query = req.query.q;

    const videos = await Video.find({
      title: {
        $regex: query,
        $options: "i"
      }
    });

    res.json(videos);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};
const getCreatorVideos = async (req, res) => {
  try {

    const videos = await Video.find({
      creator: req.params.id
    }).populate("creator", "username");


    res.json(videos);

  } catch(error) {

    res.status(500).json({
      message:error.message
    });

  }
};
const likeVideo = async (req, res) => {

  try {

    const video = await Video.findById(req.params.id);


    if (!video) {
      return res.status(404).json({
        message: "Video not found"
      });
    }


    video.likes += 1;


    await video.save();


    res.json({

      message: "Video liked",

      likes: video.likes

    });


  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};
const getVideosByCategory = async (req, res) => {
  try {
    console.log("Requested category:", req.params.category);

    const videos = await Video.find({
      category: req.params.category
    });

    console.log("Videos found:", videos);

    res.status(200).json(videos);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};
const addView = async (req, res) => {

  try {

    const video = await Video.findById(req.params.id);

    if (!video) {
      return res.status(404).json({
        message: "Video not found"
      });
    }


    video.views = (video.views || 0) + 1;

    await video.save();


    res.json({
      views: video.views
    });


  } catch(error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });

  }

};



module.exports = {
  uploadVideo,
  getAllVideos,
  searchVideos,
  getVideoById,
  getCreatorVideos,
  getVideosByCategory,
  likeVideo,
  addView
};