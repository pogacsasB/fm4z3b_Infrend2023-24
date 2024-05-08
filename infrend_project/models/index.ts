import { Patient } from "../server/src/entity/Patient"
import { PatientHistory } from "../server/src/entity/PatientHistory"

export interface PatientDTO{
    id: number
    taj: number
    nev: string
    szul_datum: string
    kortortenet: PatientHistoryDTO[] | null
}

export interface PatientHistoryDTO{
    visitId: number
    beteg: PatientDTO | null
    diagnozis: string
    gyogyszerek: string
    leletek: string
}