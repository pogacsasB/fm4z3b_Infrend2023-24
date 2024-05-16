import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { PatientDTO, PatientHistoryDTO } from "../../../models";
import { Patient } from "./Patient";

@Entity()
export class PatientHistory implements PatientHistoryDTO {

    @PrimaryGeneratedColumn()
    visitId!: number
    
    @ManyToOne(() => Patient, patient => patient.visitHistory, { eager: true })
    beteg!: Patient

    @Column()
    vizitEve!: number

    @Column()
    diagnozis!: string

    @Column()
    gyogyszerek!: string

    @Column()
    leletek!: string
}