const express = require('express')
const fs = require('fs');

const app = express()

const packageJson = JSON.parse(fs.readFileSync("./package.json", "utf-8"));
const port = packageJson.setting["port"];

app.use('/',
    (request, response, next) => 
    {
        response.header("Access-Control-Allow-Origin", "*");
        response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    },
    express.static("./public")
);

app.listen(port, () =>
{
    console.log(`Start server port:${port}`)
})
