import React from 'react';

function ButtonsEdit() {
    if (sessionStorage.getItem('role')) {
        if (sessionStorage.getItem('role') === "admin" || sessionStorage.getItem('role') === "editor") {

            return (<button style={{width:"130px"}} className="button-for-enter" >Редактировать</button>)
        }
    }
}

function About(props) {

    return (<div className="content view">
        <div className="about_main">
            <img alt='' src={props.item.image} width="200" height="200"/>

                <h6><b>{props.item.name} {props.item.surname}</b></h6>
                <input value={props.item.id} disabled />
        </div>
        <div className="about-info">
            <table>
                <tbody>
                <tr>
                    <td colSpan="2"><h4>GENERAL INFO</h4></td>
                </tr>
                <tr>
                    <td colSpan="2">
                        <hr/>
                    </td>
                </tr>
                <tr>
                    <td style={{color: "gray"}}>Department:</td>
                    <td>{props.item.department}</td>
                </tr>
                <tr>
                    <td style={{color: "gray"}}>Room:</td>
                    <td>{props.item.room}</td>
                </tr>

                <tr>
                    <td colSpan="2"><h4>CONTACTS</h4></td>
                </tr>
                <tr>
                    <td colSpan="2">
                        <hr/>
                    </td>
                </tr>
                <tr>
                    <td style={{color: "gray"}}>Internal Phone:</td>
                    <td>{props.item.internal_phone}</td>
                </tr>
                <tr>
                    <td style={{color: "gray"}}>Mobile Phone:</td>
                    <td>{props.item.mobile_phone}</td>
                </tr>
                <tr>
                    <td style={{color: "gray"}}>E-mail:</td>
                    <td>{props.item.email}</td>
                </tr>
                <tr>
                    <td style={{color: "gray"}}>Skype:</td>
                    <td>{props.item.skype}</td>
                </tr>

                <tr>
                    <td colSpan="2"><h4>PROFILE INFO</h4></td>
                </tr>
                <tr>
                    <td colSpan="2">
                        <hr/>
                    </td>
                </tr>
                <tr>
                    <td style={{color: "gray"}}>Hire date:</td>
                    <td>{props.item.hire_date}</td>
                </tr>
                <tr>
                    <td style={{color: "gray"}}>Status:</td>
                    <td>{props.item.status}</td>
                </tr>

                <tr>
                    <td colSpan="2"><h4>EMPLOYMENT INFO</h4></td>
                </tr>
                <tr>
                    <td colSpan="2">
                        <hr/>
                    </td>
                </tr>
                <tr>
                    <td style={{color: "gray"}}>Start of employment period:</td>
                    <td>{props.item.start_empl}</td>
                </tr>
                <tr>
                    <td style={{color: "gray"}}>Working day duration:</td>
                    <td>{props.item.work_day}</td>
                </tr>

                <tr>
                    <td colSpan="2"><h4>ADDITIONAL MODULES</h4></td>
                </tr>
                <tr>
                    <td colSpan="2">
                        <hr/>
                    </td>
                </tr>
                <tr>
                    <td style={{color: "gray"}}>Vacation:</td>
                    <td>{props.item.vacation}</td>
                </tr>
                {ButtonsEdit()}
                </tbody>
            </table>
        </div>
    </div>
    )
}

export {About};

