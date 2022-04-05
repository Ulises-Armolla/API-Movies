const db = require('../../database/models');

module.exports = {
    create: (req,res) => {
        const {title, rating, awards, release_date} = req.body;
        db.Movie.create({
            title,
            rating,
            awards,
            release_date        
        })
        .then((movie)=> {
            res.json({
                meta: {
                    status: 200,
                    url: '/api/movies/create',
                    created: 'Successfull'
                },
                data: movie
            });
        })            
        .catch(error => console.log(error));
    },

    destroy: (req,res) => {
        db.Movie.destroy({where: {id: req.params.id}})
        .then((result)=> {
            res.json({
                meta: {
                    status: 200,
                    url: '/api/movies/destroy/:id'
                },
                delete: 'Successfull' 
            });
        })            
        .catch(error => console.log(error));
    }
}