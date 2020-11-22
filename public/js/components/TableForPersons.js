import React from 'react';

function stateOfRole(persons){
    console.log(persons)
    let inputOfUser;
    let inputOfEditor;
    for (let i = 0; i < persons.length; i++) {
        console.log(persons[i].login)
        if(persons.role==="editor") {
            inputOfEditor = document.querySelector(".choice-role-" + persons.login + " input[value=editor]");
            inputOfEditor.setAttribute("checked", "checked");
        } else if(persons.role==="user") {
            inputOfUser = document.querySelector(".choice-role-" + persons.login + " input[value=user]");
            inputOfUser.setAttribute("checked", "checked");
        } else {
            inputOfUser = document.querySelector(".choice-role-" + persons.login + " input[value=user]");
            inputOfUser.setAttribute("disabled", "disabled");
            inputOfEditor = document.querySelector(".choice-role-" + persons.login + " input[value=editor]");
            inputOfEditor.setAttribute("disabled", "disabled");
        }
    }
}


function TableBodyForPersons (props){

    return (
        <tr>
            <td>{props.item.login}</td>
            <td>
                <div className={"form_radio_group choice-role-"+props.item.login+" choice-edit"}>
                    <div className="form_radio_group-item">
                        <input type="radio" id={'user-'+props.item.login} name={'role-'+props.item.login} value="user"
                               onClick={props.changeRole} /><label htmlFor={'user-'+props.item.login}>Пользователь</label>
                    </div>
                    <div className="form_radio_group-item">
                        <input type="radio" id={'editor-'+props.item.login} name={'role-'+props.item.login} value="editor"
                               onClick={props.changeRole} /><label htmlFor={'editor-'+props.item.login} >Редактор</label>
                    </div>
                    <div className="form_radio_group-item">
                        <input type="radio" id={'admin-'+props.item.login} name={'role-'+props.item.login} value="admin" disabled/><label
                        htmlFor={'admin-'+props.item.login}>Админ</label>
                    </div>
                </div>
            </td>
        </tr>
    )
}

function TableTheadForPersons (){
    return (
        <thead>
        <tr>
            <th scope="col">Логин</th>
            <th scope="col">Роли</th>
        </tr>
        </thead>
    )
}

export {TableTheadForPersons,TableBodyForPersons,stateOfRole}