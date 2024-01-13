import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        // required:true,
        trim: true
    },
    middlename: { type: String },
    lastname: { type: String },
    phone: { type: Number },
    collegeName: { type: String },
    GraduatingYear: { type: Number },
    bio: { type: String },
    image:{type:String},
    email: {
        type: String,
        required: true,
        unquie: true
    },
    password: {
        type: String,
        required: true,

    },
    userName: {
        type: String,
        required: true,
        unquie: true
    },
    address: {
        type: String,

    },
    enrolledcourses: [{
        // type: mongoose.Schema.Types.ObjectId,
        type: String,
        // ref: "Lecture",                             ///we require the id of course
    }],
    paymentHistory: [{
        // type: mongoose.Schema.Types.ObjectId,       ///we require the id of payment
        type: String,
        // ref: "payment",
    }],
    isAdmin: {
        type: Boolean,
        default: false
    },
    isVerified: {
        type: Boolean,
        default: false
    }

}, { timestamps: true }) // timestemps tell the register time of new user

export default mongoose.model('users', userSchema);