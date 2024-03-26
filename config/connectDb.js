const mongoose = require('mongoose')
const connectDatabase = async () => {
    try {
        await mongoose.connect(process.env.DB_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        console.log('> Database connected successfully')
    } catch (error) {
        console.log('> Database connection failed')
        console.log(error)
    }
}
module.exports = connectDatabase