import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { PatientDTO, PatientHistoryDTO } from "../../../models";
import { PatientHistory } from "./PatientHistory";

@Entity()
export class Patient implements PatientDTO {

    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    nev!: string

    @Column()
    nem!: string

    @Column()
    szul_ev!: number

    @Column()
    taj!: number

    @OneToMany(type => PatientHistory, history => history.beteg)
    visitHistory!: PatientHistoryDTO[]
}