const db = require('../../database/models');

module.exports = {
    list: (req, res) => {
        db.Actor.findAll()
        .then((actors) => {
            res.json({
                meta: {
                    status: 200,
                    total: actors.length,
                    url: '/api/actors'
                },
                data: actors
            })
        })
        .catch((error)=>console.log(error));
    },

    detail: (req, res) => {
        db.Actor.findByPk(req.params.id)
        .then((actor) => {
            res.json({
                meta: {
                    status: 200,
                    url: '/api/actors/' + req.params.id
                },
                data: actor
            });
        })
        .catch((error)=>console.log(error));
    }
}