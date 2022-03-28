import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function RenderDish({dish}){
    if(dish != null){
        return(
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    } else{
        return null;
    }

}

function RenderComments(comments){
    if(comments != null){
        let options = {year: "numeric", month: "short", day: "numeric" }
        return comments.map(comment => (
            <ul key={comment.id} className="list-unstyled">
                <li className="mb-2">{comment.comment}</li>
                <li>
                    -- {comment.author}{" "}
                    {new Date(comment.date).toLocaleTimeString("en-US")}
                </li>
            </ul>
        ));
    } else return <div />
}

const DishDetail = (props) => {
    if(props != null){
        const { dish } = props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {RenderDish({dish})}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        {RenderComments(dish.comments)}
                    </div>
                </div>
            </div>
        );
    } else return <div />

}

export default DishDetail;