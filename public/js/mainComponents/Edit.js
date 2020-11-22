import {XMLHttpRequestClass} from "../xmlhttprequest";

import React from "react";

import {fetchClass} from "../fetch";
import { TableTheadForPersons,TableBodyForPersons} from "../components/TableForPersons";



class Edit extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            item:[],
            role:''
        }
    }

    componentDidMount() {
        const requestFive = new XMLHttpRequestClass({
            url: "/edit/editPage",
            body: null,
            method: 'GET'
        })
        requestFive.api().then(items => {
            let item=items.person
            this.setState( {item} )
        })
            .catch(err => console.log(err));
        }

    handleRoleChange(e){
        let id=e.target.id;
        let roleAndLogin=id.split('-');
        const body={
            role:roleAndLogin[0],
            login:roleAndLogin[1]
        }
        const fetchTwo = new fetchClass({
            url: "/editRole",
            body: body,
            method: 'POST'
        })
        fetchTwo.fetchFunc()
            .then(data => {
                window.location.reload()
            })
            .catch(err => console.log(err));
    }

    renderTableForPersons(){
        return this.state.item.map(item=>{
            return <TableBodyForPersons item={item}
                              key={item.login+Math.random()}
                              changeRole={this.handleRoleChange.bind(this)}
            />

        })

    }

viewRegisteredPersons(){
    return (<table className="table register-person">
        <TableTheadForPersons/>
        <tbody>
        {this.renderTableForPersons()}
        </tbody>
    </table>)
}

    render(){
        return (
            <div className="main">
                <div className="container">
                    <div className="content view">
                        <div id="content-edit">
                            {this.viewRegisteredPersons()}
                        </div>
                    </div>
                </div>
            </div>
        )

    }

}


export {Edit}