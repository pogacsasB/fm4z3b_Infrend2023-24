import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { PatientDTO } from "../../../models";
import { PatientHistory } from "./PatientHistory";

@Entity()
export class Patient implements PatientDTO {

    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    nev!: string

    @Column()
    szul_datum!: string

    @Column()
    taj!: number

    @OneToMany(type => PatientHistory, patienthistory => patienthistory.beteg)
    kortortenet!: PatientHistory[]

}