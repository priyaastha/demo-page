import React from 'react'
import Carousel from 'react-grid-carousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons'
import a3 from './assets/3.jpg'
 
const Review = () => {
  return (
    <div className="review">
        <center>
        <div className="review-header">
            <FontAwesomeIcon icon={faStarEmpty} size="lg" color='orange'/>
            <FontAwesomeIcon icon={faStarEmpty} size="lg" color='orange'/>
            <FontAwesomeIcon icon={faStarEmpty} size="lg" color='orange'/>
            <FontAwesomeIcon icon={faStarEmpty} size="lg" color='orange'/>
            <FontAwesomeIcon icon={faStarEmpty} size="lg" color='orange'/>
            <h1 className="orangeText">Our Clients Love Us</h1>
        </div>
        </center>

    <Carousel cols={2} rows={1} gap={10} loop>
      <Carousel.Item>
        <div className='cat' style={{border:'orange 2px solid', borderRadius:'20px', padding:'20px 20px'}}>
            <FontAwesomeIcon icon={faStar} size="lg" color='orange'/>
            <FontAwesomeIcon icon={faStar} size="lg" color='orange'/>
            <FontAwesomeIcon icon={faStar} size="lg" color='orange'/>
            <FontAwesomeIcon icon={faStar} size="lg" color='orange'/>
            <FontAwesomeIcon icon={faStar} size="lg" color='orange'/>
            <h2>"Recommended! Fast & knowledgeable."</h2>
            <p>Ace Analytics set up our enhanced tracking super quick! We're now able to make better decisions, with our ad conversion tracking accuracy improving a lot!</p>
            <br></br>
            <p>These guys are the real deal to sort out your Analytics.</p>
            <img src={a3} alt="logo" className="logo" height={30} />
        </div>
      </Carousel.Item>
      <Carousel.Item >
        <div className='cat' style={{border:'orange 2px solid', borderRadius:'20px', padding:'20px 20px'}}>
            <FontAwesomeIcon icon={faStar} size="lg" color='orange'/>
            <FontAwesomeIcon icon={faStar} size="lg" color='orange'/>
            <FontAwesomeIcon icon={faStar} size="lg" color='orange'/>
            <FontAwesomeIcon icon={faStar} size="lg" color='orange'/>
            <FontAwesomeIcon icon={faStar} size="lg" color='orange'/>
            <h2>"Recommended! Fast & knowledgeable."</h2>
            <p>Ace Analytics set up our enhanced tracking super quick! We're now able to make better decisions, with our ad conversion tracking accuracy improving a lot!</p>
            <br></br>
            <p>These guys are the real deal to sort out your Analytics.</p>
            <img src={a3} alt="logo" className="logo" height={30} />
        </div>
      </Carousel.Item>
      <Carousel.Item >
        <div className='cat' style={{border:'orange 2px solid', borderRadius:'20px', padding:'20px 20px'}}>
            <FontAwesomeIcon icon={faStar} size="lg" color='orange'/>
            <FontAwesomeIcon icon={faStar} size="lg" color='orange'/>
            <FontAwesomeIcon icon={faStar} size="lg" color='orange'/>
            <FontAwesomeIcon icon={faStar} size="lg" color='orange'/>
            <FontAwesomeIcon icon={faStar} size="lg" color='orange'/>
            <h2>"Recommended! Fast & knowledgeable."</h2>
            <p>Ace Analytics set up our enhanced tracking super quick! We're now able to make better decisions, with our ad conversion tracking accuracy improving a lot!</p>
            <br></br>
            <p>These guys are the real deal to sort out your Analytics.</p>
            <img src={a3} alt="logo" className="logo" height={30} />
        </div>
      </Carousel.Item>
      <Carousel.Item >
        <div className='cat' style={{border:'orange 2px solid', borderRadius:'20px', padding:'20px 20px'}}>
            <FontAwesomeIcon icon={faStar} size="lg" color='orange'/>
            <FontAwesomeIcon icon={faStar} size="lg" color='orange'/>
            <FontAwesomeIcon icon={faStar} size="lg" color='orange'/>
            <FontAwesomeIcon icon={faStar} size="lg" color='orange'/>
            <FontAwesomeIcon icon={faStar} size="lg" color='orange'/>
            <h2>"Recommended! Fast & knowledgeable."</h2>
            <p>Ace Analytics set up our enhanced tracking super quick! We're now able to make better decisions, with our ad conversion tracking accuracy improving a lot!</p>
            <br></br>
            <p>These guys are the real deal to sort out your Analytics.</p>
            <img src={a3} alt="logo" className="logo" height={30} />
        </div>
      </Carousel.Item>
      <Carousel.Item >
        <div className='cat' style={{border:'orange 2px solid', borderRadius:'20px', padding:'20px 20px'}}>
            <FontAwesomeIcon icon={faStar} size="lg" color='orange'/>
            <FontAwesomeIcon icon={faStar} size="lg" color='orange'/>
            <FontAwesomeIcon icon={faStar} size="lg" color='orange'/>
            <FontAwesomeIcon icon={faStar} size="lg" color='orange'/>
            <FontAwesomeIcon icon={faStar} size="lg" color='orange'/>
            <h2>"Recommended! Fast & knowledgeable."</h2>
            <p>Ace Analytics set up our enhanced tracking super quick! We're now able to make better decisions, with our ad conversion tracking accuracy improving a lot!</p>
            <br></br>
            <p>These guys are the real deal to sort out your Analytics.</p>
            <img src={a3} alt="logo" className="logo" height={30} />
        </div>
      </Carousel.Item>
      <Carousel.Item >
        <div className='cat' style={{border:'orange 2px solid', borderRadius:'20px', padding:'20px 20px'}}>
            <FontAwesomeIcon icon={faStar} size="lg" color='orange'/>
            <FontAwesomeIcon icon={faStar} size="lg" color='orange'/>
            <FontAwesomeIcon icon={faStar} size="lg" color='orange'/>
            <FontAwesomeIcon icon={faStar} size="lg" color='orange'/>
            <FontAwesomeIcon icon={faStar} size="lg" color='orange'/>
            <h2>"Recommended! Fast & knowledgeable."</h2>
            <p>Ace Analytics set up our enhanced tracking super quick! We're now able to make better decisions, with our ad conversion tracking accuracy improving a lot!</p>
            <br></br>
            <p>These guys are the real deal to sort out your Analytics.</p>
            <img src={a3} alt="logo" className="logo" height={30} />
        </div>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Review;