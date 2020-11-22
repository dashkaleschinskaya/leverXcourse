
import {XMLHttpRequestClass} from "../xmlhttprequest";
import {Grid} from "../components/Grid";
import {TableBody, TableThead} from "../components/Table";
import React from "react";
import {Switch} from "../components/Switch";

import {About} from "../components/About";


class View extends React.Component {
    constructor(props) {
        super(props);
        this.state={item:[],
            isGrid:true,
            aboutPerson:false
        }
        this.input=null
    }

    aboutPerson (id){
        const idURL=(id)=>("/:"+id+"");
        const requestTwo = new XMLHttpRequestClass({
            url: idURL(id),
            body: null,
            method: 'GET'
        })
        requestTwo.api().then(data => {
            // console.log(data)
            let item=data
            this.setState( {item,aboutPerson:true} )

            console.log(this.state)
        })
            .catch(err => console.log(err));
    }

    componentDidMount() {
        const requestOne = new XMLHttpRequestClass({
            url: "/",
            body: null,
            method: 'GET'
        })
        requestOne.api().then(items => {
            let item=items.items
            this.setState( {item,aboutPerson:false} )
        })
            .catch(err => console.log(err));
    }

    renderGrid(){
        return this.state.item.map(item=>{
            return <Grid item={item}
                         key={item.id}
                         about={this.aboutPerson.bind(this,item.id)}
            />
        })
    }

    renderTable(){
        return this.state.item.map(item=>{
            return <TableBody item={item}
                              key={item.id}
                              about={this.aboutPerson.bind(this,item.id)}
            />
        })
    }

    handleGridTemplate(){
        this.setState({isGrid:true})
    }

    handleTableTemplate(){
        this.setState({isGrid:false})
    }

    changeTemplate(){
        if(!sessionStorage.length){
            return(
                    <h4>Пожалуйста,зарегистрируйтесь или войдите для просмотра информации сотрудников</h4>
                )
        } else {
            if (this.state.isGrid) {
                return (<div className="grid-container">
                    {this.renderGrid()}
                </div>)
            } else {
                return (<table className="table">
                    <TableThead/>
                    <tbody>
                    {this.renderTable()}
                    </tbody>
                </table>)
            }
        }
    }

    searchPerson = () => {
        let params = 'name=' + encodeURIComponent(this.input.value);
        const requestThree = new XMLHttpRequestClass({
            url: '/search',
            body: params,
            method: "POST"
        })
        requestThree.api().then(data => {
            let item=data
            this.setState( {item} )

        })
            .catch(err => console.log(err));
    }

    render(){
            if (this.state.aboutPerson) {
                return (
                    <div className="main">
                        <div className="container">
                            <About item={this.state.item}
                                   key={this.state.item.id}/>
                        </div>
                    </div>
                )
            } else {
                return (
                    <div className="main">
                        <Switch
                            switchGrid={this.handleGridTemplate.bind(this)}
                            switchTable={this.handleTableTemplate.bind(this)}
                        />
                        <div className="container">
                            <div className="sidebar">
                                <div className="box">
                                    <div style={{width: "250px"}}>
                                        <div className="form-group">
                                            <label htmlFor="search">Строка поиска:</label>
                                            <input type="text" id="search" name="search" ref={ref => this.input = ref}
                                                   placeholder="Введите имя и фамилию..."/>
                                        </div>
                                        <div className="button" style={{alignItems: "center", marginBottom: "16px"}}>
                                            <button className="search-button" onClick={this.searchPerson}
                                                    style={{justifyContent: "center"}}>Поиск
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="content view">
                                {this.changeTemplate()}
                            </div>
                        </div>
                    </div>
                )
            }
        }
    }




export {View}