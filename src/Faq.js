import Accordion from 'react-bootstrap/Accordion'

function Faqsec() {
    return (
        <Accordion className='wrapper'>
            <Accordion.Item className='single-accordion' eventKey="0" style={{color:'grey',borderRadius:'50px'}}>
                <Accordion.Header>Do I need the Enhanced Analytics option?</Accordion.Header>
                <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. 
                </Accordion.Body>
            </Accordion.Item>
            <br></br>
            <Accordion.Item className='single-accordion' eventKey="1" style={{color:'grey',borderRadius:'50px'}}>
                <Accordion.Header>What is Data Layer Events with Google Tag Manager?</Accordion.Header>
                <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
                </Accordion.Body>
            </Accordion.Item>
            <br></br>
            <Accordion.Item className='single-accordion' eventKey="2" style={{color:'grey',borderRadius:'50px'}}>
                <Accordion.Header>How long does the set up take?</Accordion.Header>
                <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. 
                </Accordion.Body>
            </Accordion.Item>
            <br></br>
            <Accordion.Item className='single-accordion' eventKey="3" style={{color:'grey',borderRadius:'50px'}}>
                <Accordion.Header>Do you support any different platforms?</Accordion.Header>
                <Accordion.Body>
                Lorem ipsum dolor sit amet
                </Accordion.Body>
            </Accordion.Item>
            <br></br>
            <Accordion.Item className='single-accordion' eventKey="4" style={{color:'grey',borderRadius:'50px'}}>
                <Accordion.Header>Do you support any different platforms?</Accordion.Header>
                <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor 
                </Accordion.Body>
            </Accordion.Item>
            <br></br>
            <Accordion.Item className='single-accordion' eventKey="5" style={{color:'grey',borderRadius:'50px'}}>
                <Accordion.Header>Whats the difference between Analytics 4 & Universal Analytics?</Accordion.Header>
                <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default Faqsec;