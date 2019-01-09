import React, { Component } from 'react';
import './style.css'

class Comment extends Component{

    render(){
        return(
        <div class="container mt-5">
            <div class="row">
                <div class="col-sm-8">
                    <div class="panel panel-white post panel-shadow">
                        <div class="post-heading">
                            <div class="pull-left image mb-2">
                                <img src={this.props.image} class="img-circle avatar" alt="user profile image"/>
                            </div>
                            <div class="pull-left meta">
                                <div class="title h5">
                                    <b>{this.props.name}</b>
                                </div>
                            </div>
                        </div> 
                        <div class="post-description"> 
                            <p>{this.props.comment}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )   
    }
}

export default Comment