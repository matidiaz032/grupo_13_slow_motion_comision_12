let controller = {
    index: (req, res) => {
        res.render('index', {
            title: 'SLOW MOTION'
        })
    }
}

module.exports = controller