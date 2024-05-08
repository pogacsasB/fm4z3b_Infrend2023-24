import { Patient } from "../server/src/entity/Patient"

export interface PatientDTO{
    id: number
    taj: number
    nev: string
    szul_datim: Date
}

export interface PatientHistoryDTO{
    visitId: number
    patient: Patient
    diagnozis: string
    gyogyszerek: string
    leletek: string
}