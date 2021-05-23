import React,{Component} from 'react';
import Slide1 from '../../assets/img/Slide 1.jpg';
import Slide2 from '../../assets/img/Slide 2.jpg';
import Slide3 from '../../assets/img/Slide 3.jpg';


class Slider extends Component{

    render(){
        return(
            <div id="carouselExampleControls" class="carousel slide mt-4" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block slide w-100" src={Slide1} alt="First slide"/>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block slide w-100" src={Slide2} alt="Second slide"/>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block slide w-100" src={Slide3} alt="Third slide"/>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        )
    }
}

export default Slider;