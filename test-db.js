import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: 'db',
  user: 'user',
  password: 'pass',
  database: 'grupo-a',
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err);
    return;
  }
  console.log('Conectado ao MySQL!');
});