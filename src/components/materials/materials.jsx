import { Col, ListGroup, ListGroupItem, Row } from "reactstrap";


export function Materials() { 

    return (
        <section className='coursematerials'>
            <h2 className='coursematerialsheader'>Course Materials</h2>
            <Row className='coursematerialsbody text-secondary'>
                <Col xl={ { offset: 0, size: 5 } } className='lgdivider'>
                    <ListGroup flush>
                        <ListGroupItem className='coursematerialsitem' tag="div"><span><i className="bi bi-clock"></i> &nbsp; Duration : </span><span>3 weeks</span></ListGroupItem>
                        <ListGroupItem className='coursematerialsitem' tag="div"><span><i className="bi bi-journal-text"></i> &nbsp; Lessons : </span><span>8</span></ListGroupItem>
                        <ListGroupItem className='coursematerialsitem' tag="div"><span><i className="bi bi-person-plus"></i> &nbsp; Enrolled : </span><span>65 students</span></ListGroupItem>
                        <ListGroupItem className='coursematerialsitem' tag="div"><span><i className="bi bi-translate"></i> &nbsp; Language : </span><span>English</span></ListGroupItem>
                    </ListGroup>
                </Col>
                <Col xl={ { offset: 2, size: 5 } }>
                    <ListGroup flush>
                        <ListGroupItem className='coursematerialsitem' tag="div"><span><i className="bi bi-list-ul"></i> &nbsp; Topics : </span><span>36</span></ListGroupItem>
                        <ListGroupItem className='coursematerialsitem' tag="div"><span><i className="bi bi-currency-dollar"></i> &nbsp; Price : </span><span>80$</span></ListGroupItem>
                        <ListGroupItem className='coursematerialsitem' tag="div"><span><i className="bi bi-person"></i> &nbsp; Instructor : </span><span>Alex Snow</span></ListGroupItem>
                        <ListGroupItem className='coursematerialsitem' tag="div"><span><i className="bi bi-card-text"></i> &nbsp; Certificate : </span><span>Included</span></ListGroupItem>
                    </ListGroup>
                </Col>
            </Row>
        </section>
    )
}