var Users = {
    /**
     * @param req
     * @param res
     */
    index: function (req, res) {
        res.render('users/index', {"title": "Coucou"});

    },
    create: function (req, res) {

    },
    update: function (req, res) {

    },
    delete: function (req, res) {

    }
};

module.exports = Users;