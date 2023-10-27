const db = require('../db');

module.exports = {
    buscarTodos: () => {
        return new Promise((aceito, rejeitado)=>{

            db.query('SELECT * FROM clients', (error, results)=>{
                if(error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    },

    buscarUm: (id) => {
        return new Promise((aceito, rejeitado)=>{

            db.query('SELECT * FROM clients WHERE id = ?', [id], (error, results) => {
                if(error) { rejeitado(error); return; }
                if(results.length > 0){ //vai verificar se retornou mais de 1 e pegar o 1
                    aceito(results[0]);
                }else {
                    aceito(false);
                }
            });
        });
    },
    inserir: (nome, email, telefone)=> {
        return new Promise((aceito, rejeitado)=> {

            db.query('INSERT INTO clients (nome, email, telefone) VALUES (?, ?, ?)',
                [nome, email, telefone],
                (error, results)=>{
                    if(error){ rejeitado(error); return; }
                    aceito(results.insertId); //insertId
                }
            );
        });
    },
    alterar:(nome, email, telefone)=> {
        return new Promise((aceito, rejeitado)=> {
            db.query('UPDATE clients SET nome = ?, email = ?, telefone = ? WHERE id = ?',
                [nome, email, telefone, id],
                (error, results) => {
                    if(error){ rejeitado(error); return; }
                    aceito(results);
                }
            );
        });
    },

    excluir: (id)=> {
        return new Promise((aceito, rejeitado)=> {
            db.query('DELETE FROM clients WHERE id = ?',[id], (error, results ) =>{
                if(error){ rejeitado(error); return; }
                aceito(results);
            });
        });
    }
};


