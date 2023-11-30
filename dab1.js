const { Client } = require('pg')
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'vyshu',
  port: 5432,
})
client.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
module.exports = {
    dab1 : function(req,res) {
        //const student_id = req.body.student_id[0];
        //const student_name = req.body.student_name[0];
        //const student_marks = req.body.student_marks[0];
    const multiplerows = req.body;
   
const query = `INSERT INTO studentd (student_id,student_name,student_marks) values ($1,$2,$3)`;
multiplerows.forEach(row => {
    const { student_id, student_name, student_marks } = row;
        client.query(query,[student_id,student_name,student_marks], (err, result) => {
    if (err) {
      console.error('Error executing query', err);
      return;
    }
  
    res.json('Query result:', result.rows);
    
  });
 
res.json('success')
    })
}}