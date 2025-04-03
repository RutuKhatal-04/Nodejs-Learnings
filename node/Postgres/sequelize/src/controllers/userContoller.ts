import {Request,Response} from "express";
import User from "../models/userModel";

export const createUser=async(req:Request,res:Response)=>{
    const {name,email}=req.body;

    if(!name || !email)
    {
      res.status(400).json({error:"Name and email required"});
      return;
    }
    try
    {
        const user=await User.create({name,email});
       res.status(200).json(user);
       return;
    }
    catch(err)
    {
         res.status(500).json({error:"Failed to create user"});
         return;
    }
};


export const getUsers=async(req:Request,res:Response)=>{
    try{
        const users=await User.findAll();
        res.status(200).json(users);
        return;
    }
    catch(err)
    {
        console.log(err);
    }
}

export const getParticularUser=async(req:Request,res:Response)=>{
    const {id}=req.params;
    try{
        const user=await User.findByPk(id);
        if(!user)
        {
            res.status(404).json({error:"user not found"});
        }
        res.status(200).json(user);
        return;
    }
    catch(err)
    {
        console.log(err);
    }
}

export const updateData=async(req:Request,res:Response)=>{
    const {id}=req.params;
    const {name}=req.body;
    try{
        const user=await User.findByPk(id);
        if(!user)
        {
            res.status(500).json({error:"No such user"});
            return;
        }
        user.name=name;
        await user.save()
        res.status(200).json(user);
    }
    catch(err)
    {
        console.log(err);
    }
}

export const deleteUser=async(req:Request,res:Response)=>{
    const {id}=req.params;
    try{
        const user=await User.findByPk(id);
        if(!user)
        {
            res.status(500).json({error:"No such user"});
            return;
        }
        await user.destroy();
        res.status(200).json(user);
    }
    catch(err)
    {
        console.log(err);
    } 
}