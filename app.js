const http = require('http');
const port=process.env.PORT || 3000
const server = http.createServer((req, res) => {
res.statusCode = 200;
res.render('index')
server.listen(port,() => {
console.log(`Server running at port `+port);
});
app.set('view engine', 'ejs')
