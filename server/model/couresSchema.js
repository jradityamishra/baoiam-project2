// Import necessary modules
import mongoose from "mongoose";


// Define the Course Schema
const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model (instructor)

  },
  image: {
    type: String,

  },
  price: {
    type: Number,
    require: true
  },
  offer: {
    type: String

  }

  // Add more fields as needed, such as duration, prerequisites, etc.
}, { timestamps: true });

// Create a Course model
const Course = mongoose.model('Course', courseSchema);

// Export the Course model
export default Course;

