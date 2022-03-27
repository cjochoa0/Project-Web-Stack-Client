import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";


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
    const { dish } = props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg top src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        {RenderComments(dish.comments)}
                    </div>
                </div>
            </div>
        );
}

export default DishDetail;