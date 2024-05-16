import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { PatientDTO } from "../../../models";
import { PatientHistory } from "./PatientHistory";

@Entity()
export class Patient implements PatientDTO {

    @PrimaryGeneratedColumn()
    @OneToMany(type => PatientHistory, patienthistory => patienthistory.beteg)
    id!: number

    @Column()
    nev!: string

    @Column()
    nem!: string

    @Column()
    szul_ev!: number

    @Column()
    taj!: number
}