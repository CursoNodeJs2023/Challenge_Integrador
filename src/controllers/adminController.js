const adminController = {
    admin:(req, res) => res.send('Route for Admin View'),
    create:(req, res) => res.send('Create view route'),
    createItem:(req, res) => res.send('Create route that receive a new item data to add in Database'),
    edit:(req, res) => res.send('Edit view route'),
    editItem:(req, res) => res.send('Edit route that receive data to modify an item in Database '),
    delete:(req, res) => res.send('Delete route that receive the ID to the item to delete from Database'),
    login:(req, res) => res.send('Route for login admin page'),
    loginUser:(req, res) => res.send('Login route that receive the data when user click login button'),
    register:(req, res) => res.send('Route for the register admin'),
    registerUser:(req, res) => res.send('Register route that receive the data when user click register button')
    

}
module.exports = adminController;