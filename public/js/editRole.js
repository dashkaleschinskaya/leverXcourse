import {fetchClass} from './fetch.js';


 const editRole = (id) => {
    let roleAndLogin=id.split('-');
    const body={
        role:roleAndLogin[0],
        login:roleAndLogin[1]
    }
    const fetchTwo = new fetchClass({
        url: "http://localhost:3000/editRole",
        body: body,
        method: 'POST'
    })
    fetchTwo.fetchFunc()
        .then(data => {
            window.location.reload()
        })
        .catch(err => console.log(err));
}

export {editRole}