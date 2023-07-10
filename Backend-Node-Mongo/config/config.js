import mongoose from "mongoose";

const conectarDB= async () =>{
    try {
        const connectionDB= await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        const url = `Conectado a Mongodb en server ${connectionDB.connection.host}- en puerto ${connectionDB.connection.port}`
        console.log(url);
    } catch (error) {
        console.log(`${error.message}`);
        process.exit(1);
    }
};

export default conectarDB;
