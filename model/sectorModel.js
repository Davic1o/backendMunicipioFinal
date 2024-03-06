const mongoose = require('mongoose');

const sectorSchema = new mongoose.Schema({
    nombre_Sector:{
        type: String,
        required: true,
    },
    id_Zona:{
        type: String,
        required: true,
    },
   

});
const Sector = mongoose.model('Sector', sectorSchema);

module.exports = Sector