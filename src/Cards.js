import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import './styles/Cards.css'

function Cards() {
    return (
        <div>
            <center>
                <h1 className='gradtext'>Analytics for<br></br> every business.</h1>
                <h5><strong>Choose form our essential or advanced packages</strong></h5>
            </center>
            
            <br></br><br></br>

            <CardGroup>
                <Card className='cardy'>
                    <Card.Body>
                    <Card.Title>
                        <h1>Essential Analytics</h1>
                    </Card.Title>
                    <p style={{fontSize:'1em'}}>
                        Google Analytics 4 implementation.
                        <br></br>
                        Everything you need to get started with GA4.
                    </p>
                    
                    <Card.Text>
                        <FontAwesomeIcon icon={faCircleCheck} size="lg" color='cornflowerblue'/>&nbsp;&nbsp;&nbsp;
                        <span style={{fontSize:'1.2em'}}><strong>GA4 Implementation</strong></span>
                        <br></br>
                        <FontAwesomeIcon icon={faCircleCheck} size="lg" color='cornflowerblue'/>&nbsp;&nbsp;&nbsp;
                        <span style={{fontSize:'1.2em'}}><strong>Setup takes 1-2 days.</strong></span>
                        <br></br>
                        <FontAwesomeIcon icon={faCircleCheck} size="lg" color='lightgrey'/>&nbsp;&nbsp;&nbsp;
                        <span style={{fontSize:'1.2em'}}>Setup takes 1-2 days.</span>
                        <br></br>
                        <FontAwesomeIcon icon={faCircleCheck} size="lg" color='lightgrey'/>&nbsp;&nbsp;&nbsp;
                        <span style={{fontSize:'1.2em'}}>Setup takes 1-2 days.</span>
                        <br></br>
                        <FontAwesomeIcon icon={faCircleCheck} size="lg" color='lightgrey'/>&nbsp;&nbsp;&nbsp;
                        <span style={{fontSize:'1.2em'}}>GA4 Implementation</span>
                        <br></br>
                        <FontAwesomeIcon icon={faCircleCheck} size="lg" color='lightgrey'/>&nbsp;&nbsp;&nbsp;
                        <span style={{fontSize:'1.2em'}}>Conversion Tracking for Google/Facebook Ads</span>
                        <br></br><br></br><br></br>
                        <center>
                            <h3>$197</h3>
                            <p>(USD)</p>
                            <p>One time payment</p>
                            <Button variant="dark">Get Started</Button>{' '}
                        </center>
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card  className='cardy cy'>
                <Card.Body>
                    <Card.Title>
                        <h1>Essential Analytics</h1>
                    </Card.Title>
                    <p style={{fontSize:'1em'}}>
                        Google Analytics 4 implementation.
                        <br></br>
                        Everything you need to get started with GA4.
                    </p>
                    
                    <Card.Text>
                        <FontAwesomeIcon icon={faCircleCheck} size="lg" color='cornflowerblue'/>&nbsp;&nbsp;&nbsp;
                        <span style={{fontSize:'1.2em'}}><strong>GA4 Implementation</strong></span>
                        <br></br>
                        <FontAwesomeIcon icon={faCircleCheck} size="lg" color='cornflowerblue'/>&nbsp;&nbsp;&nbsp;
                        <span style={{fontSize:'1.2em'}}><strong>Setup takes 1-2 days.</strong></span>
                        <br></br>
                        <FontAwesomeIcon icon={faCircleCheck} size="lg" color='cornflowerblue'/>&nbsp;&nbsp;&nbsp;
                        <span style={{fontSize:'1.2em'}}>Setup takes 1-2 days.</span>
                        <br></br>
                        <FontAwesomeIcon icon={faCircleCheck} size="lg" color='cornflowerblue'/>&nbsp;&nbsp;&nbsp;
                        <span style={{fontSize:'1.2em'}}>Setup takes 1-2 days.</span>
                        <br></br>
                        <FontAwesomeIcon icon={faCircleCheck} size="lg" color='cornflowerblue'/>&nbsp;&nbsp;&nbsp;
                        <span style={{fontSize:'1.2em'}}>GA4 Implementation</span>
                        <br></br>
                        <FontAwesomeIcon icon={faCircleCheck} size="lg" color='cornflowerblue'/>&nbsp;&nbsp;&nbsp;
                        <span style={{fontSize:'1.2em'}}>Conversion Tracking for Google/Facebook Ads</span>
                        <br></br><br></br><br></br>
                        <center>
                            <h3>$397</h3>
                            <p>(USD)</p>
                            <p>One time payment</p>
                            <Button variant="primary rounded" className='butngrad'>Get Started</Button>{' '}
                        </center>
                    </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    );
}

export default Cards;