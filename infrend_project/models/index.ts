export interface PatientDTO{
    taj: number
    nev: string
    szul_datim: Date
}

export interface PatientHistoryDTO{
    visitId: number
    taj: number
    diagnozis: string
    gyogyszerek: string
    leletek: string
}