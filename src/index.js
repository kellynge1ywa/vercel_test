import express from "express";
import cors from "cors";
import 'dotenv/config';


//initialize express
const app= express();

const PORT= process.env.PORT;

//middlewares
app.use(express.json());
app.use(cors());

// app.use('/api', lipaNaMpesaRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to vercel deployment test!!');
});

app.listen(PORT, ()=>{
    console.log(`The app is running on port: http://localhost:${PORT}`);
})

export default app;





