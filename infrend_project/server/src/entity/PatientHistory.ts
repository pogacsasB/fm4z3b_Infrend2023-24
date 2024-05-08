import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, ManyToOne } from "typeorm"
import { PatientHistoryDTO } from "../../../models";
import { Patient } from "./Patient";

@Entity()
export class PatientHistory implements PatientHistoryDTO {

    @PrimaryGeneratedColumn()
    visitId: number
    
    @ManyToOne(() => Patient, Patient => Patient.History)
    patient: Patient

    @Column()
    diagnozis: string

    @Column()
    gyogyszerek: string

    @Column()
    leletek: string
}