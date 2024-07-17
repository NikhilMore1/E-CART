
import slide1 from '../assets/img/slide1.webp';
import slide2 from '../assets/img/slide2.webp';
import slide3 from '../assets/img/slide3.webp';
import slide4 from '../assets/img/slide4.webp';
import slide5 from '../assets/img/slide5.webp';
import slide6 from '../assets/img/slide6.webp';

function Carausals() {
    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="1500" data-bs-pause="false">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={slide1} className="d-block w-100" alt="slide1" />
                    </div>
                    <div className="carousel-item">
                        <img src={slide2} className="d-block w-100" alt="slide2" />
                    </div>
                    <div className="carousel-item">
                        <img src={slide3} className="d-block w-100" alt="slide3" />
                    </div>
                    <div className="carousel-item">
                        <img src={slide4} className="d-block w-100" alt="slide4" />
                    </div>
                    <div className="carousel-item">
                        <img src={slide5} className="d-block w-100" alt="slide5" />
                    </div>
                    <div className="carousel-item">
                        <img src={slide6} className="d-block w-100" alt="slide6" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Carausals;