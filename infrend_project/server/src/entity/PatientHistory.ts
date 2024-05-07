import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { PatientHistoryDTO } from "../../../models";
import { Patient } from "./Patient";

@Entity()
export class PatientHistory implements PatientHistoryDTO {

    @PrimaryGeneratedColumn()
    visitId: number
    
    @Column()
    taj: number

    @Column()
    diagnozis: string

    @Column()
    gyogyszerek: string

    @Column()
    leletek: string
}