import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { PatientHistoryDTO } from "../../../models";
import { Patient } from "./Patient";

@Entity()
export class PatientHistory implements PatientHistoryDTO {

    @PrimaryGeneratedColumn()
    visitId!: number
    
    @ManyToOne(() => Patient, Patient => Patient.id)
    beteg!: number

    @Column()
    vizitEve!: number

    @Column()
    diagnozis!: string

    @Column()
    gyogyszerek!: string

    @Column()
    leletek!: string
}