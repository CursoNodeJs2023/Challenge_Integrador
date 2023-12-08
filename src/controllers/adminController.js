const adminController = {
    admin:(req, res) => res.render('../views/admin/admin', {
        view: {
            title: "Admin | Funkoshop"
        }
    }),
    create:(req, res) => res.render('../views/admin/create', {
        view: {
            title: "Create | Funkoshop"
        }
    }),
    createItem:(req, res) => res.send('Create route that receive a new item data to add in Database'),
    edit:(req, res) => res.render('../views/admin/edit', {
        view: {
            title: "Edit | Funkoshop"
        }
    }),
    editItem:(req, res) => res.send('Edit route that receive data to modify an item in Database '),
    delete:(req, res) => res.send('Delete route that receive the ID to the item to delete from Database'),
    login:(req, res) => res.render('../views/admin/login', {
        view: {
            title: "Login | Funkoshop"
        }
    }),
    loginUser:(req, res) => res.send('Login route that receive the data when user click login button'),
    register:(req, res) => res.render('../views/admin/register', {
        view: {
            title: "register | Funkoshop"
        }
    }),
    registerUser:(req, res) => res.send('Register route that receive the data when user click register button')
    

}
module.exports = adminController;