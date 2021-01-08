import React from 'react'
import { Carousel } from "react-bootstrap";
import web from "../../images/web3.jpg"
import web1 from "../../images/web.jpg"
import web2 from "../../images/web8.jpg"
import "./carouselStyle.css";
function Carosuel() {
    return (
       <>       
            <Carousel className="Custom_carousel">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={web}
                        alt="First slide"
                    />
                    <Carousel.Caption className="custom_caption">
                        <h3 >  Enjoy the game & Chase your dreams </h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={web1}
                        alt="Third slide"
                    />

                    <Carousel.Caption className="custom_caption">
                        <h3>Cricket is in our blood!</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={web2}
                        alt="Third slide"
                    />

                    <Carousel.Caption className="custom_caption">
                        <h3> “The Bat is not a toy Its a weapon" </h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
       </>
    )
}

export default Carosuel
