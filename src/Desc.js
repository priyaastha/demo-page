import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import ListGroup from 'react-bootstrap/ListGroup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import img1 from './assets/img1.jpg'
import i1 from './assets/1.jpg'
import i2 from './assets/2.jpg'
import i3 from './assets/3.jpg'
import q1 from './assets/q1.svg'
import q2 from './assets/q2.svg'
import q3 from './assets/q3.svg'
import q4 from './assets/q4.svg'
import a1 from './assets/a1.png'
import a2 from './assets/a2.png'
import pri from './assets/pri.png'
import FooterPage from './Footer'
import Faqsec from './Faq'
import Cards from './Cards'
import Review from './Review'
import Stepper from './Stepper'
import "./styles/Desc.css"

function navbar() {
    return (
        <div>
            <br></br><br></br><br></br>
            <Container >
                <Row>
                    <Col>
                        <h1 className="gradtext">Understand your customers like never before with</h1>
                        <h1 className="orangeText">Google Analytics</h1>
                        <br></br><br></br>
                        <strong>We setup Google Analytics for you the right way.</strong><br></br><br></br>
                        <Button variant="primary rounded" size="lg" className='butngrad'>Learn More</Button>{' '}
                        <Button variant="outline-primary rounded" size="lg">Contact Us</Button>{' '}
                    </Col>
                </Row>

                <br></br><br></br><br></br>

                <Row>
                    <Col xs={12} sm={8}><Image fluid src={ img1 } alt="ga" /></Col>
                    <Col xs={12} sm={4}>
                        <h5 style={{fontSize:'1.5em'}}>
                        <strong>Google Analytics 4 helps you to<br></br> 
                            <b className='grow'>Grow Your Business</b> <br></br> 
                            through intelligent Data Collection and Analysis.<br></br><br></br><br></br> 
                            Google analytics puts you a foot<br></br> 
                            <b className='grow'>ahead of your competitors</b>
                        </strong>
                        </h5>
                    </Col>
                </Row>
            </Container>
                <br></br><br></br><br></br>

            <div>
                <center><b>Trusted by:</b></center>
                <Row className="trust">
                    <Col>
                        <Image src={ q1 } alt="ga" className='ic' />
                    </Col>
                    <Col>
                        <Image src={ i3 } alt="ga" className='ic' />
                    </Col>
                    <Col>
                        <Image src={ q2 } alt="ga" className='ic' />
                    </Col>
                    <Col>
                        <Image src={ q3 } alt="ga" className='ic' />
                    </Col>
                    <Col>
                        <Image src={ q4 } alt="ga" className='ic' />
                    </Col>
                    <Col>
                        <Image src={ q2 } alt="ga" className='ic' />
                    </Col>
                    <Col>
                        <Image src={ i3 } alt="ga" className='ic' />
                    </Col>
                </Row>
            </div>
                <br></br><br></br>

            <Container>
                <Row>
                    <center>
                        <h4><strong>What we do</strong></h4>
                        <h2 className="orangeText">Unlock the full potential of<br></br> Google Analytics.</h2>
                        <br></br><br></br>
                    </center>
                    <Row className='do'>
                        <Col xs={12} sm={4}>
                            <Image src={ a2 } alt="ga" className='ic' />
                            <h2><strong>Google Analytics 4 Setup</strong></h2>
                            <h5><b>Universal Analytics is being sunset in 2022. Get the benefits of GA4 now, set up the right way.</b></h5>
                        </Col>
                        <Col xs={12} sm={4}>
                            <Image src={ a1 } alt="ga" className='ic' />
                            <h2><strong>Google Tag Manager Integration</strong></h2>
                            <h5><b>Need enhanced analytics for Shopify, Woocommerece? We'll set up enhanced data layers and GTM integration.</b></h5>
                        </Col>
                        <Col xs={12} sm={4}>
                            <Image src={ a2 } alt="ga" className='ic' />
                            <h2><strong>Google/Facebook Ad Tracking</strong></h2>
                            <h5><b>Accurate conversion tracking & remarketing is vital for ad success. We'll ensure it's done right.</b></h5>
                        </Col>
                    </Row>
                </Row>
                <br></br><br></br><br></br>

                <Row>
                    <Col xs={12} sm={5}>
                        <h4><b>Why work with us?</b></h4>
                        <h1 style={{color:'#F76922', fontWeight: 'bold'}}>Save time, money & hassle</h1>
                        <p><b>One-Time Purchase - No monthly payments.</b></p>
                    </Col>
                    <Col xs={12} sm={1}></Col>
                    <Col xs={12} sm={6}>
                    <ListGroup>
                        <ListGroup.Item className='ticks'style={{border:'none'}}>
                            <FontAwesomeIcon icon={faArrowCircleRight} size="lg" pulse color='orange'/>
                            &nbsp;
                            <b> Seamless Integration.</b></ListGroup.Item>
                        <ListGroup.Item className='ticks'style={{border:'none'}}>
                            <FontAwesomeIcon icon={faArrowCircleRight} size="lg" pulse color='orange'/>
                            &nbsp;
                            <b> Accurate & Enhanced Data.</b></ListGroup.Item>
                        <ListGroup.Item className='ticks'style={{border:'none'}}>
                            <FontAwesomeIcon icon={faArrowCircleRight} size="lg" pulse color='orange'/>
                            &nbsp;
                            <b> Set up by Experts.</b></ListGroup.Item>
                    </ListGroup>
                    </Col>
                </Row>
            </Container>

            <br></br><br></br><br></br>

            <div>
                <Row className='problems'>.
                    <center><h1 style={{color:'white', fontWeight: 'bold', paddingBottom:'40px'}}>Problems We Solve.</h1></center>
                        <Col xs={12} sm={11} className="greydiv">
                        <center>
                            <Row>
                                <Col xs={12} sm={4}>
                                    <Image src={ i1 } alt="ga" className='pro' />
                                    <h4><b>GA4 Migration</b></h4>
                                </Col>
                                <Col xs={12} sm={4}>
                                    <Image src={ i1 } alt="ga" className='pro' />
                                    <h4><b>Missing Reports</b></h4>
                                </Col>
                                <Col xs={12} sm={4}>
                                    <Image src={ i1 } alt="ga" className='pro' />
                                    <h4><b>Inaccurate Data</b></h4>
                                </Col>
                            </Row>
                            </center>
                            <center>
                            <Row>
                                <Col xs={12} sm={4}>
                                    <Image src={ i1 } alt="ga" className='pro' />
                                    <h4><b>GDPR Compliance</b></h4>
                                </Col>
                                <Col xs={12} sm={4}>
                                    <Image src={ i1 } alt="ga" className='pro' />
                                    <h4><b>Conversion Tracking</b></h4>
                                </Col>
                                <Col xs={12} sm={4}>
                                    <Image src={ i1 } alt="ga" className='pro' />
                                    <h4><b>Pixel Issues</b></h4>
                                </Col>
                            </Row>
                            </center>
                        </Col>
                        <Col xs={0} sm={1}>
                        </Col>
                </Row>
            </div>

            <br></br><br></br><br></br>

            <Container>

                <Row>
                    <Col xs={12} sm={6}>
                        <h3 className='gradtext'>Supported Platforms</h3>
                        <h1 style={{color:'black', fontWeight: 'bold', fontSize:'3em'}}>We can integrate<br></br> across most popular<br></br> platforms</h1>
                        <p><b>Unlock the full potential of Google Analytics by passing <br></br>enhanced, accurate & reliable data, using the latest<br></br> version GA4, fixing known problems.</b></p>
                    </Col>
                    <Col xs={12} sm={6}>
                    <ListGroup>
                        <ListGroup.Item className='ticks'style={{border:'none'}}>
                            <FontAwesomeIcon icon={faArrowCircleRight} size="lg" pulse color='orange'/>
                            &nbsp;
                            <b>Wordpress</b>
                            <p className='texts'>Get advanced Google Analytics tracking features for Wordpress with custom event set up.</p>
                        </ListGroup.Item>
                        <ListGroup.Item className='ticks'style={{border:'none'}}>
                            <FontAwesomeIcon icon={faArrowCircleRight} size="lg" pulse color='orange'/>
                            &nbsp;
                            <b>Woocommerece</b>
                            <p className='texts'>Track advanced e-commerce events with Woo-commerce in Google Analytics 4, with accurate conversion tracking & remarketing.</p>
                        </ListGroup.Item>
                        <ListGroup.Item className='ticks'style={{border:'none'}}>
                            <FontAwesomeIcon icon={faArrowCircleRight} size="lg" pulse color='orange'/>
                            &nbsp;
                            <b>Shopify</b>
                            <p className='texts'>Track advanced e-commerce events with Shopify in Google Analytics 4, with accurate conversion tracking & remarketing.</p>
                        </ListGroup.Item>
                        <ListGroup.Item className='ticks'style={{border:'none'}}>
                            <FontAwesomeIcon icon={faArrowCircleRight} size="lg" pulse color='orange'/>
                            &nbsp;
                            <b>Webflow</b>
                            <p className='texts'>Track Webflow events in Google Analytics 4, with accurate form submission events.</p>
                        </ListGroup.Item>
                    </ListGroup>
                    </Col>
                </Row>

                <br></br><br></br><br></br>

                <Row>
                    <Col xs={12} sm={6}><Image fluid src={ pri } alt="ga" /></Col>
                    <Col xs={12} sm={6}>
                        <h1 className='aga'>
                            Accurate Google<br></br> Analytics to drive the<br></br> right decisions<br></br> 
                        </h1>
                        <p className='pric'>Make decisions based on accurate data. Our clients see improved data analytic results, guaranteed.</p>
                        <Button variant="primary rounded" size="lg" className='butngrad' style={{marginLeft:'8%'}}>See Pricing</Button>{' '}
                    </Col>
                </Row>

                <br></br><br></br><br></br>

                <Review />

                <br></br><br></br><br></br>

                <Stepper />

                <br></br><br></br><br></br>

                <Cards />
                <br></br><br></br><br></br>

                <Row className='fsec'>
                    <Col xs={12} sm={3}>
                        <br></br>
                        <h2><strong>Frequently Asked Questions</strong></h2>
                        <h5><b>Question not answered? 
                            Feel free to reach out to us 
                            using our chat option.
                        </b></h5>
                    </Col>
                    <Col xs={12} sm={9}>
                        <Faqsec />
                    </Col>
                </Row>

                <br></br><br></br><br></br>

                <Row>
                    <center>
                    <h2 className='orangeText'>Ready to unlock<br></br>Enhanced Analytics?</h2>
                    <p><strong>One time purchase - No monthly payments</strong></p>
                    <Button variant="primary" size="lg" className='butngrad'>Primary</Button>{' '}
                    <Row>
                        <Col>
                           
                        </Col>
                    </Row>
                    </center>
                </Row>
            
            </Container>
            
            <FooterPage />

        </div>
    );
}

export default navbar;