import express from "express";
import {
    registerController,
    loginController,
    testController,
    updatedProfile
} from "../controller/authController.js";
import { requireSignIn, isAdmin } from "../middleware/authMiddleware.js"
import { uploadImage } from '../middleware/multerVideoUpload.js'

//router object
const router = express.Router();

//Register
router.post("/register", registerController);
//Login
router.post("/login", loginController);
//testing route
router.get("/test", requireSignIn, isAdmin, testController);
//profile updata
router.put('/profilepdate/:id', uploadImage.single('image'), updatedProfile)

export default router;
