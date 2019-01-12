import React, { Component } from 'react';
import './style.css'
import axios from 'axios';

class InputUser extends Component{

    constructor(props){
        super(props);
        this.state = {
            full_name:"",
            nickname:"",
            image_profile:""
        }
    }

    onSubmit = () => {
        axios.post('http://localhost:3001/create/user',this.state)
        .then((result) => {
            window.location.reload(); 
        }).catch((err) => {
            console.log(err)
        });
    }

    onInputChange = (e) => {
        e.preventDefault()
        const {id,value} = e.target
        this.setState({
            [id]:value
        })
    }

    render(){
        return(
            <div>
                <h3>Crear un nuevo usuario</h3>
                <form onSubmit={this.onSubmit}>
                    <div class="form-group">
                        <label>Nombre completo</label>
                        <input onChange={this.onInputChange} value={this.state.full_name} type="text" class="form-control" id="full_name" placeholder="Nombre completo"/>
                    </div>
                    <div class="form-group">
                        <label>Nickname</label>
                        <input onChange={this.onInputChange}  value={this.state.nickname} type="text" class="form-control" id="nickname" placeholder="nickname"/>
                    </div>
                    <div class="form-group">
                        <label>Imagen de perfil</label>
                        <input onChange={this.onInputChange}  value={this.state.image_profile} type="text" class="form-control" id="image_profile" placeholder="url"/>
                    </div>
                    <button className="btn btn-success" type="submit">Crear Usuario</button>
                </form>

            </div>
        )   
    }
}

export default InputUser