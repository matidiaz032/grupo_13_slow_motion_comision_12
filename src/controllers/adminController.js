let controller = {
    index: (req, res) => {
        res.render('./admin/administrator', {
            title: 'Admin - Page'
        })
    },
    movies: (req, res) => {
        res.render('./admin/adminMovies', {
            title: 'Admin - Page : Movie'
        })
    },
    series: (req, res) => {
        res.render('./admin/adminSeries', {
            title: 'Admin - Page : Series'
        })
    },
    motionUsers: (req, res) => {
        res.render('./admin/motionUsers', {
            title: 'Admin - Page : Users'
        })
    },
    form: (req, res) => {
        res.render('./admin/uploadFiles', {
            title: 'Admin - Page : Form'
        })
    }

}

module.exports = controller