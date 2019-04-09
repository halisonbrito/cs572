const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const client = new MongoClient('mongodb://localhost:27017');
var data = [{id:1,name:'charles',course:'MWA',grade:95}];

async function list(callback){
    client.connect( async function(err){
        const db = client.db('myNewDatabase');
        const collection = db.collection('mycollection');

         const data = await collection.find({}).toArray();

         console.log(data );
         callback(data);

    });
}


function add(newObj){

    client.connect( async function(err){
        const db = client.db('myNewDatabase');
        const collection = db.collection('mycollection');

         const data = await collection.insertOne(newObj);


    });

}

function del(id){

    client.connect( async function(err){
        const db = client.db('myNewDatabase');
        const collection = db.collection('mycollection');

         const data = await collection.deleteOne({_id:new mongodb.ObjectID(id)});


    });

}
 
function get(id,callback){
    client.connect( async function(err){
        const db = client.db('myNewDatabase');
        const collection = db.collection('mycollection');

         const data = await collection.findOne({});

         console.log(data );
         callback(data);

    });
}

function update(id,obj){
    client.connect( async function(err){
        const db = client.db('myNewDatabase');
        const collection = db.collection('mycollection');

         const data = await collection.update({_id:new mongodb.ObjectID(id)},obj);


    });
    
}


function findByText(text,callback){
    client.connect( async function(err){
        const db = client.db('myNewDatabase');
        const collection = db.collection('mycollection');
        
         const data = await collection.find({lecture:{$regex:text}}).toArray();
         console.log(data)
         callback(data);

    });

}

module.exports = {add,update,del,list,get,findByText};

