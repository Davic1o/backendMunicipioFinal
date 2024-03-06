const mongoose = require('mongoose');

const horarioSchema = new mongoose.Schema({
    id_Ronda:{
        type: String,
        required: true,
    },
    hora_Ronda:{
        type: String,
        required: true,
    },
   

});
const Horario = mongoose.model('Horario', horarioSchema);

module.exports = Horario