import React from 'react';


function Grid (props){
    return (
        <div className="grid-item" id="id_person" onClick={props.about}>
            <img alt='' src={props.item.image} width="150" height="150" style={{borderRadius: "200px"}}/>
            <h6><b>{props.item.name} {props.item.surname}</b></h6>
            <hr/>
            <div>
                <p><b>Отдел:</b>{props.item.department}</p>
                <p><b>Комната:</b>{props.item.room}</p>
            </div>
        </div>
    )
}

export {Grid}