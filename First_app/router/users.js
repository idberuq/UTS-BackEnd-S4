const express = require('express')
const router = express.Router()
const usercontroller = require('../controller/user')

router.route('/users')
.get(usercontroller.index) 
.post(usercontroller.input)

router.route('/users/:id')
.get(usercontroller.getUserById) 
.put(usercontroller.update)
.delete(usercontroller.hapus)


module.exports = router
