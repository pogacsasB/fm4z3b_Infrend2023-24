export interface PatientDTO{
    taj: number
    nev: string
    szul_datim: Date
    history: PatientHistoryDTO | null
}

export interface PatientHistoryDTO{
    taj: number;
    diagnozis: string
    gyogyszerek: string
    leletek: string
}