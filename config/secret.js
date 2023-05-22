require("dotenv").config();
console.log(process.env.USER_DB);

exports.config = {
    PASS_DB:process.env.PASS_DB,
    USER_DB:process.env.USER_DB,
    TOKEN_SECRET:process.env.TOKEN_SECRET,
    CLOUD_KEY:"312378948683843",
    CLOUD_NAME:"drthosijy",
    CLOUD_SECRET:"ES3-26vKcSQrCaxh_MC1vQsbnEU"
}