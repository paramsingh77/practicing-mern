const Post = require("../models/Post");
const post = require("../models/Post");
exports.createPost = async (req, res) => {
    try {
        const newPostData = {
            caption: req.body.caption,
            image: {
                
            },
            owner : req.user.id,

        }

        const newPost = await Post.create(newPostData);

        res.status(201).json({
            success: true,
            post:newPost,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
            
        } )  
    }
 };