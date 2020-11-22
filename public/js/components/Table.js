import React from 'react';

function TableBody (props){
    return (
        <tr id="id_of_person">
            <td><img alt='' src={props.item.image} width="60" height="60" style={{borderRadius: "200px"}}/></td>
            <td>{props.item.name} {props.item.surname}</td>
            <td>{props.item.department}</td>
            <td>{props.item.room}</td>
        </tr>
    )
}

function TableThead (){
    return (
        <thead>
        <tr>
            <th scope="col">Фото</th>
            <th scope="col" id='NS' >Инициалы</th>
            <th scope="col" id='department' >Отдел</th>
            <th scope="col" id='room' >Комната</th>
        </tr>
        </thead>
    )
}

export {TableBody,TableThead}