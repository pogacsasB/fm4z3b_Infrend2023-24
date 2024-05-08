import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { PatientDTO } from "../../../models";
import { PatientHistory } from "./PatientHistory";

@Entity()
export class Patient implements PatientDTO {

    @PrimaryGeneratedColumn()
    id: number

    //@OneToMany(type => PatientHistory, visit => visit.PatientHistory)
    @Column()
    taj: number

    @Column()
    nev: string

    @Column()
    szul_datim: Date

}