let controller = {
    index: (req, res) => {
        res.render('./admin/administrator', {
            title: 'Admin - Page'
        })
    }
}

module.exports = controller