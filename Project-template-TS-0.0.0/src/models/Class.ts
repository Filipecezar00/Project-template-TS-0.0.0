import { Entity } from "typeorm";
@Entity('class') 
export class Class{
    id:string; 

    name:string; 

    duration:number; 

    createdAt:Date; 

    updateAt:Date; 
}