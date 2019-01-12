import React, { Component } from 'react';
import axios from 'axios';
import './style.css'

class InputComment extends Component{

    constructor(props){
        super(props)
        this.state = {
            comment:"",
            users:[],
            userSelect:""
        }
    }

    componentDidMount(){
        axios.get('http://localhost:3001/user')
        .then(result => {
            this.setState({
                users:result.data
            })
        }).catch(err => console.log(err))
        
    }

    createComment = () => {
        axios.post(`http://localhost:3001/comment/${this.props.idPost}`,{
            comment:this.state.post,
            user:this.state.userSelect === "" ? this.state.users[0]._id : this.state.userSelect
        })
        .then(result => {
            //Deberiamos conectar con el componente padre.Esta solución en la mas secilla pero puede mejorar
            window.location.reload(); 
        }).catch(err => {
            alert('Error creando el post')
        });
    }

    onClick = (e) => {
        e.preventDefault()
        this.state.post === "" ? alert('Tienes que escribir algo!!') : this.createComment()        
    }

    onChangeText = (e) => {
        const {value} = e.target
        this.setState({
            post:value
        })
    }

    renderSelect = () => {
        return this.state.users.map(user => <option value={user._id}>{user.full_name}</option>)
    }

    onSelect = (e) =>{
        this.setState({
            userSelect:e.target.value
        })
    }
    render(){
        console.log(this.state);
        return(
        <div class="container mt-5">
            <form onSubmit={this.onClick}>
                <div className="input-group">
                    <textarea value={this.state.post} onChange={this.onChangeText} id="text-area" className="form-control" aria-label="With textarea"></textarea>
                    <div className="input-group-append">
                        <button type="submit" className="btn btn-info">Comentar</button>
                    </div>
                </div>

                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputGroupSelect01">Elije el usuario</label>
                    </div>
                    <select class="custom-select" onChange={this.onSelect}>
                        {this.renderSelect()}
                    </select>
                </div>
            </form>
        </div>
        )   
    }
}

export default InputComment