const crypto = require ("crypto")

const hashPassword = (plainText) => {
return crypto.createHmac("sha256", "secret key")
    .update(planText)
    .digest("hex");
}

module.exports = { hashPass};