import {Request,Response} from "express";
export function createPhoto(req:Request,res:Response):Response{
	console.log("save")
 return res.json({
	 message:"Photo succesfully saved"
 })
}