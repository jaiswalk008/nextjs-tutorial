const { MongoClient } = require("mongodb");

async function handler (req,res){
    if (req.method=== 'POST') {
        try {
            console.log(process.env.MONGODB_SRV)                
            const client = await MongoClient.connect('mongodb+srv://jaiskaran008:pf171f94@cluster0.dnknpkr.mongodb.net/meetups?retryWrites=true&w=majority');
            const db = client.db();
            const meetupsCollection = db.collection('meetups');
            const result = await meetupsCollection.insertOne(req.body);
            console.log(result);
            client.close();
            res.status(201).json({message:'Meetup added successfully'});
        } catch (error) {
            console.log(error);
        }

    }
   
}
export default handler;