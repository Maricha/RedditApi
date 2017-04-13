const basicController = {};

basicController.getAvatar = (req, res) => {
    res.json({
        message: 'welcome to our api!'
    })
};

export default basicController;