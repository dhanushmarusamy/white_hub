const express=require("express")
const cors=require("cors")

const app=express()
const  port=6500;
const jwt=require('jsonwebtoken');
const  bcrypt=require('bcryptjs');
app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
  res.send(" Welcome to home")
})
const localusers = [];  // To store no of users

const secretKey = 'your-secret-key6';

app.post('/register',async(req,res)=>{
    const {username,password}=req.body;
    const hashedPassword= await bcrypt.hash(password,10);
    localusers.push({username,password:hashedPassword});
    res.sendStatus(201);
    console.log("User registered Successfully")
})

app.post('/login',async(req,res)=>{
    const {username,password}=req.body;
    const user=localusers.find((us)=>us.username===username)
    if(user){
       const isValiduser=await bcrypt.compare(password,user.password,);
       if(isValiduser){
            const token=await jwt.sign({username},secretKey,{expiresIn:'1hr'})
            res.json({ token });
            console.log("login Successfully");
       }else{
            res.status(401).json({message:'Invalid Credential,since Password Does not match'})
       }

    }else{
      res.status(401).json({message:'Invalid Credential,since User Not Found,SignUp to Login plz'})
    }
})

const { MongoClient, ServerApiVersion,ObjectId } = require('mongodb');
const uri = "mongodb+srv://mdhanushk79:12345@cluster0.phf7efm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const white=client.db("white").collection("hub")
    app.post("/store",(req,res)=>{
      const data=req.body;
      const result=white.insertOne(data)
      res.send(result)
    })
    app.get("/get",async(req,res)=>{
      const data=white.find()
      // console.log(data)
      const result=await data.toArray()
      res.send(result)
    })

      app.delete('/delete/:id',async(req,res)=>{
      const id=req.params.id;
      // console.log(id)
      const filter={_id:new ObjectId(id)};
      const result=await white.deleteOne(filter);
      res.status(200).json({success:true , message:"data deleted successfully", result});
  })
  app.get("/getbyid/:id",async(req,res)=>{
    const id=req.params.id;
    const filter={_id:new ObjectId(id)};
    const result=await white.findOne(filter);
    res.send(result);
  })
 app.patch("/icecream/:id",async(req,res)=>{
    
      const id=req.params.id;
      const updateFooddata=req.body;
      const filter={_id:new ObjectId(id)};

      const updateDoc={
          $set:{
              ...updateFooddata
          },
      }
      const options ={upsert:true};
      const result=await white.updateOne(filter,updateDoc,options);
      res.send(result);
  })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);




app.listen(port,()=>{
    console.log(`Connected to ${port}`)
}
)