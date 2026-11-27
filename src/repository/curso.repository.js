import db from "../config/database.js";

db.run(`
    CREATE TABLE IF NOT EXISTS curso(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome  TEXT  NOT NULL UNIQUE,
        area TEXT NOT NULL,
        nivel  TEXT  NOT NULL,
        modalidade  TEXT  NOT NULL

    )
`);

function createCursoRepository(novoCurso) {
    return new Promise((resolve, reject) => {
        const {
            nome,
            area,
            nivel,
            modalidade
        } = novoCurso;

        db.run(
            `INSERT INTO curso(nome, area, nivel, modalidade)
            VALUES(?,?,?,?)`,
            [nome, area, nivel, modalidade],
            (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(novoCurso);
                }
            }
        )
    });
}

function readAllCursoRepository() {
    return new Promise((resolve, reject) => {
        db.all(
            `SELECT * FROM curso`,
            [],
            (error, rows) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(rows);
                }
            }
        );
    });
}

export default {
    createCursoRepository,
    readAllCursoRepository
}