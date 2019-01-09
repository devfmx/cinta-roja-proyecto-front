import React, { Component } from 'react';
import Comment from './Comment'
import axios from 'axios';
import InputComment from './InputComment';


class Comments extends Component{

    constructor(props){
        super(props)
        this.state = {
            listComments:[]
        }
    }

    componentDidMount = () => {
        axios.get(`http://localhost:3001/post/${this.props.match.params.idPost}`)
        .then(result => {
            this.setState({
                listComments:result.data.comments
            })
        }).catch(err => {
            console.log('Error');
        });
    }

    renderComments = () =>{
        return this.state.listComments.length === 0 
        ? <h1>Cargando...</h1> 
        : this.state.listComments.map(comment => <Comment image={comment.user.image_profile} name={comment.user.full_name} comment={comment.comment}/>)
    }

    render(){
        return(
            <div className="Coments">
                {this.renderComments()}
                <InputComment idPost={this.props.match.params.idPost}/>
            </div>
        )   
    }
}

export default Comments