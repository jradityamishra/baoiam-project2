import express from "express";
import { createCourse, getCourses, updateCourses, updateCoursesImage, deleteCourse } from "../controller/courseController.js";
import { uploadImage } from '../middleware/multerVideoUpload.js'
//-------------- ROUTING OBJECT -----------
const router = express.Router();

//-------------- ROUTING -----------

// Get all courses
// router.route("/courses").get(courseControllers.allCourses);

// Get a specific course by ID
// router.route("/courses/:id").get(courseControllers.courseById);

// Create a new course

router.post('/createCourse', uploadImage.single('image'), createCourse)
router.get('/getcourse', getCourses);
router.put('/updatecourse/:id', updateCourses)
router.put('/updatecourseimage/:id', uploadImage.single('image'), updateCoursesImage)
router.delete('/coursedelete/:id', deleteCourse)

// Update a course by ID
// router.route("/courses/:id").put(courseControllers.updateCourse);

// Delete a course by ID
// router.route("/courses/:id").delete(courseControllers.deleteCourse);

export default router;
