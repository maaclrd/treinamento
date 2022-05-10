import { BuscaFiliaisRepository } from "../../data/repository/buscaRepository"
import { Wger001 } from "../model/wger001"

interface BuscaFiliaisUsecase {
    (): Promise<Wger001[]>
}

const buscaFiliaisUsecase = (repository: BuscaFiliaisRepository) => async () => {
    return await repository()
}

export { buscaFiliaisUsecase, BuscaFiliaisUsecase}