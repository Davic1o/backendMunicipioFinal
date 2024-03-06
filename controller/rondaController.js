const Ronda = require('../model/rondaModel')

exports.getRondas = async (req, res) => {
    try {
        const rondas = await Ronda.find();
        res.json(rondas);
    }catch (error){
        res.status(500).json({error: error.message});
    }
};

exports.createRonda = async (req, res) => {
    try{
        const newRonda = new User(req.body);
        const savedRonda = await newRonda.save();
        res.json(savedRonda);
    }catch(error){
        res.status(500).json({error: error.message});
    }
};