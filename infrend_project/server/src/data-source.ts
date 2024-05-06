import "reflect-metadata"
import { DataSource } from "typeorm"
import { Patient } from "./entity/Patient"
import { PatientHistory } from "./entity/PatientHistory"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    database: "infrend_orvosirendelo",
    synchronize: true,
    logging: true,
    entities: [Patient, PatientHistory],
    migrations: [],
    subscribers: [],
})