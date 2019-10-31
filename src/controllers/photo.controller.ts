import { Request, Response } from "express";
import Photo from "../models/Photo";
export async function createPhoto(req: Request, res: Response) {
	//nos muestra lo que hay en body
	console.log(req.body)

	//nos muestra que tipo de dato es
	console.log(req.file.path)

	const { title, description } = req.body;
	const newPhoto = {
		title: title,
		description: description,
		imagePath: req.file.path
	}

	const photo = new Photo(newPhoto);
	await photo.save()
	console.log(photo);
	return res.json({
		message: "Photo succesfully saved on computer using POST",
		photo
	})
}



export function getPhoto(req: Request, res: Response) {
	console.log("save GET")
	return res.json({
		message: "Photo succesfully saved on computer using GET"
	})
}