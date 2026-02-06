import {Router} from "express"; 
import { getRepository } from "typeorm"; 
import {Class} from "../models/Class"; 

const classRouter = Router(); 

classRouter.post("/", async (req,res)=>{
    try{
        const repo = getRepository(Class)  
        const response = await repo.save(req.body); 
        return res.status(201).json(response) 
    }catch(error){
        res.status(404).json(error) 
    }
})
classRouter.get("/",async (req,res)=>{
    res.json(await getRepository(Class).find());  
})
export default classRouter 
