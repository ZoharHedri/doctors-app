
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');


const app = express();

// Serve static files
app.use(express.static('public'));
app.use(express.static('node_modules'));


// body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/listDoctors' ,function(req,res){
    let data = fs.readFileSync('db.json');
    let listData = JSON.parse(data);
    // console.log(listData.Doctors);//good,give all the doctors list
    let listDoctors = listData.Doctors
    res.send(listDoctors); //db.json
    //just to display the list of the doctors

});

app.post('/meeting', function(req,res){
    
    //console.log(req.body);//good
    try {
        let Appointment = {
            DoctorId: req.body.Doctorid,
            ServiceId:  req.body.Servicesid,
            DateTime: req.body.Date
        }

        let data = JSON.stringify(Appointment);
        //console.log(data); //good
        let old = fs.readFileSync('db.json');
        var oldData = JSON.parse(old);
        oldData.Appointments.push(data);
        //console.log(oldData.Appointments); //good
        console.log(oldData);
        fs.writeFile('db.json',JSON.stringify(oldData ,null, 2) ,function(err){ 
            if(err)
                throw err;
            console.log('all good')
        });
        
        //console.log('meetning successfully determined'); //good
        res.send("saved");
    } catch (err){
        res.send("failed")
    }

})


app.listen(8000, ()=> console.log("server listen on port 8000..."));
