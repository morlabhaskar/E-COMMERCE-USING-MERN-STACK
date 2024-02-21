const errorHandler = (req,res,err,next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    res.status(statusCode)
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === "development" ? err.stack : null
    })
}
module.exports = errorHandler;

// 4:36:22