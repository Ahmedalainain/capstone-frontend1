const jwt = require("jsontoken");
require("dotenv").config();

module.exports = async (req, res, next) => {
    try {
        const jwtToken = req.header("token");

        if (!jwtToken) {
            return res.status(403).send("Not Authorize");
        }

        const payload = jwt.verify(jwtToken, process.env.jwtSecret);

        req.user = payload.user;
    } catch (err) {
        console.error(err.message);
        return res.status(403).send("Not Authorize");
    }
}