const http = require('http');
const express = require('express');

const app = express();

app.use((res, req, next) => {
  console.log('In the middleware!');
  next(); // 次の処理（middleware）を実行してもいい許可を出す
});
app.use((res, req, next) => {
  console.log('In another middleware!');
  res.send();
});
const server = http.createServer(app);

server.listen(3000);