import React, { Component } from 'react';
import InputPost from './input-post/InputPost';
import Post from './post/Post';
import axios from 'axios';

class Home extends Component{

    constructor(props){
        super(props);
        this.state = {
            listPost: []
        }
    }

    componentDidMount(){
        axios.get('http://localhost:3001/post')
        .then(posts => {
            this.setState({
                listPost:posts.data
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

    renderPosts = () => {
        return this.state.listPost.length === 0 
        ? <h1>Cargando...</h1> 
        : this.state.listPost.map(post => <Post id={post._id} post={post.post} hour={post.updatedAt} comments={post.comments.length}/>)
    }

    render(){   
        return (
            <div className="Home">
                
                <div className="container mt-5">
                    <InputPost/>
                    <hr className="mt-4"></hr>
                    {this.renderPosts()}
                </div>
            </div>
        )
    }
}

export default Home