import React, { Component } from "react";
import {Card, CardImg, CardText, CardBody, Button, Modal, CardTitle, Breadcrumb, BreadcrumbItem, ModalHeader, ModalBody,
    Row, FormGroup, Col, FormText, Input} from 'reactstrap';
import { Link } from 'react-router-dom';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';
import { Loading } from './LoadingComponent';
import CommentForm from './CommentForm'

function RenderDish({dish}){
    if(dish != null){
        return(
            <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </FadeTransform>
        );
    } else{
        return null;
    }

}

function RenderComments({comments,  dishId}) {
    if(comments != null){
        let commentList =
            <Stagger in>
                {comments.map((comment) => {
                    return (
                        <Fade in>
                            <li key={comment.id}>
                                <p>{comment.comment}</p>
                                <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                            </li>
                        </Fade>
                    );
                })}
            </Stagger>
        return (
            <React.Fragment>
                <h3>Comments</h3>
                <ul className="list-unstyled">
                    {commentList}
                </ul>
                <CommentForm dishId={dishId} />
            </React.Fragment>
            );

    } else return <div />
}

const DishDetail = (props) => {
    if (props.isLoading) {
        return(
            <div className="container">
        <div className="row">
            <Loading />
        </div>
    </div>
    );
    }
    else if (props.errMess) {
        return(
            <div className="container">
                <div className="row">
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    else if (props.dish != null){
        const { dish } = props;
            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link
                                to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem
                                active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish={props.dish} />
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <RenderComments comments={props.comments} dishId={props.dish.id} />
                        </div>
                    </div>
                </div>
            );
    } else return <div />
}

export default DishDetail;