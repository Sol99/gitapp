const { Movement } = require('../server/models/movement.js');
const MovementType = require('../server/models/movementType.js');

const movements = [
    {
        date: '01/01/2021',
        amount: 1000,
        type: MovementType.EXPENSE,
        category: 'Supermercado',
    },
    {
        date: '01/04/2021',
        amount: 587.5,
        type: MovementType.EXPENSE,
        category: 'Librería',
    },
    {
        date: '01/04/2021',
        amount: 50000,
        type: MovementType.INCOME,
        category: 'Sueldo',
    },
    {
        date: '01/04/2021',
        amount: 233,
        type: MovementType.EXPENSE,
        category: 'Supermercado',
    },
    {
        date: '01/05/2021',
        amount: 10000,
        type: MovementType.INCOME,
        category: 'Plazo Fijo',
    },
    {
        date: '01/07/2021',
        amount: 847,
        type: MovementType.EXPENSE,
        category: 'Supermercado',
    },
    {
        date: '01/08/2021',
        amount: 751,
        type: MovementType.EXPENSE,
        category: 'Supermercado',
    },
    {
        date: '01/10/2021',
        amount: 2500,
        type: MovementType.EXPENSE,
        category: 'Reparación Celular',
    },
    {
        date: '01/14/2021',
        amount: 1432,
        type: MovementType.EXPENSE,
        category: 'Supermercado',
    },
    {
        date: '01/15/2021',
        amount: 2300,
        type: MovementType.EXPENSE,
        category: 'Librería',
    },
    {
        date: '01/20/2021',
        amount: 4877,
        type: MovementType.EXPENSE,
        category: 'Regalos',
    },
    {
        date: '01/21/2021',
        amount: 2900,
        type: MovementType.EXPENSE,
        category: 'Regalos',
    },
    {
        date: '02/04/2021',
        amount: 50000,
        type: MovementType.INCOME,
        category: 'Sueldo',
    },
    {
        date: '02/05/2021',
        amount: 11000,
        type: MovementType.INCOME,
        category: 'Plazo Fijo',
    },
    {
        date: '02/07/2021',
        amount: 2100,
        type: MovementType.EXPENSE,
        category: 'Supermercado',
    },
    {
        date: '02/08/2021',
        amount: 876,
        type: MovementType.EXPENSE,
        category: 'Supermercado',
    },
    {
        date: '02/10/2021',
        amount: 1398,
        type: MovementType.EXPENSE,
        category: 'Supermercado',
    },
    {
        date: '02/15/2021',
        amount: 3456,
        type: MovementType.EXPENSE,
        category: 'Supermercado',
    },
    {
        date: '02/20/2021',
        amount: 1498,
        type: MovementType.EXPENSE,
        category: 'Supermercado',
    },
];

const init = () => {
    return Movement.sync({ force: true }).then(() =>
        Movement.bulkCreate(movements)
    );
};

if (require.main === module) {
    init();
}

module.exports = {
    init,
};