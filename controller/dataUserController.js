const DataUser = require('../model/dataUserModel')

exports.getDataUsers = async (req, res) => {
    try {
        const datausers = await DataUser.find();
        res.json(datausers);
    }catch (error){
        res.status(500).json({error: error.message});
    }
};

exports.createDataUsers = async (req, res) => {
    try{
        const newDataUsers = new DataUser(req.body);
        const savedDataUsers = await newDataUsers.save();
        res.json(savedDataUsers);
    }catch(error){
        res.status(500).json({error: error.message});
    }
};


// En tu controlador
exports.updateUserAprobar = async (req, res) => {
    try {
        const { userId } = req.params;
        const { accion } = req.body;
    
        let updateFields = {};
        if (accion === 'aprobar') {
          updateFields = { aprobar: true };
        } else if (accion === 'rechazar') {
          updateFields = { rechazar: true };
        } else if (accion === 'actualizar') {
          updateFields = { tipo: "coordinador" }; // Aquí actualiza el campo 'tipo'
        } else {
          res.status(400).json({ error: 'Acción no válida' });
          return;
        }
    
        const result = await DataUser.findByIdAndUpdate(userId, updateFields, { new: true });
    
        if (result) {
          res.json({ message: 'Usuario actualizado exitosamente', result });
        } else {
          res.status(404).json({ error: 'Usuario no encontrado' });
        }
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
};

  





exports.createDefaultUser = async () => {
    try {
        const defaultUser = {
            username: 'admin',
            password: 'admin123',
            cedula: '0000000000',
            tipo: 'Administrador',
            zona: 'Norte',
            aprobar: true,
            rechazar: false,
        };

        const existingUser = await DataUser.findOne({ username: defaultUser.username });

        if (!existingUser) {
            const newUser = new DataUser(defaultUser);
            await newUser.save();
            console.log('Usuario por defecto creado exitosamente.');
        } else {
            console.log('El usuario por defecto ya existe.');
        }
    } catch (error) {
        console.error('Error al crear el usuario por defecto:', error.message);
    }
};