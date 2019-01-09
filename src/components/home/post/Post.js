import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './style.css'

class Post extends Component{
    render(){   
        return (
            <div className="card mt-3">
                <div className="card-header">
                    <div className="row d-flex">
                        <h3 className="ml-3"> {this.props.post}</h3>
                        <span className="ml-auto p-2">{this.props.hour}</span>
                    </div>
                </div>
                <div className="card-body row ml-1">
                    <Link to={`/comment/${this.props.id}`}><spam className="btn btn-primary">Ver comentarios</spam></Link>
                    <p className="card-text ml-4">{this.props.comments} comentarios</p>
                </div>
            </div>
        )
    }
}

export default Post