const mongoose = require('mongoose');

const rondaSchema = new mongoose.Schema({
    id_User:{
        type: String,
        required: true,
    },
    registro:{
        type: Boolean,
        required: true,
    },
    fecha:{
        type: String,
        required: true,
    },
    asistencia:{
        type: Boolean,
        required: true,
    },

});
const Ronda = mongoose.model('Ronda', rondaSchema);

module.exports = Ronda