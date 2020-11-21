const path = require('path');
const express = require('express')
const fs=require('fs')
const cors = require("cors");
const bcrypt = require('bcrypt-nodejs');

const app = express()

const bodyParser = require("body-parser");
const port = 3000

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
// app.use('/public', express.static('public'));
app.use('/dist', express.static('dist'));

let items;

fs.readFile(__dirname+'/data.json',(error,data)=> {
    if (error) {
        throw error;
    }
      items=  JSON.parse(data.toString());

})

app.use(cors());

app.get('/', (req, res) => {

    res.send(items)
})

app.get('/:id', (req, res) => {
    let id=(req.params.id).split('');

    // console.log(cards.cards[0])
    for (let i = 0; i < items.items.length; i++) {
        if (items.items[i].id == id[1]) {
           res.send(items.items[i])
        }

}
});


app.post('/search', (req, res) => {
// let input=req.body.input;
// console.log(input)
  let input = req.param('name').toString();
  let  filter = input.toUpperCase();

    let newInput = filter.split(" ");
    let [name, surname] = newInput;

    let newObj=[]

    for(let i=0;i<items.items.length;i++) {
        if((name === items.items[i].name.toUpperCase() && surname === items.items[i].surname.toUpperCase()) || ((name === items.items[i].name.toUpperCase() || name === items.items[i].surname.toUpperCase()) && surname===undefined)){
          newObj.push(items.items[i])
        }
    }
console.log(newObj)
    console.log(typeof newObj)
       res.send(newObj)
})

let persons;
app.post('/registration', (req, res) => {
    let login=req.body.login;
    let password=+req.body.password;
    let role=req.body.role;

    fs.readFile(__dirname+'/credentials.json',(error,data)=> {
        if (error) {
            throw error;
        }
        persons = JSON.parse(data.toString());

        bcrypt.hash(password, null, null, (err, hash) => {
            persons.person.push( {
                login,
                password: hash,
                role
            })

            // persons.person.push(req.body)
            console.log(persons)

            fs.writeFile(__dirname + '/credentials.json', JSON.stringify(persons), function (err) {
                if (err) {
                    res.send({
                        ok: false,
                    });
                }
            })
            let mas = [persons.person[persons.person.length - 1]]
                res.send(mas);
        })
    })
})

app.post('/editRole', (req, res) => {
    let login=req.body.login;
    let role=req.body.role;

    fs.readFile(__dirname+'/credentials.json',(error,data)=> {
        if (error) {
            throw error;
        }
        persons = JSON.parse(data.toString());

   for(let i=0;i<persons.person.length;i++){
       if(persons.person[i].login===login){

           persons.person[i].role=role
       }
   }

            console.log(persons)

            fs.writeFile(__dirname + '/credentials.json', JSON.stringify(persons), function (err) {
                if (err) {
                    res.send({
                        ok: false,
                    });
                }
            })

            res.send(persons);
        })
    })


let person;
fs.readFile(__dirname+'/credentials.json',(error,data)=> {
    if (error) {
        throw error;
    }
    person = JSON.parse(data.toString());
})

app.post('/enter', (req, res) => {
let login=req.body.login;
let password=req.body.password;
let mas=[];

    for(let i=0;i<person.person.length;i++) {
        if (login === person.person[i].login) {
            bcrypt.compare(password, person.person[i].password, function(err, result) {
                if (result) {
                     mas.push(person.person[i])
                    res.send(mas);
                }
            })
        }
    }
})

app.get("/views/enter", function (req, res) {
    res.sendFile(__dirname +"/views/enter.html");
});

app.get("/views/edit", function (req, res) {
    res.sendFile(__dirname +"/views/edit.html");
});

app.get("/edit/editPage", function (req, res) {
    fs.readFile(__dirname+'/credentials.json',(error,data)=> {
        if (error) {
            throw error;
        }
        person = JSON.parse(data.toString());
        res.send(person)
    })
});

app.get("/views/index", function (req, res) {
    res.sendFile(__dirname +"/views/index.html");
});


app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
})
