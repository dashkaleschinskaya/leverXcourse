// при изначальной загрузке страницы
// создать элемент,назначить класс и вставить после основного блока
let div = document.createElement('div');
div.className = "grid-container";
document.querySelector("#content").append(div);

for(let i=0;i<persons.item.length;i++) {
    // для всех объектов создать grid
    div.innerHTML+=( "<div class=\"grid-item\">\n" +
        "                   <img alt='' src=\""+persons.item[i].image+"\" width=\"150\" height=\"150\" style=\"border-radius: 200px;\">\n" +
        "                   <h6><b>"+persons.item[i].name+' '+persons.item[i].surname+"</b></h6>\n" +
        "                    <hr>\n" +
        "                <div>\n" +
        "                    <p><b>Отдел:</b>"+persons.item[i].department+"</p>\n" +
        "                    <p><b>Комната:</b>"+persons.item[i].room+"</p>\n" +
        "                </div>\n" +
        "             </div>\n");
}

function search() {
    let input, filter, i, mas=[];
    // получить текст, введенный в input
    input = document.getElementById("search");
    // полученное значение поднять в верхний регистр
    filter = input.value.toUpperCase();
    // полученную инфу превратить в массив и провести деструктуризацию
    let newInput = filter.split(" ");
    let [name, surname] = newInput;


// ввести имя объекта в верхний регистр, если совпадают, то добавить в массив
    for (i = 0; i < persons.item.length; i++) {
        if ((name === persons.item[i].name.toUpperCase() && surname === persons.item[i].surname.toUpperCase()) || (name === persons.item[i].name.toUpperCase() || name === persons.item[i].surname.toUpperCase())) {
            mas.push(persons.item[i])
            console.log(mas)
        }
    }

// проверить какой блок сейчас отображается на странице, если grid, то
    if (!!document.querySelector(".grid-container")) {
        // очистить поле и создать новый grid
        document.querySelector("#content").innerHTML = '';
        let div = document.createElement('div');
        div.className = "grid-container";
        document.querySelector("#content").append(div);
        if(mas.length===0){
            div.innerHTML = "<p>Ne naydeno!</p>";
        }
        else {
            for (let i = 0; i < mas.length; i++) {
                div.innerHTML += ("<div class=\"grid-item\">\n" +
                    "                   <img alt='' src=\"" + mas[i].image + "\" width=\"150\" height=\"150\" style=\"border-radius: 200px;\">\n" +
                    "                   <h6><b>" + mas[i].name + ' ' + persons.item[i].surname + "</b></h6>\n" +
                    "                    <hr>\n" +
                    "                <div>\n" +
                    "                    <p><b>Отдел:</b>" + mas[i].department + "</p>\n" +
                    "                    <p><b>Комната:</b>" + mas[i].room + "</p>\n" +
                    "                </div>\n" +
                    "             </div>\n");

            }
        }
        // если отображается таблица, то
    } else if (!!document.querySelector(".table")) {
        document.querySelector("#content").innerHTML = '';
        let table = document.createElement('table');
        let tbody = document.createElement('tbody');
        table.className = "table";
        document.querySelector("#content").append(table);

        table.innerHTML = " <thead>\n" +
            "                <tr>\n" +
            "                    <th scope=\"col\">Фото</th>\n" +
            "                    <th scope=\"col\">Инициалы</th>\n" +
            "                    <th scope=\"col\">Отдел</th>\n" +
            "                    <th scope=\"col\">Комната</th>\n" +
            "                </tr>\n" +
            "                </thead>\n";
        if(mas.length===0){
            tbody.innerHTML = "<tr><td colspan=\'4\'>Ne naydeno!</td></tr>";
                    document.querySelector(".table").append(tbody)
        } else {
            for (let i = 0; i < mas.length; i++) {
                tbody.innerHTML += "   <tr>\n" +
                    "                    <td><img alt='' src=\"" + mas[i].image + "\" width=\"60\" height=\"60\" style=\"border-radius: 200px;\"></td>\n" +
                    "                    <td>" + mas[i].name + ' ' + mas[i].surname + "</td>\n" +
                    "                    <td>" + mas[i].department + "</td>\n" +
                    "                    <td>" + mas[i].room + "</td>\n" +
                    "                </tr>\n";
                document.querySelector(".table").append(tbody)
            }
        }
    }

}




function changeOnGrid() {
    // очистить поле и создать новый grid
    document.querySelector("#content").innerHTML='';
    let div = document.createElement('div');
    div.className = "grid-container";
    document.querySelector("#content").append(div);

    for(let i=0;i<persons.item.length;i++) {
        div.innerHTML+=( "<div class=\"grid-item\">\n" +
            "                                        <img alt='' src=\""+persons.item[i].image+"\" width=\"150\" height=\"150\" style=\"border-radius: 200px;\">\n" +
            "                                        <h6><b>"+persons.item[i].name+' '+persons.item[i].surname+"</b></h6>\n" +
            "                                        <hr>\n" +
            "                    <div>\n" +
            "                                           <p><b>Отдел:</b>"+persons.item[i].department+"</p>\n" +
            "                                            <p><b>Комната:</b>"+persons.item[i].room+"</p>\n" +
            "                                        </div>\n" +
            "                               </div>\n");
    }
}


function changeOnTable() {
    // очистить поле и создать новую таблицу
    document.querySelector("#content").innerHTML = '';
    let table = document.createElement('table');
    let tbody = document.createElement('tbody');
    table.className = "table";

    table.innerHTML = " <thead>\n" +
        "                <tr>\n" +
        "                    <th scope=\"col\">Фото</th>\n" +
        "                    <th scope=\"col\">Инициалы</th>\n" +
        "                    <th scope=\"col\">Отдел</th>\n" +
        "                    <th scope=\"col\">Комната</th>\n" +
        "                </tr>\n" +
        "                </thead>\n" ;

    for (let i = 0; i < persons.item.length; i++) {
        tbody.innerHTML += "   <tr>\n" +
            "                    <td><img alt='' src=\""+persons.item[i].image+"\" width=\"60\" height=\"60\" style=\"border-radius: 200px;\"></td>\n" +
            "                    <td>" + persons.item[i].name + ' ' + persons.item[i].surname + "</td>\n" +
            "                    <td>" + persons.item[i].department + "</td>\n" +
            "                    <td>" + persons.item[i].room + "</td>\n" +
            "                </tr>\n";
    }

    document.querySelector("#content").append(table);
    document.querySelector(".table").append(tbody)

}