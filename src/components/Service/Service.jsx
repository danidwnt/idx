import React from 'react'
import { Card, Row, Col } from "react-bootstrap"
import { FcSearch } from 'react-icons/fc'
import { MdWeb } from "react-icons/md"
import { FcServices} from "react-icons/fc"
import { BsFillChatLeftDotsFill } from "react-icons/bs"

const Service = () => {
    return (
        <div id="service">
            <h1 className='mb-5' style={{ textAlign: "center", fontSize: "40px", fontWeight: "600", fontFamily: "Arial" }}>The Service we offer is specifically <br /> designed to meed your needs</h1>
            <Row>
                <Col className='py-1'>
                    <Card style={{ textAlign: "center", width: '13rem', marginRight: '20px' }}>
                        <div style={{ textAlign: "center", marginTop: "20px" }}>

                            <FcSearch size="80px" />
                        </div>
                        <Card.Body>
                            <Card.Title style={{ textAlign: "center", }}>Service</Card.Title>
                            <Card.Text style={{ textAlign: "center", }}>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='py-1'>
                    <Card style={{ textAlign: "center", width: '13rem', marginRight: '20px' }}>
                        <div style={{ textAlign: "center", marginTop: "20px" }}>

                            <MdWeb size="80px" />
                        </div>
                        <Card.Body>
                            <Card.Title style={{ textAlign: "center", }}>Web Desain</Card.Title>
                            <Card.Text style={{ textAlign: "center", }}>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='py-1'>
                    <Card style={{ textAlign: "center", width: '13rem', marginRight: '20px' }}>
                        <div style={{ textAlign: "center", marginTop: "20px" }}>

                            <FcServices size="80px" />
                        </div>
                        <Card.Body>
                            <Card.Title style={{ textAlign: "center", }}>Social</Card.Title>
                            <Card.Text style={{ textAlign: "center", }}>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='py-1'>
                    <Card style={{ textAlign: "center", width: '13rem'}}>
                        <div style={{ textAlign: "center", marginTop: "20px" }}>

                            <BsFillChatLeftDotsFill size="80px" />
                        </div>
                        <Card.Body>
                            <Card.Title style={{ textAlign: "center", }}>Contact Marketing</Card.Title>
                            <Card.Text style={{ textAlign: "center", }}>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>


        </div>
    )
}

export default Service
