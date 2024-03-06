const Horario = require('../model/horarioModel')

exports.getHorarios = async (req, res) => {
    try {
        const horarios = await Horario.find();
        res.json(horarios);
    }catch (error){
        res.status(500).json({error: error.message});
    }
};

exports.createHorario = async (req, res) => {
    try{
        const newHorario = new User(req.body);
        const savedHorario = await newHorario.save();
        res.json(savedHorario);
    }catch(error){
        res.status(500).json({error: error.message});
    }
};