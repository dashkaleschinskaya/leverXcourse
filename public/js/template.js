import {stateOfRole} from "./actionsWithRole";


class TemplatesForView {
    constructor(options){
        this.persons=options.persons;
    }

    templateForPersonsTable(){
        document.querySelector("#content-edit").innerHTML = '';
        if(!sessionStorage.length){
            let div=document.querySelector("#content-edit")
            div.innerHTML = "<h4>Пожалуйста,зарегистрируйтесь или войдите для просмотра информации сотрудников</h4>"
        } else {
            let str = document.getElementById('table_body_for_persons').textContent;
            let str_thead = document.getElementById('table_thead_for_persons').textContent;
            let table = document.createElement('table');
            let tbody = document.createElement('tbody');
            table.className = "table register-person";
            table.innerHTML = str_thead;


            for (let i = 0; i < this.persons.length; i++) {
                let template = str.replace(/login/g, this.persons[i].login)
                    .replace(/role-i/g, 'role-'+[i])
                tbody.innerHTML += template;
            }
            document.querySelector("#content-edit").append(table);
            document.querySelector(".table").append(tbody)
            stateOfRole(this.persons)
        }
    }

    templateForTable(){
        //  buttonsForEnter()
        document.querySelector("#content").innerHTML = '';
        if(!sessionStorage.length){
            let div=document.querySelector("#content")
            div.innerHTML = "<h4>Пожалуйста,зарегистрируйтесь или войдите для просмотра информации сотрудников</h4>"
        } else {
            let str = document.getElementById('table_body').textContent;
            let str_thead = document.getElementById('table_thead').textContent;
            let table = document.createElement('table');
            let tbody = document.createElement('tbody');
            table.className = "table";
            table.innerHTML = str_thead;

            for (let i = 0; i < this.persons.length; i++) {
                let template = str.replace('id_of_person', this.persons[i].id)
                    .replace('name', this.persons[i].name)
                    .replace('surname', this.persons[i].surname)
                    .replace('image', this.persons[i].image)
                    .replace('department', this.persons[i].department)
                    .replace('room', this.persons[i].room);

                tbody.innerHTML += template;
            }
            document.querySelector("#content").append(table);
            document.querySelector(".table").append(tbody)
        }
    }

    templateForGrid(){
        // buttonsForEnter()
        document.querySelector("#content").innerHTML = '';
        if(!sessionStorage.length){
            let div=document.querySelector("#content")
            div.innerHTML = "<h4>Пожалуйста,зарегистрируйтесь или войдите для просмотра информации сотрудников</h4>"
        } else {
            let str = document.getElementById('grid').textContent;
            let div = document.createElement('div');
            div.className = "grid-container";
            document.querySelector("#content").append(div);

            for (let i = 0; i < this.persons.length; i++) {
                let template = str.replace('id_person', this.persons[i].id)
                    .replace('name', this.persons[i].name)
                    .replace('surname', this.persons[i].surname)
                    .replace('image', this.persons[i].image)
                    .replace('department', this.persons[i].department)
                    .replace('room', this.persons[i].room);

                div.innerHTML += template;
            }
        }
    }

    templateAboutPerson() {
        //   buttonsForEnter()

        document.querySelector(".main").innerHTML = '';

        let str = document.getElementById('about').textContent;
        let div = document.createElement('div');
        div.className = "container";
        document.querySelector(".main").append(div);


        let template = str.replace('person_id', this.persons.id)
            .replace('name', this.persons.name)
            .replace('surname', this.persons.surname)
            .replace('image', this.persons.image)
            .replace('department', this.persons.department)
            .replace('internal_phone', this.persons.internal_phone)
            .replace('mobile_phone', this.persons.mobile_phone)
            .replace('email', this.persons.email)
            .replace('skype', this.persons.skype)
            .replace('hire_date', this.persons.hire_date)
            .replace('status', this.persons.status)
            .replace('start_empl', this.persons.start_empl)
            .replace('work_day', this.persons.work_day)
            .replace('vacation', this.persons.vacation)
        ;
        div.innerHTML += template;
        if (sessionStorage.getItem('role')) {
            if (sessionStorage.getItem('role') === "admin" || sessionStorage.getItem('role') === "editor") {
                let tbody = document.querySelector('tbody');
                tbody.innerHTML += "<button style='width:130px;' class=\"button-for-enter\" onclick=\"document.location='edit'\" >Редактировать</button>"
            }
        }
    }


}

export {TemplatesForView}



