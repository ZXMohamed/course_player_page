import { Fragment } from "react";
import { Button, Col, Form, Input, ListGroup, ListGroupItem, Row } from "reactstrap";

import user1 from "../../photo/commentsender/user1-image.webp"
import user2 from "../../photo/commentsender/user2-image.webp"
import user3 from "../../photo/commentsender/user3-image.webp"

function Comments() { 

    return (
        <Fragment>
            <h2 className='commentsheader'>Comments</h2>
            <ListGroup flush>
            <ListGroupItem className='commentitem' tag="div">
                <Row>
                <Col sm="1" className='p-0'>
                    <div className="commentsenderphoto mb-2 mb-sm-0" style={ { backgroundImage:`url(${user1})`}}></div>
                </Col>
                <Col sm="11" className='text-secondary ps-sm-5'>
                    <h5>Student Name Gose Here</h5>
                    <h6 className='mt-3'>Oct 10,2021</h6>
                    <p className='mt-4'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem facilis tempore reiciendis laboriosam voluptatum dicta expedita aliquam nesciunt vitae eius!
                    </p>
                </Col>
                </Row>
            </ListGroupItem>
            <ListGroupItem className='commentitem' tag="div">
                <Row>
                <Col sm="1" className='p-0'>
                    <div className="commentsenderphoto mb-2 mb-sm-0" style={ { backgroundImage:`url(${user2})`}}></div>
                </Col>
                <Col sm="11" className='text-secondary  ps-sm-5'>
                    <h5>Student Name Gose Here</h5>
                    <h6 className='mt-3'>Oct 15,2021</h6>
                    <p className='mt-4'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem facilis tempore reiciendis laboriosam voluptatum dicta expedita aliquam nesciunt vitae eius!
                    </p>
                </Col>
                </Row>
            </ListGroupItem>
            <ListGroupItem className='commentitem' tag="div">
                <Row>
                <Col sm="1" className='p-0'>
                    <div className="commentsenderphoto mb-2 mb-sm-0" style={ { backgroundImage:`url(${user3})`}}></div>
                </Col>
                <Col sm="11" className='text-secondary ps-sm-5'>
                    <h5>Student Name Gose Here</h5>
                    <h6 className='mt-3'>Oct 19,2021</h6>
                    <p className='mt-4'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem facilis tempore reiciendis laboriosam voluptatum dicta expedita aliquam nesciunt vitae eius!
                    </p>
                </Col>
                </Row>
            </ListGroupItem>
            </ListGroup>
            <Form className='commentsform'>
                <Input type="textarea" className='commentsforminput mb-4' placeholder='Write a comment'/>
                <Button className='commentsformsubmit bg-success' cssModule={ { ["bg-success"]:"successbgbtn"} } >Submit Review <i className="bi bi-arrow-right"></i></Button>
            </Form>
        </Fragment>
    )
}

export default Comments