import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
@Entity('class') 
export class Class{
    @PrimaryGeneratedColumn("uuid") 
    id:string; 

   @Column({
    length:100, 
    unique:true, 
   })
 
    name:string; 

   @Column()
    duration:number; 

   @CreateDateColumn()
    createdAt:Date; 

    @UpdateDateColumn() 
    updateAt:Date; 
}