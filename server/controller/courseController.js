import Course from '../model/couresSchema.js';
import { postObject } from "../helper/s3/s3lectureUpload.js"
// Course Controllers

// Get all courses controller
export const getCourses = async (req, res) => {
  try {
    // Fetch all courses from the database
    const courses = await Course.find();


    // Send the courses as a response
    res.status(200).json(courses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

// Get a specific course by ID controller
export const courseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    res.status(200).json(course);
  } catch (error) {
    console.log("error");
    res.status(404).json({ msg: "Internal Server Error" });
  }
};

// Create a new course controller
export const createCourse = async (req, res) => {
  const lectureUrl = req.file;
  console.log(req.file)
  const videoname = req.file.originalname;

  const { title, description, price, offer } = req.body;


  try {
    const get = await postObject(videoname, lectureUrl);
    console.log(get)
    if (get) {
      // Save the new course to the database
      const savedCourse = await Course({
        title: title,
        description: description,
        price: price,
        offer: offer,
        image: get
      }).save();

      res.status(201).json(savedCourse);
    }

    // Send the saved course as a response

  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};



// Update a course by ID controller
export const updateCourses = async (req, res) => {
  console.log(req.params.id)
  const { title, description, price, offer } = req.body;
  console.log(title, description)
  try {

    const updatedCourse = await Course.findByIdAndUpdate(req.params.id, {
      title: title,
      description: description,
      price: price,
      offer: offer,

    });
    console.log(updateCourses)
    res.status(200).json(updatedCourse);
  } catch (error) {
    console.log(error);
    res.status(404).json({ msg: "Internal Server Error" });
  }
};
//image update
export const updateCoursesImage = async (req, res) => {
  const lectureUrl = req.file;
  console.log(req.file)
  const videoname = req.file.originalname;
  console.log(req.params.id)
  
  try {
    const get = await postObject(videoname, lectureUrl);
    const updatedCourse = await Course.findByIdAndUpdate(req.params.id, {
      image: get
    });
    console.log(updateCourses)
    res.status(200).json(updatedCourse);
  } catch (error) {
    console.log(error);
    res.status(404).json({ msg: "Internal Server Error" });
  }
};

// Delete a course by ID controller
export const deleteCourse = async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Course deleted successfully' });
  } catch (error) {
    console.log(error)
    res.status(404).json({ msg: "Internal Server Error" });
  }
};
