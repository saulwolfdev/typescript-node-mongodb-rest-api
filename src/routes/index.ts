import { Router } from "express";
const router = Router();

router.route( "/" )
    .get((req, res) => res.send("hello word" ));


export default router; 