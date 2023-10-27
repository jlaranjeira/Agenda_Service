const AgService = require('../services/AgService');

module.exports = {
    
    buscarTodos: async (req, res) => {
        let json = {error:'', result:[]};

        let clients = await AgService.buscarTodos();

        for(let i in clients){
            json.result.push({
                id: clients[i].id,
                email: clients[i].email,
                telefone: clients[i].telefone,

            });
        }

        res.json(clients);
    },

    buscarUm: async (req, res) => {
        let json = {error:'', result:{}};

        let id = req.params.id; //para pegar o parametro
        let client = await AgService.buscarUm(id);

        if(client){
            json.result = client; //se tiver nota ele joga no json
        }

        res.json(json);
    },

    inserir: async(req, res) => {
        let json = {error:'', result:{}};

        let nome = req.body.nome;
        let email = req.body.email;
        let telefone = req.body.telefone;

        if (nome && email && telefone){
            let Clientid = await AgService.inserir(nome, email, telefone);
            json.result = {
                id: ClientId,
                nome,
                email,
                telefone
            };
        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },

    alterar: async(req, res) => {
        let json = {error:'', result:{}};

        let id = req.params.id;
        let nome = req.body.nome;
        let email = req.body.email;
        let telefone = re.body.telefone;

        if (id && nome && email && telefone){
            await ClientService.alterar(id, nome, email, telefone);
            json.result = {
                id,
                nome,
                email,
                telefone
            };
        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },
    excluir: async(req, res) => {
        let json = {error:'', result:{}};

        await ClientService.excluir(req.params.id);
        
        res.json(json);
    },
}


