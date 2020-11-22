
import React from "react";

import {fetchClass} from "../fetch";


class Enter extends React.Component {
    constructor(props) {
        super(props);
        this.state={item:[],
            login:'',
            password:'',
            role:''
        }

    }

    handleLoginChange(e) {
        this.setState({login: e.target.value});
    }
    handlePasswordChange(e) {
        this.setState({password: e.target.value});
    }

    handleRoleChange(e){
        this.setState({role: e.target.value});
    }

    personRegistration(e){
        e.preventDefault()
            const body={
                login: this.state.login,
                password: this.state.password,
                role: this.state.role
            }
            const fetchThree = new fetchClass({
                url: "/registration",
                body: body,
                method: 'POST'
            })
            fetchThree.fetchFunc().then(data => {
                    sessionStorage.setItem('login',data[0].login);
                    sessionStorage.setItem('password',data[0].password)
                    sessionStorage.setItem('role',data[0].role)

                    window.location.href = '/views/index';

                })
                .catch(err => console.log(err));


    }

    personEnter(e) {
        e.preventDefault()
            const body={
                login: this.state.login,
                password: this.state.password,
            }
            const fetchFour = new fetchClass({
                url: "/enter",
                body: body,
                method: 'POST'
            })
            fetchFour.fetchFunc().then(data => {
                    sessionStorage.setItem('login',data[0].login);
                    sessionStorage.setItem('password',data[0].password)
                    sessionStorage.setItem('role',data[0].role)

                    window.location.href = '/views/index';

                })
                .catch(err => console.log(err));

    }


    render(){
       return (
           <div className="main">
               <div className="container">
                   <div className="content view" style={{display:"flex",justifyContent: "space-evenly",marginTop: "70px"}}>

                       <form className="line" style={{width:"300px"}}>
                           <h2>Регистрация</h2>
                           <label htmlFor="register-login">Введите логин:</label>
                           <input type="text" id="register-login" name="register-login" placeholder="Введите логин..." value={this.state.login} onChange={this.handleLoginChange.bind(this)}/>
                               <label>Введите пароль:</label>
                               <input type="password" name="register-password" id="register-password" value={this.state.password} onChange={this.handlePasswordChange.bind(this)}
                                      placeholder="Введите пароль..."/>
                                   <label>Выберите роль:</label>
                                   <div className="form_radio_group choice-role choice-enter">
                                       <div className="form_radio_group-item">
                                           <input type="radio" id="user-role" name="role" value="user"  onChange={this.handleRoleChange.bind(this)}/><label
                                               htmlFor="user-role">Пользователь</label>
                                       </div>
                                       <div className="form_radio_group-item">
                                           <input type="radio" id="editor-role" name="role" value="editor" onChange={this.handleRoleChange.bind(this)}/><label
                                               htmlFor="editor-role">Редактор</label>
                                       </div>
                                   </div>
                                   <button onClick={this.personRegistration.bind(this)}>Save</button>
                       </form>

                       <form className="line" style={{width:"300px"}}>
                           <h2>Вход</h2>
                           <label htmlFor="enter-login">Введите логин:</label>
                           <input type="text" id="enter-login" name="enter-login" placeholder="Введите логин..." value={this.state.login} onChange={this.handleLoginChange.bind(this)}/>
                               <label>Введите пароль:</label>
                               <input type="password" name="enter-password" id="enter-password"
                                      placeholder="Введите пароль..." value={this.state.password} onChange={this.handlePasswordChange.bind(this)}/>
                                   <button onClick={this.personEnter.bind(this)}>Enter</button>
                       </form>

                   </div>
               </div>
           </div>
       )
    }

}


export {Enter}