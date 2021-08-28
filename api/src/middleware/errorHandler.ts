export const errorHandler = (err, req, res, next) => {
    console.log("Error occured:  /n", err);
    res.status(500).send("Something went wrong!");
}

export default errorHandler;