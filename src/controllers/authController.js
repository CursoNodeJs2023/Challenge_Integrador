const userCredentials = {
  email: 'prueba1@hotmail.com',
  password: 'asdfasdf'
}

module.exports = {
  loginView:  (req, res) => res.render('./admin/login', {
    view: {
      title: 'Login | Funkoshop'
    }
  }),
  loginUser:  (req, res) => {
    const { email, password } = req.body;
    const emailValidation = userCredentials.email == email;
    const passwordValidation = userCredentials.password == password;

    req.session.isLogged = emailValidation && passwordValidation ? true : false;

    if (req.session.isLogged) {
      res.locals.isLogged = true;
      return res.redirect('/admin');
    }

    return res.status(401).send('Credenciales inválidas');
  },
  registerView:  (req, res) => res.render('./admin/register', {
    view: {
      title: 'Register | Funkoshop'
    }
  }),
  registerUser: async (req, res) =>  {
    const id = req.params.id;
    const item = req.body;

    await ItemsServices.edit(item, id);
    res.redirect('/admin');
  },

  logoutUser:  (req, res) => {
    req.session.isLogged = false;
    res.send('Sesión finalizada con éxito.')
    
    
  },
}

    