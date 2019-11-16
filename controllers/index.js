// exports.index = function(req, res, next){
//     res.render('index', { title: 'Express' });
// };
/* We can either export function by function, or make a module export to export an object with multiple functions.
* So we either do exports.funcName = function(params){ //code }
* Or we do module.exports = { funcName: function(params){ //code } }
* Or to keep it clean:
* function myFunc(params){ //code };
* module.exports = { funcName: myFunc };
*
* */
function indexController(req, res, next){
    res.render('index', { title: 'Express' });
};

module.exports = {
    index: indexController
};
