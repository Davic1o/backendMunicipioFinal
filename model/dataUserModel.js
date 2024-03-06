const mongoose = require('mongoose');

const dataUserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    cedula:{
        type: String,
        required: true,
    },
    tipo:{
        type: String,
        required: false,
    },
    zona:{
        type: String,
        required: true,
    },
    aprobar:{
        type: Boolean,
        required: true,
    },
    rechazar:{
        type: Boolean,
        required: true,
    },
    id_Sector:{
        type: String,
        required: false,
    },


});
const DataUser = mongoose.model('DataUsers', dataUserSchema);

module.exports = DataUser