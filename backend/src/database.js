const mongoose=require('mongoose');
const URI='mongodb://172.31.26.101:27017/usuarios_db';
mongoose.connect(URI)
.then(db=> console.log('DB conectada'))
.catch(err=> console.error(err));

module.exports=mongoose;
