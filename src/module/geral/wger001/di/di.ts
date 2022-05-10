import axios from "axios";
import { Wger001Controller } from "../controller/wger001Controller";

import { buscaFiliaisRepository } from "../data/repository/buscaRepository";
import { buscaFiliaisUsecase } from "../domain/usecase/buscaFiliaisUsecase";

const axiosInstance = axios.create({
    baseURL: "https://consultors-auth-cgi.cgisoftware.com.br",
    headers: {
        "Content-Type": "application/json"
    }
})

const buscaFiliaisRepositoryImpl = buscaFiliaisRepository(axiosInstance)

const buscaFiliaisUsecaseImpl = buscaFiliaisUsecase(buscaFiliaisRepositoryImpl)

const wger001Controller = (context: any) => 
    new Wger001Controller(context, buscaFiliaisRepositoryImpl)

export { wger001Controller }