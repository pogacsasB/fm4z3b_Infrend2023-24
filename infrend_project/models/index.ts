import { Patient } from "../server/src/entity/Patient"
import { PatientHistory } from "../server/src/entity/PatientHistory"

export interface PatientDTO{
    id: number
    taj: number
    nev: string
    szul_ev: number
    nem: string
}

export interface PatientHistoryDTO{
    visitId: number
    beteg: number
    vizitEve: number
    diagnozis: string
    gyogyszerek: string
    leletek: string
}