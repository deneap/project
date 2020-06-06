module.exports = (app) => {
        app.post('/register', (req, res) =>{
                res.send({
                    message: `Salut Utilizatorul tau ${req.body.email}!  a fost inregistrat!`
                })
            })
}
