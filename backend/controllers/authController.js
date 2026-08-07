const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const signup = async (req, res) => {

    try {

        const { username, email, password, role } = req.body;


        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists"
            });
        }


        const hashedPassword = await bcrypt.hash(password, 10);


        const user = await User.create({
            username,
            email,
            password: hashedPassword,
            role
        });


        res.status(201).json({
            message: "Account created successfully",
            user
        });


    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};


const login = async (req, res) => {

    try {

        const { email, password } = req.body;


        const user = await User.findOne({ email });


        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }


        const checkPassword = await bcrypt.compare(
            password,
            user.password
        );


        if (!checkPassword) {
            return res.status(400).json({
                message: "Invalid password"
            });
        }


        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );


        res.json({
            message: "Login successful",
            token,
            user
        });


    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};
const subscribeUser = async (req, res) => {

    try {

        const { creatorId, userId } = req.body;


        const creator = await User.findById(creatorId);


        if (!creator) {

            return res.status(404).json({
                message: "Creator not found"
            });

        }


        const alreadySubscribed = creator.subscribers.includes(userId);



        if (alreadySubscribed) {

            creator.subscribers = creator.subscribers.filter(
                (id) => id.toString() !== userId
            );


        } else {

            creator.subscribers.push(userId);

        }



        await creator.save();



        res.json({

            subscribed: !alreadySubscribed,

            subscribers: creator.subscribers.length

        });



    } catch(error) {

        res.status(500).json({
            message: error.message
        });

    }

};
const getUserById = async (req, res) => {

  try {

    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    res.json(user);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};


module.exports = {
    signup,
    login,
    subscribeUser,
    getUserById
};