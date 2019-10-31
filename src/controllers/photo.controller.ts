import { Request, Response } from "express";
import Photo from "../models/Photo";
import path from "path";
import fs from "fs-extra";

export async function createPhoto(req: Request, res: Response): Promise<Response> {
	//nos muestra lo que hay en body
	console.log(req.body)

	//nos muestra que tipo de dato es
	const { title, description } = req.body;
	const newPhoto = {
		title: title,
		description: description,
		imagePath: req.file.path
	}
	// console.log(req.file.path)

	const photo = new Photo(newPhoto);
	await photo.save()
	console.log(photo);
	return res.json({
		message: "Photo succesfully saved on computer using POST",
		photo
	})
}



export async function getPhotos(req: Request, res: Response): Promise<Response> {
	const photo = await Photo.find()
	console.log("save GET")
	return res.json({
		message: "send Photos",
		photo
	})
}
export async function getPhoto(req: Request, res: Response): Promise<Response> {
	const { id } = req.params;
	//destructuring
	const photo = await Photo.findById(id)
	// const photo = await Photo.findById(req.params.id)
	// console.log(req.params.id)
	return res.json({
		message: "selected Photo width ID",
		photo
	})
}
export async function deletePhoto(req: Request, res: Response): Promise<Response> {
	const { id } = req.params;
	const photo = await Photo.findByIdAndRemove(id)
		if(photo){
		   await fs.unlink(path.resolve(photo.imagePath))
		}
		return res.json({
		message: "delete Photo",
		photo
	})
}
export async function updatePhoto(req: Request, res: Response): Promise<Response> {
	const { id } = req.params;
	const { title, description}= req.body
	const updatePhoto=await Photo.findByIdAndUpdate(id,{
			title,
			description
		},{new:true})
		return res.json({
		message: "Successfully Updated",
		updatePhoto
	})
}