const expr = require("express");
const d = require("./dab1.js");
var app = expr();
app.use(expr.json());
app.use('/dab1',d.dab1)

const start = (port) => {
    try{
        app.listen(port,()=>{
            console.log('running');
        })
    } catch (err) {
        console.error(err);
        process.exit();
    }
};
start(3000);
