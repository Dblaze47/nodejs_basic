// exports.index = function(req, res, next){
//     res.render('index', { title: 'Express' });
// };

const models = require('../models');

module.exports = {
    get_landing: (req, res, next) => {
        res.render('landing', { heading: 'Demo Express', title: 'Express' });
    },
    submit_lead: (req, res, next) => {
        return models.Lead.create({
            email: req.body.lead_email
        }).then(lead => {
            res.redirect('/leads');
        });
    },
    show_leads: (req, res, next) => {
        models.Lead.findAll()
            .then(leads => {
                res.render('landing', {title: 'Demo Express', leads: leads});
            });
    }
};
