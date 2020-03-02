import React, {Component} from "react";
import "./Books.css";
import { BookDisplay } from "./BookDisplay.js"

export default class Books extends Component {
    constructor(props){
    super(props);
    this.state = {
        books: [
            {
                id:1,
                title:"Domain Driven Design",
                author:"Eric Evans",
                isbn:"978-032112517"
            },
            {
                id:2,
                title:"Accelerate",
                author:"Nicole Forsgren",
                isbn:"978-1942788331"
            },
            {
                id:3,
                title:"Project Pheonix",
                author:"Gene KIm",
                isbn:"978-1234883432"
            },
            {
                id:4,
                title:"Atlas Shrugged",
                author:"Ayn Rand",
                isbn:"978-4340689431"
            },
            {
                id:5,
                title:"Project to Product",
                author:"Mik Kersten",
                isbn:"978-1942788393"
            },
            {
                id:6,
                title:"Grown Ups",
                author:"Adam Sandler",
                isbn:"978-7326069011"
            }
        ]
    }
}
render(){
    return (
        <div className="books">
            <div className="lander">
                <BookDisplay books={this.state.books}  />
            </div>
        </div>
    )
}
}




