import React, { Component } from 'react';
import axios from 'axios';

class InputPost extends Component{

    constructor(props){
        super(props)
        this.state = {
            post:""
        }
    }

    createPost = () => {
        axios.post('http://localhost:3001/create/post',this.state)
        .then(result => {
            //Deberiamos conectar con el componente padre.Esta solución en la mas secilla pero puede mejorar
            window.location.reload(); 
        }).catch(err => {
            alert('Error creando el post')
        });
    }

    onClick = (e) => {
        e.preventDefault()
        this.state.post === "" ? alert('Tienes que escribir algo!!') : this.createPost()        
    }

    onChangeText = (e) => {
        const {value} = e.target
        this.setState({
            post:value
        })
    }

    render(){   
        return (
            <div className="InputPost">
            <form onSubmit={this.onClick}>
                <div className="input-group">
                    <textarea value={this.state.post} onChange={this.onChangeText} id="text-area" className="form-control" aria-label="With textarea"></textarea>
                    <div className="input-group-append">
                        <button type="submit" className="btn btn-success">Publicar</button>
                    </div>
                </div>
            </form>
            </div>
        )
    }
}

export default InputPost