const mongoose=require('mongoose');
//const URI='mongodb://172.31.26.101:27017/usuarios_db';
const URI='mongodb+srv://ccrespoc4_db_user:57SXE6VuJDzuLWps@msoft-ups.qbamrru.mongodb.net/?retryWrites=true&w=majority&appName=msoft-ups';
mongoose.connect(URI)
.then(db=> console.log('DB conectada'))
.catch(err=> console.error(err));

module.exports=mongoose;
