import React, { Component } from "react";
import "./Authors.css";
import { AuthorDisplay } from "./AuthorDisplay.js";

export default class Authors extends Component {
    constructor(props){
    super(props);
    this.state = {
        authors: [
            {author: "Mik Kersten"},
            {author: "Ayn Rand"},
            {author: "Adam Sandler"},
            {author: "J.K. Rowlings"}      
        ]
    }
}
render(){
    return (
        <div className="authors">
            <div className="lander">
                <AuthorDisplay authors={this.state.authors}  />
            </div>
        </div>
    )
}
}