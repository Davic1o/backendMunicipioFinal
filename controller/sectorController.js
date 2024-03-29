const Sector = require('../model/sectorModel')

exports.getSectores = async (req, res) => {
    try {
        const sectors = await Sector.find();
        res.json(sectors);
    }catch (error){
        res.status(500).json({error: error.message});
    }
};

exports.createSector = async (req, res) => {
    try {
      const newSector = new Sector(req.body);
      const savedSector = await newSector.save();
      res.status(201).json(savedSector); // 201 Created
    } catch (error) {
      console.error('Error al crear el sector:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  };
  