module.exports = function(options) {
    return function(req, res, next) {
        console.log(options)
        // Implement the middleware function based on the options object
        next()
    }
}