import React, { useEffect } from 'react'
import './Hero.css';
import Hero1 from '../../../assets/img/Hero-1.jpg'
import Hero2 from '../../../assets/img/Hero-2.jpg'
import Hero3 from '../../../assets/img/Hero-3.jpg'
import Hero4 from '../../../assets/img/Hero-4.jpg'
// import {LeftOutlined,RightOutlined} from 'ant-design/icons'


const Hero = () => {
    useEffect(() => {
        const nextDom = document.getElementById('next');
        const prevDom = document.getElementById('prev');
        const carouselDom = document.querySelector('.carousel');
        const SliderDom = carouselDom.querySelector('.list');
        const thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
        const thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
        const timeDom = document.querySelector('.carousel .time');

        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        const timeRunning = 2000;
        const timeAutoNext = 7000;

        let runTimeOut;
        let runNextAuto = setTimeout(() => {
            nextDom.click();
        }, timeAutoNext);

        nextDom.onclick = function () {
            showSlider('next');
        };

        prevDom.onclick = function () {
            showSlider('prev');
        };

        function showSlider(type) {
            const SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
            const thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');

            if (type === 'next') {
                SliderDom.appendChild(SliderItemsDom[0]);
                thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
                carouselDom.classList.add('next');
            } else {
                SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
                thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
                carouselDom.classList.add('prev');
            }
            clearTimeout(runTimeOut);
            runTimeOut = setTimeout(() => {
                carouselDom.classList.remove('next');
                carouselDom.classList.remove('prev');
            }, timeRunning);

            clearTimeout(runNextAuto);
            runNextAuto = setTimeout(() => {
                nextDom.click();
            }, timeAutoNext);
        }

        return () => {
            clearTimeout(runTimeOut);
            clearTimeout(runNextAuto);
        };
    }, []);


    return (
        <div>
            <header>
            </header>
            {/* <!-- carousel --> */}
            <div className="carousel mt-4">
                {/* <!-- list item --> */}
                <div className="list">
                    <div className="item">
                        <img src={Hero1} alt='' />
                        <div className="content">
                            <div className="title">INDIA</div>
                            <div className="topic">Holi</div>
                            <div className="des">
                                {/* <!-- lorem 50 --> */}
                                Holi has been celebrated in the Indian subcontinent for centuries, with poems documenting celebrations dating back to the 4th century CE. It marks the beginning of spring after a long winter, symbolic of the triumph of good over evil. It is celebrated in March, corresponding to the Hindu calendar month of Phalguna. In 2023, Holi begins March 8.
                            </div>
                            <div className="buttons">
                                <button>SEE MORE</button>
                                <button>SUBSCRIBE</button>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <img src={Hero2} alt='' />
                        <div className="content">
                            <div className="title">Songkran</div>
                            <div className="topic">Thailand</div>
                            <div className="des">
                                Songkran, also known as the Thai New Year, is one of Thailand's most celebrated and iconic festivals. It typically takes place from April 13 to 15 each year, marking the beginning of the traditional Thai calendar. Songkran is known for its joyful water fights, temple visits, and a strong sense of community.
                            </div>
                            <div className="buttons">
                                <button>SEE MORE</button>
                                <button>SUBSCRIBE</button>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <img src={Hero3} alt='' />
                        <div className="content">
                            <div className="title">New Orleans</div>
                            <div className="topic">Mardi Gras</div>
                            <div className="des">
                                Mardi Gras is a Christian holiday and popular cultural phenomenon that dates back thousands of years to pagan spring and fertility rites. Also known as Carnival or Carnaval, it’s celebrated in many countries around the world—mainly those with large Roman Catholic populations—on the day before the religious season of Lent begins.
                            </div>
                            <div className="buttons">
                                <button>SEE MORE</button>
                                <button>SUBSCRIBE</button>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <img src={Hero4} alt='' />
                        <div className="content">
                            <div className="title">Rio de Janeiro</div>
                            <div className="topic">Rio de Janeiro's Carnival</div>
                            <div className="des">
                                Just before starting a diet, you give the last binge. You permit yourself to commit the excesses because, very soon, you will begin the diet. Has it happened to you? Did you know that celebrating carnival is precisely that? Since its beginning, the carnival is the time to allow yourself extravagances and lack of control before Easter. Well, let’s see the Carnival in Rio de Janeiro.
                            </div>
                            <div className="buttons">
                                <button>SEE MORE</button>
                                <button>SUBSCRIBE</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- list thumnail --> */}
                <div className="thumbnail">
                    <div className="item">
                        <img src={Hero1} alt='' />
                        <div className="content">
                            <div className="title">
                                Holi
                            </div>
                            <div className="description">
                                India
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <img src={Hero2} alt='' />
                        <div className="content">
                            <div className="title">
                                Songkran
                            </div>
                            <div className="description">
                                Thailand
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <img src={Hero3} alt='' />
                        <div className="content">
                            <div className="title">
                                Mardi Gras
                            </div>
                            <div className="description">
                                New Orleans
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <img src={Hero4} alt='' />
                        <div className="content">
                            <div className="title">
                                Rio de Janeiro Carnival
                            </div>
                            <div className="description">
                                Rio de Janeiro
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- next prev --> */}

                <div className="arrows">
                    <button id="prev"><i className="fa-solid fa-arrow-left"></i></button>
                    <button id="next"><i className="fa-solid fa-arrow-right"></i></button>
                </div>
                <div className="time"></div>
            </div>
        </div>
    )
}

export default Hero