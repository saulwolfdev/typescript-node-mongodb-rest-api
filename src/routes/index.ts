import { Router } from "express";
import {createPhoto, getPhoto} from "../controllers/photo.controller";
import multer from "../libs/multer";
const router = Router();

router.route("/photos")
	  .post(multer.single("image"),createPhoto)
      .get(getPhoto)
export default router; 