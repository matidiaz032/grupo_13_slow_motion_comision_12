let controller = {
    index: (req, res) => {
        res.render('./admin/motionUsers', {
            title: 'Admin - Page : Users'
        })
    }
}

module.exports = controller