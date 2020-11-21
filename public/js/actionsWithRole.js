
function stateOfRole(persons){
    let inputOfUser;
    let inputOfEditor;
    for (let i = 0; i < persons.length; i++) {
        if(persons[i].role==="editor") {
            inputOfEditor = document.querySelector(".choice-role-" + i + " input[value=editor]");
            inputOfEditor.setAttribute("checked", "checked");
        } else if(persons[i].role==="user") {
            inputOfUser = document.querySelector(".choice-role-" + i + " input[value=user]");
            inputOfUser.setAttribute("checked", "checked");
        } else {
            inputOfUser = document.querySelector(".choice-role-" + i + " input[value=user]");
            inputOfUser.setAttribute("disabled", "disabled");
            inputOfEditor = document.querySelector(".choice-role-" + i + " input[value=editor]");
            inputOfEditor.setAttribute("disabled", "disabled");
        }
    }
}


function buttonsForEnter (){
    let div= document.querySelector(".for-enter");
    if(sessionStorage.getItem('role')){
        if(sessionStorage.getItem('role')==="admin"){
            div.innerHTML="<button style='width:150px' class=\"button-for-enter\" onclick=\"document.location='edit'\" >" +
                "Изменение ролей</button>"
        }
        div.innerHTML+="<button class=\"button-for-enter\" onclick=\"window.home.personExit()\" >Выйти</button>"
    } else {
        div.innerHTML="<button class=\"button-for-enter\" onclick=\"document.location='enter'\" >Войти</button>\n"

    }
}

export {stateOfRole,buttonsForEnter}
