const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "please enter a name"],
	},

    avatar: {
        public_id: String,
        url:String,
    },

	email: {
		type: String,
		required: [true, "Please enter a email"],
		unique: [true, "Email already exists"],
	},

	password: {
		type: String,
		required: [true, "Please enter a password"],
		minlenght: [6, "Password must be atleast 6 characters"],
		select: false,
	},

	posts: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Post",
		},
	],

	followers: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
	],

	following: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
	],
});

module.exports = mongoose.model("User", userSchemaSchema);
