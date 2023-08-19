import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
    fullname: {
        type: String,
        required:[true, "Name is required"],
        trim: true, //this is for adding spaces between strings
        inLength: [2, "Name must be larger than two characters!"],
        maxLength: [40, "Name must be less than 40 characters!"],
    },
    email: {
        type: String,
        required: [true, "Email is reqruied."],
        match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Invalid email address"],
    },

    message: {
        type: String, 
        required: [true, "Message is reqruied."]
    },

    date: {
        type: Date, 
        default: Date.now,
    },
});

const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;