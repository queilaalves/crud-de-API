import cursoRepository from "../repository/curso.repository.js";

async function createCursoService(novoCurso) {
    const cursoSalvo  = await cursoRepository.createCursoRepository(novoCurso);

    if (!cursoSalvo) {
        throw new Error("Erro ao criar novo curso!");
    }

    return cursoSalvo;
}

async function readAllCursoService() {
    const cursos = await cursoRepository.readAllCursoRepository();
    
    return cursos;
}

export default {
    createCursoService,
    readAllCursoService
}