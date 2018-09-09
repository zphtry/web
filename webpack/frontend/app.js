'use strict';

document.getElementById('loginButton')
.onclick = () => {

  require.ensure([], (require) => {
    const login = require('./login');

    login();
  })
}