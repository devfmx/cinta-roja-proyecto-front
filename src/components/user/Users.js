import React, { Component } from 'react';
import './style.css'
import User from './User';
import InputUser from './InputUser';
import axios from 'axios';

class Users extends Component{

    constructor(props){
        super(props)
        this.state = {
            listUsers:[]
        }
    }

    componentDidMount(){
        axios.get('http://localhost:3001/user')
        .then((result) => {
            this.setState({
                listUsers:result.data
            })
        }).catch((err) => {
            console.log(err);
        });
    }

    renderUsers = () => {
        return this.state.listUsers.length === 0
        ? <h1>Carando..</h1>
        : this.state.listUsers.map(user => <User image={user.image_profile} nickname={user.nickname} name={user.full_name}/>)
    }

    render(){
        return(
            <div className="row m-5">
                {this.renderUsers()}
                <div>
                    <InputUser/>
                </div>
            </div>
        )   
    }
}

export default Users