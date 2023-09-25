class ExpressError extends Error{
    constructor(message, statusCode){
        super();                        // super() will call the default Error constructor
        this.message = message;
        this.statusCode = statusCode;
    }
}

module.exports = ExpressError;