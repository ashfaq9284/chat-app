const mongoose = require('mongoose');
const uri = process.env.ATLASURI;

// connect to MongoDB Atlas
mongoose.connect(uri,)
// mongoose.connect('mongodb://127.0.0.1:27017/chat-app-mongoDB')

.then( () => console.log('Connected to MongoDB!'))
.catch( err => console.log(err))