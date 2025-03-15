import React, { useState } from 'react'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, ListGroup, ListGroupItem, Progress } from 'reactstrap';

export function Topic() {

    const [open, settopicsOpen] = useState(["1","2","3"]);
    const toggle = (id) => {
        if (open === id) {
            settopicsOpen();
        } else {
            settopicsOpen(id);
        }
    };

    return (
      <section>
            <Accordion open={ open } toggle={ toggle }>
                <AccordionItem className='mb-5'>
                    <AccordionHeader targetId="1" tag={ 'div' } className='topicheaderbtn'>
                        <div>
                            <h5 className='text-dark'>Week 1-4</h5>
                            <p className='mb-0 text-secondary'>
                                Advanced story telling techniques for writers: Personas, Characters & Plots
                            </p>
                        </div>
                    </AccordionHeader>
                    <AccordionBody accordionId="1" className='topicbody'>
                        <ListGroup flush>
                            <ListGroupItem className='topicitem text-secondary' tag="div"><span><i className="bi bi-file-earmark-text"></i>&nbsp; Introduction </span><span><i className="bi bi-lock ms-3"></i>&nbsp;</span></ListGroupItem>
                            <ListGroupItem className='topicitem text-secondary' tag="div"><span><i className="bi bi-file-earmark-text"></i>&nbsp; Course Overview </span><span><i className="bi bi-lock ms-3"></i>&nbsp;</span></ListGroupItem>
                            <ListGroupItem className='topicitem text-secondary' tag="div"><span><i className="bi bi-file-earmark-text"></i>&nbsp; Course Overview </span><div className='topiciteminfo'><div className='topicitemque mb-1 mb-xxl-0'>0 QUESTION</div><div className='topicitemmin mb-1 mb-xxl-0'>10 MINUTES</div></div></ListGroupItem>
                            <ListGroupItem className='topicitem text-secondary' tag="div"><span><i className="bi bi-file-earmark-text"></i>&nbsp; Course Exercise / Reference Files </span><span><i className="bi bi-lock ms-3"></i>&nbsp;</span></ListGroupItem>
                            <ListGroupItem className='topicitem text-secondary' tag="div"><span><i className="bi bi-file-earmark-text"></i>&nbsp; Code Editor Installation (Optional if you have one) </span><span><i className="bi bi-lock ms-3"></i>&nbsp;</span></ListGroupItem>
                            <ListGroupItem className='topicitem text-secondary' tag="div"><span><i className="bi bi-file-earmark-text"></i>&nbsp; Embedding PHP in HTML</span><span><i className="bi bi-lock ms-3"></i></span></ListGroupItem>
                        </ListGroup>
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem className='mb-5 border'>
                    <AccordionHeader targetId="2" tag={ 'div' } className='topicheaderbtn'>
                        <div>
                            <h5 className='text-dark'>Week 5-8</h5>
                            <p className='mb-0 text-secondary'>
                                Advanced story telling techniques for writers: Personas, Characters & Plots
                            </p>
                        </div>
                    </AccordionHeader>
                    <AccordionBody accordionId="2" className='topicbody'>
                        <ListGroup flush>
                            <ListGroupItem className='topicitem text-secondary' tag="div"><span><i className="bi bi-file-earmark-text"></i>&nbsp; Defining Functions </span><span><i className="bi bi-lock ms-3"></i>&nbsp;</span></ListGroupItem>
                            <ListGroupItem className='topicitem text-secondary' tag="div"><span><i className="bi bi-file-earmark-text"></i>&nbsp; Function Parameters </span><span><i className="bi bi-lock ms-3"></i>&nbsp;</span></ListGroupItem>
                            <ListGroupItem className='topicitem text-secondary' tag="div"><span><i className="bi bi-file-earmark-text"></i>&nbsp; Return Values From Functions </span><div className='topiciteminfo'><div className='topicitemque mb-1 mb-xxl-0'>0 QUESTION</div><div className='topicitemmin mb-1 mb-xxl-0'>10 MINUTES</div></div></ListGroupItem>
                            <ListGroupItem className='topicitem text-secondary' tag="div"><span><i className="bi bi-file-earmark-text"></i>&nbsp; Global Variable and Scope </span><span><i className="bi bi-lock ms-3"></i>&nbsp;</span></ListGroupItem>
                            <ListGroupItem className='topicitem text-secondary' tag="div"><span><i className="bi bi-file-earmark-text"></i>&nbsp; Newer Way of creating a Constant (Optional if you have one) </span><span><i className="bi bi-lock ms-3"></i>&nbsp;</span></ListGroupItem>
                            <ListGroupItem className='topicitem text-secondary' tag="div"><span><i className="bi bi-file-earmark-text"></i>&nbsp; Constants</span><span><i className="bi bi-lock ms-3"></i></span></ListGroupItem>
                        </ListGroup>
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem className='mb-5 border'>
                    <AccordionHeader targetId="3" tag={ 'div' } className='topicheaderbtn'>
                        <div>
                            <h5 className='text-dark'>Week 5-8</h5>
                            <p className='mb-0 text-secondary'>
                                Advanced story telling techniques for writers: Personas, Characters & Plots
                            </p>
                        </div>
                    </AccordionHeader>
                    <AccordionBody accordionId="3" className='topicbody'>
                        <ListGroup flush>
                            <ListGroupItem className='topicitem text-secondary' tag="div"><span><i className="bi bi-file-earmark-text"></i>&nbsp; Defining Functions </span><span><i className="bi bi-lock ms-3"></i>&nbsp;</span></ListGroupItem>
                            <ListGroupItem className='topicitem text-secondary' tag="div"><span><i className="bi bi-file-earmark-text"></i>&nbsp; Function Parameters </span><span><i className="bi bi-lock ms-3"></i>&nbsp;</span></ListGroupItem>
                            <ListGroupItem className='topicitem text-secondary' tag="div"><span><i className="bi bi-file-earmark-text"></i>&nbsp; Return Values From Functions </span><div className='topiciteminfo'><div className='topicitemque mb-1 mb-xxl-0'>0 QUESTION</div><div className='topicitemmin mb-1 mb-xxl-0'>10 MINUTES</div></div></ListGroupItem>
                            <ListGroupItem className='topicitem text-secondary' tag="div"><span><i className="bi bi-file-earmark-text"></i>&nbsp; Global Variable and Scope </span><span><i className="bi bi-lock ms-3"></i>&nbsp;</span></ListGroupItem>
                            <ListGroupItem className='topicitem text-secondary' tag="div"><span><i className="bi bi-file-earmark-text"></i>&nbsp; Newer Way of creating a Constant (Optional if you have one) </span><span><i className="bi bi-lock ms-3"></i>&nbsp;</span></ListGroupItem>
                            <ListGroupItem className='topicitem text-secondary' tag="div"><span><i className="bi bi-file-earmark-text"></i>&nbsp; Constants</span><span><i className="bi bi-lock ms-3"></i></span></ListGroupItem>
                        </ListGroup>
                    </AccordionBody>
                </AccordionItem>
            </Accordion>
        </section>
  )
}


export function Topicheader() { 

    return (
        <header className='topicsheader'>
            <h2 className='topicsheadertitle'>Topics for This Course</h2>
            <div className='topicsheaderprogress'>
                <div className='topicsheaderprogresslocsignbar'><div className='topicsheaderprogresslocsign bi'>You</div></div>
                <Progress color="success" value={ 63 } className='topicsheaderprogressbar' cssModule={ { ["bg-success"]: "successbgprogress" } } />
                <div className='topicsheaderprogressvaluebar'><div className='topicsheaderprogressvalue' >63%</div></div>
            </div>
        </header>
    )
}