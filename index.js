const express = require('express')
const app = express()
const fs = require('fs');

app.set('view engine', 'ejs')
app.set('views', './templates')

app.use(express.static('public'))

const imegesFolder = 'public/images/meme';
let arrFolder = [];

fs.readdir(imegesFolder, (err, files) => {
    files.forEach(file => {
        arrFolder.unshift(String(file));
    });
});

app.get("*", (req, res) => {
    console.log(req.url, req.method);

    res.setHeader('Content-Type', 'text/html');

    let data = {arr: arrFolder}
    let pach = ''
    switch(req.url) {
        case '/':
            pach += 'index';
            res.statusCode = 200;
            break;
        case '/about':
            pach += 'about';
            res.statusCode = 200;
            break;
        case '/meme':
            pach += 'meme';
            res.statusCode = 200;
            break;
        default:
            pach += '404';
            res.statusCode = 404;
            break;
    }

    console.log(pach)
    res.render(pach, { data })
})



let port = 5000
app.listen(port, () => {
    console.log(`Сервер запущен: ###:${port}`);
})