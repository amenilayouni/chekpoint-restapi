const express = require('express')
const app= express()
const mongoose=require('mongoose')
const userRoute = require('./routes/userRoutes')
mongoose.set('strictQuery', true);

app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017') 
.then(res=> console.log('DB is connected'))
.catch(err=> console.log(err))
app.use('/api/users', userRoute)

                                          

const port=9000;

app.listen(port, err=> err? console.log(error): console.log(`server is running on ${port}`));