import React from "react";
import bg1 from '../../images/home/carousel/bg1.jpg'
import bg2 from '../../images/home/carousel/bg2.jpg'
import bg3 from '../../images/home/carousel/bg3.jpg'
import bg4 from '../../images/home/carousel/bg4.jpg'

export default function Carousel() {
    return (
        <div style={{ width: '100%' }}>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active w-100">
                        <img src={bg1} className="carouselImg  w-100" alt="..." />
                        <div className="carouselText" >
                            <h1>Медицина поистине <br /> самое благородное из всех искусств</h1>
                        </div>
                    </div>
                    <div className="carousel-item w-100">
                        <img src={bg2} className="carouselImg  w-100" alt="..." />
                        <div className="carouselText" >
                            <h1>Из всех лекарств лучшее <br /> отдых и воздержание</h1>
                        </div>
                    </div>
                    <div className="carousel-item w-100">
                        <img src={bg3} className="carouselImg  w-100" alt="..." />
                        <div className="carouselText" >
                            <h1>Девять десятых нашего счастья <br /> зависит от здоровья</h1>
                        </div>
                    </div>
                    <div className="carousel-item w-100">
                        <img src={bg4} className="carouselImg  w-100" alt="..." />
                        <div className="carouselText" >
                            <h1>В здоровом теле <br /> здоровый дух</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}