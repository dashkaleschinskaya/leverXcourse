import React from 'react';
import ReactDOM from 'react-dom'
 import '../style/index.scss';
import {fetchClass} from './fetch.js';
import {XMLHttpRequestClass} from './xmlhttprequest.js';
import {TemplatesForView} from "./template";
import {buttonsForEnter} from "./actionsWithRole";
import {personExit,personEnter,personRegistration} from "./authentication";
import {editRole} from "./editRole";

export {outputAllPersons,outputAllRegisteredPersons,outputPerson,searchPersons,personExit,personRegistration,personEnter,editRole,buttonsForEnter}


let item;
const fetchOne = new fetchClass({
    url: "http://localhost:3000/edit/editPage",
    body: null,
    method: 'GET'
})

 const outputAllRegisteredPersons = () => {
    fetchOne.fetchFunc()
        .then(data => {
            const templateRegisterPersons= new TemplatesForView({
                persons:data.person
            })
            templateRegisterPersons.templateForPersonsTable();
        })
        .catch(err => console.log(err));
}

  function outputAllPersons (id_form="change-grid") {
    const requestOne = new XMLHttpRequestClass({
        url: "http://localhost:3000/",
        body: null,
        method: 'GET'
    })
    requestOne.api().then(data => {
        item=data.items
        const templateForAllWorkers=new TemplatesForView({
            persons:data.items
        })
        if(id_form==="change-grid") {
            templateForAllWorkers.templateForGrid();
        } else if (id_form==="change-table") {
            templateForAllWorkers.templateForTable();
        }
    })
        .catch(err => console.log(err));
}

const idURL=(id)=>("http://localhost:3000/:"+id+"");
const outputPerson = (id) => {
    const requestTwo = new XMLHttpRequestClass({
        url: idURL(id),
        body: null,
        method: 'GET'
    })
    requestTwo.api()
        .then(data => {
            const templateForOutputWorker= new TemplatesForView({
                persons:data
            })
            templateForOutputWorker.templateAboutPerson(data);
        })
        .catch(err => console.log(err));
}

const searchPersons = () => {
    let params = 'name=' + encodeURIComponent(document.getElementById("search").value);
    const requestThree = new XMLHttpRequestClass({
        url: 'http://localhost:3000/search',
        body: params,
        method: "POST"
    })
    requestThree.api()
        .then(data => {
            const templateForSearch= new TemplatesForView({
                persons:data
            })
            if (!!document.querySelector(".grid-container")) {
                templateForSearch.templateForGrid(data)
            } else if (!!document.querySelector(".table")) {
                templateForSearch.templateForTable(data)
            }
        })
        .catch(err => console.log(err));
}

ReactDOM.render(
    <h1>Hello world!</h1>,
    document.querySelector('.switch')
)
