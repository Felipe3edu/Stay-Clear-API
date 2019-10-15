//importação Express
const express = require('express')

//Função Express (Definimos a Constante)
const app = express()

//Métodos
//get = pegar
//put = atualizar 
//post = postar
//delete = deletar

app.get('/users', (req, res) => {
    return res.json({
        usuario: 'Felipe Eduardo',
        idade: 22,
        amigos: ['Juliano', 'Fernando', 'Caio', 'Anderson', 'Kaique'],
        ativo: false

    }

    )
})

//Identificação da Porta
app.listen(3000)

