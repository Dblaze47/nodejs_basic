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
    },
    show_lead: (req, res, next) => {
        return models.Lead.findOne({
            where: {
                id: req.params.lead_id
            }
        }).then(lead => {
            res.render('lead/lead', {  lead: lead});
        });
    },
    show_edit_lead: (req, res, next) => {
        return models.Lead.findOne({
            where: {
                id: req.params.lead_id
            }
        }).then(lead => {
            res.render('lead/edit_lead', { lead: lead });
        });
    },
    edit_lead: (req, res, next) => {
        return models.Lead.update({
            email: req.body.lead_email
        }, {
            where: {
                id: req.params.lead_id
            }
        }).then(result => {
            res.redirect('/lead/' + req.params.lead_id);
        });
    },
    delete_lead: (req, res, next) => {
        return models.Lead.destroy({
            where: {
                id: req.params.lead_id
            }
        }).then(results => {
            res.redirect('/leads');
        });
    }
};
