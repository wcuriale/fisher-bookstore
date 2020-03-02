import React from "react";
import { AuthorCard } from "./AuthorCard.js";
import { CardColumns } from "react-bootstrap";

export function AuthorDisplay(props){
    return (
        <div classname="display">
            <h3>Authors</h3>
            <CardColumns>
                {props.authors.map(a => (
                    <AuthorCard author={a} key ={a.author} />
                ))}
            </CardColumns>
        </div>
    );
}