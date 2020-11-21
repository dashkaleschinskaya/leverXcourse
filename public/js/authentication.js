import {fetchClass} from './fetch.js';


const personRegistration = () => {
    const body={
        login: document.getElementById("register-login").value,
        password: document.getElementById("register-password").value,
        role:document.querySelector(".choice-role input:checked").value
    }
    const fetchThree = new fetchClass({
        url: "http://localhost:3000/registration",
        body: body,
        method: 'POST'
    })
    fetchThree.fetchFunc()
        .then(data => {
            sessionStorage.setItem('login',data[0].login);
            sessionStorage.setItem('password',data[0].password)
            sessionStorage.setItem('role',data[0].role)

            window.location.href = '../../views/index';

        })
        .catch(err => console.log(err));
}

const personEnter=()=>{
    const body={
        login: document.getElementById("enter-login").value,
        password: document.getElementById("enter-password").value,
    }
    const fetchFour = new fetchClass({
        url: "http://localhost:3000/enter",
        body: body,
        method: 'POST'
    })
    fetchFour.fetchFunc()
        .then(data => {
            sessionStorage.setItem('login',data[0].login);
            sessionStorage.setItem('password',data[0].password)
            sessionStorage.setItem('role',data[0].role)

            window.location.href = '../../views/index';

        })
        .catch(err => console.log(err));
}

const personExit=()=>{
    sessionStorage.clear()
    window.location.reload()
}

export {personRegistration,personEnter,personExit}