import React, { Component } from 'react';
import './style.css'

class User extends Component{
    render(){
        return(
            <div>
                <div className="card m-2 user-card">
                    <img className="image-user" src={this.props.image}/>
                    <h1>{this.props.name}</h1>
                    <p className="title">{this.props.nickname}</p>
                </div>
            </div>
        )   
    }
}

export default User