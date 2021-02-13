import React, { Component } from 'react'
import './Slideshow.css';
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';

var slideIndex = 1;

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    }

function plusSlides(n) {
    showSlides(slideIndex += n);
}
    
function currentSlide(n) {
    showSlides(slideIndex = n);
}


class SlideShow extends Component {

    componentDidMount() {
        showSlides(slideIndex); 
        console.log('nimmi');
    }

    

    // plusSlides(n) {
    //     // this.showSlides(slideIndex += n);
    //     }

    // currentSlide(n) {
    //     // this.showSlides(slideIndex = n);
    //     }

    render() {

        console.log('ishan');
        return (
            <div>
                <div className="slideshow-container">
                    <div className="mySlides fade">
                        <div className="numbertext">1 / 3</div>
                    <img src={img1} alt="img1" style={{width:"100%"}} />
                        <div className="text">Caption Text</div>
                    </div>
                    <div className="mySlides fade">
                        <div className="numbertext">2 / 3</div>
                        <img src={img2} alt="img1" style={{width:"100%"}} />
                        <div className="text">Caption Two</div>
                    </div>
                    <div className="mySlides fade">
                        <div className="numbertext">3 / 3</div>
                        <img src={img3} alt="img1" style={{width:"100%"}} />
                        <div className="text">Caption Three</div>
                    </div>
                    {/* <a className="prev" onClick={plusSlides(-1)}>&#10094;</a>
                    <a className="next" onClick={plusSlides(1)}>&#10095;</a> */}
                </div>
                <br />
                <div style={{textAlign:"center"}}>
                    <span className="dot" onClick="currentSlide(1)"></span> 
                    <span className="dot" onClick="currentSlide(2)"></span> 
                    <span className="dot" onClick="currentSlide(3)"></span> 
                </div>
            </div>
        );
    }
}

export default SlideShow;