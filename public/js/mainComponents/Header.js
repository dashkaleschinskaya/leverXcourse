import React from 'react';

 import {Link} from "react-router-dom";




class Header extends React.Component {
    personExit(){
        sessionStorage.clear()
        window.location.reload()
    }

     buttonsForEnter (){
        if(sessionStorage.getItem('role')){
            if(sessionStorage.getItem('role')==="admin"){
                return (<div style={{display:"flex",flexDirection:"row"}}>
                    <Link to={'/views/edit'}>
                    < button style={{width:"150px"}} className="button-for-enter" >Изменение ролей</button>
                </Link>
                    <button className="button-for-enter" onClick={this.personExit} >Выйти</button>
                </div> )
            }
            return(
            <button className="button-for-enter" onClick={this.personExit} >Выйти</button>)
        } else {
            return(<Link to={'/views/enter'}><button className="button-for-enter" >Войти</button></Link>)

        }
    }

    render() {
        return (<header className="header">
                <div className="container" style={{display: "flex"}}>
                    <Link to="/views/index" className="logo" >Course Work</Link>
                    {this.buttonsForEnter()}
                </div>
            </header>
        )
    }
}

export {Header};

