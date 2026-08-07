const Comment = require("../models/Comment");

const addComment = async (req, res) => {

    try {

        const { videoId, userId, username, text } = req.body;


        const comment = await Comment.create({
            videoId,
            userId,
            username,
            text
        });


        res.status(201).json({
            message: "Comment added",
            comment
        });


    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

const getComments = async (req, res) => {

    try {

        const comments = await Comment.find({
            videoId: req.params.videoId
        })
        .sort({ createdAt: -1 });


        res.json(comments);


    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};



module.exports = {
    addComment,
    getComments
};