// exports.index = function(req, res, next){
//     res.render('index', { title: 'Express' });
// };

function get_landing(req, res, next){
    res.render('landing', { heading: 'Demo Express', title: 'Express' });
}

function submit_lead(req, res, next){
    console.log("lead email: ", req.body.lead_email);
    res.redirect('/');
}

module.exports = {
    get_landing,
    submit_lead
};
