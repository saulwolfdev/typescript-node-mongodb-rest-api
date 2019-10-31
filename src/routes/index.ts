import { Router } from "express";
import {createPhoto} from "../controllers/photo.controller";
const router = Router();

router.route("/")
    .get(createPhoto);
export default router; 