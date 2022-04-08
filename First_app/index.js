const express = require('express')
const app = express()
const userRouter = require('./router/users')

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(userRouter)

app.listen(3000, function () {
  console.log('Server Sudah Hidup')  
})
