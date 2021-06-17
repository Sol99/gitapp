const Sequelize = require('sequelize');

const db = require('../db.js');

const MovementType = require('./movementType.js');

/**
 * Modelo de movimiento.
 *
 *
 */
const Movement = db.define(
    'Movement',
    {
        // Atributos
        date: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        amount: {
            type: Sequelize.NUMBER,
            allowNull: false,
        },
        type: {
            type: Sequelize.STRING,
            allowNull: false,
            values: MovementType.types,
        },
        category: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        description: {
            type: Sequelize.STRING,
            allowNull: true,
        },

    },
    { tableName: 'Movement' }
);

/**
 * Obtener todos los movimientos de la base de datos.
 *
 */
const getAllMovements = (limit, skip, type) => {
    let where = {};

    if (type) {
        where = {
            ...where,
            type: type,
        };
        
    }

    return Movement.findAndCountAll({
        limit: limit,
        offset: skip,
        order: [['date','DESC']],       
        attributes: {
            exclude: ['createdAt', 'updatedAt'],
        },
        where: where,
    });
};

/**
 * Crear un movimiento nuevo.
 * Parámetro data: JSON con los atributos a crear.
 *
 * Se modifica la fecha para que devuelva la ingresada por pantalla
 */
const createMovement = ({
    date = new Date('01/01/2021'),
    amount = 0.0,
    type = MovementType.EXPENSE,
    category = '',
    description = '',
} = {}) => {
    return Movement.create({ date, amount, type, category, description });
};

/**
 * Modifica un movimiento ya existente.
 * Parámetro id: id a buscar en la base de datos.
 * Parámetro data: JSON con los atributos a crear.
 *
 */
const updateMovement = (
    id,
    {
        date = '01/01/2021',
        amount = 0.0,
        type = MovementType.EXPENSE,
        category = '',
        description = '',
    } = {}
) => {
    return Movement.findOne({ where: { id: id } }).then((movement) => {
        if (movement != null) {
            return movement.update({ date, amount, type, category, description });
        }
        return null;
    });
};

/**
 * Elimina un movimiento existente.
 * Parámetro id: id a buscar en la base de datos.
 *
 */
const deleteMovement = (id) => {
    return Movement.findOne({ where: { id: id } }).then((movement) => {
        if (movement != null) {
            return movement.destroy();
        }
        return null;
    });
};

const MovementModel = {
    Movement: Movement,
    getAll: getAllMovements,
    create: createMovement,
    update: updateMovement,
    delete: deleteMovement,
};

module.exports = MovementModel;
