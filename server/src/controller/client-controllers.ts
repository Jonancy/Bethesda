import { prisma } from "../../server";
import { Request, Response } from "express";

class ClientController{

    getPage1Details=async(req : Request,res :Response)=>{

        try{
            const basicDetails = await prisma.page1.findFirst();
            const teamMembers = await prisma.team.findMany({
                take:3,
                include: {
                  designation: {
                    select: {
                      type: true // Include only the 'type' field from the 'designation' relation
                    }
                  },
                  post:{
                    select:{
                        type:true
                    }
                  }
                },
                
              });
              const page1Details={
                basicDetails,
                teamMembers
              }

            res.status(200).json({ page1Details });

        }catch(e){
            res.status(500).json({ error: e.message });
        }
    }

    getTeamMembers=async(req:Request, res:Response)=>{
        try{
            const teamMembers = await prisma.team.findMany({
                include: {
                  designation: {
                    select: {
                      type: true // Include only the 'type' field from the 'designation' relation
                    }
                  },
                  post:{
                    select:{
                        type:true
                    }
                  }
                }
              });
              
            res.status(200).json({ teamMembers });

        }catch(e){
            res.status(500).json({ error: e.message });
        }
    }
}

const clientController = new ClientController();

export default clientController;