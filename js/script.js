app.get('/quiz1', (req, res) => {
    res.sendFile(__dirname + '/quiz1/index.html');
});
