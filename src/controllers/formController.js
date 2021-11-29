let controller = {
    index: (req, res) => {
        res.render('./admin/uploadFiles', {
            title: 'Admin - Page : Form'
        })
    }
}

module.exports = controller