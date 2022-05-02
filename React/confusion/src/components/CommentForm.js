import React, {Component} from "react";
import {Button, Col, FormGroup, Modal, ModalBody, ModalHeader} from "reactstrap";
import {Control, Errors, Form, LocalForm} from "react-redux-form";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component{
    constructor(props) {
        super(props);
        this.toggleModal = this.toggleModal.bind(this);
        this.state = {
            isModalOpen: false
        };
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values){
        console.log(values)
        this.toggleModal();
        this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);
    }

    render(){
        return(
            <React.Fragment>
                <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-pencil fa-lg"></span>
                    Submit Comment
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <FormGroup>
                                <label htmlFor="rating" md={2}>Rating</label>
                                <Col md={10}>
                                    <Control.select model=".rating" name="Rating" className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="author" md={2}>Your Name</label>
                                <Col md={10}>
                                    <Control.text model=".author" id="author" name="author"
                                                  placeholder="Your Name"
                                                  className="form-control"
                                                  validators={{
                                                      required, minLength: minLength(3), maxLength: maxLength(15)
                                                  }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="Comment" md={2}>Comment</label>
                                <Col md={10}>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                                      rows="6"
                                                      className="form-control" />
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col md={10}>
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                                </Col>
                            </FormGroup>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        )
    }
}
export default CommentForm;