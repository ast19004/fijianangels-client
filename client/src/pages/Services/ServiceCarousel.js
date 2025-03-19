import Carousel from "react-bootstrap/Carousel";

import styles from "./Services.module.css";

const ServiceCarousel = (props) => { 
    return (
        <Carousel
            id="services"
            className={`${styles["carousel_services"]} ${props.className}`}
            activeIndex={props.index}
            onSelect={props.onSelect}
            interval={props.interval || 3000}
            fade={true}
        >
           {props.children}
        </Carousel>
)};

export default ServiceCarousel;