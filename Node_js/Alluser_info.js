router.get('/users_info', (req, res) => {
  connection.query('SELECT * FROM User', (error, rows) => {
    if(error) throw error;
    console.log('user info is : ', rows);
    
    res.status(200).send(rows)
    
  });
});