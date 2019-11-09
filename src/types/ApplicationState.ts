export interface Lutador {
    id: number,
    nome: string,
    idade: number,    
    artesMarciais: Array<string>
    lutas: number,
    derrotas: number,
    vitorias: number,
}

export interface ApplicationLutadorData {
    lutadoresList?: Array<Lutador>
}

export interface ResultadoJogo {
    vencedor?: Lutador,
    perdedor?: Lutador
}

export interface ApplicationTorneioData {
    vencedor?: Lutador,
    vice?: Lutador,
    terceiroColocado?: Lutador,
    faseDeGrupos?: Array<ResultadoJogo>,
    quartasDeFinal?: Array<ResultadoJogo>,
    semiFinal?: Array<ResultadoJogo>,
    terceiroJogo?: ResultadoJogo,
    final?: ResultadoJogo
}


interface ApplicationState {
    lutador?: ApplicationLutadorData,
    torneio?: ApplicationTorneioData
}

export default ApplicationState;