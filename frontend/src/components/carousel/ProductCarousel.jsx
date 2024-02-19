import React, { useEffect } from 'react'
import "react-multi-carousel/lib/styles.css";
import './Carousel.css';
import "slick-carousel/slick/slick.css";
import 'slick-carousel/slick/slick-theme.css';
import { Button } from 'antd';
import 'slick-carousel';
import { Link } from 'react-router-dom';
const ProductCarousel = ({ products }) => {
    useEffect(() => {
        const bankAccounts = document.getElementById('bank-accounts');
        let isDown = false;
        let startX;
        let startY;
        let scrollLeft;
        let scrollTop;
        bankAccounts.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - bankAccounts.offsetLeft;
            startY = e.pageY - bankAccounts.offsetTop;
            scrollLeft = bankAccounts.scrollLeft;
            scrollTop = bankAccounts.scrollTop;
            bankAccounts.style.cursor = 'grabbing';
        });
        bankAccounts.addEventListener('mouseleave', () => {
            isDown = false;
            bankAccounts.style.cursor = 'grab';
        });
        bankAccounts.addEventListener('mouseup', () => {
            isDown = false;
            bankAccounts.style.cursor = 'grab';
        });
        document.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - bankAccounts.offsetLeft;
            const y = e.pageY - bankAccounts.offsetTop;
            const walkX = (x - startX) * 1;
            const walkY = (y - startY) * 1;
            bankAccounts.scrollLeft = scrollLeft - walkX;
            bankAccounts.scrollTop = scrollTop - walkY;
        });
        const scrollLeftButton = document.getElementById(
            'action-button--previous');
        const scrollRightButton = document.getElementById(
            'action-button--next');
        scrollLeftButton.addEventListener('click', () => {
            bankAccounts.scrollBy({
                top: 0,
                left: -200,
                behavior: 'smooth'
            });
        });
        scrollRightButton.addEventListener('click', () => {
            bankAccounts.scrollBy({
                top: 0,
                left: 200,
                behavior: 'smooth'
            });
        });
        bankAccounts.addEventListener('scroll', (e) => {
            const position = bankAccounts.scrollLeft;
            if (position === 0) {
                scrollLeftButton.disabled = true;
            } else {
                scrollLeftButton.disabled = false;
            }
            if (
                Math.round(position) === bankAccounts.scrollWidth - bankAccounts.clientWidth
            ) {
                scrollRightButton.disabled = true;
            } else {
                scrollRightButton.disabled = false;
            }
        });
    }, [])
    return (
        <div className="image-slider">
            <div className="action-buttons">
                <h2 className="HomeProductSlide-head">Latest Products</h2>
                <Link to="/shop"><Button className="HomeProductSlide-btn">Show More<svg width="16" height="16" fill="currentColor" focusable="false" viewBox="0 0 24 24"><path d="M21.343 10.543 12.77 1.972a.829.829 0 0 0-1.2 0L3 10.543l1.2 1.2 7.114-7.114v17.657h1.715V4.63l7.114 7.114 1.2-1.2Z"></path></svg></Button></Link>
                <button type="button" disabled id="action-button--previous" className="action-button--horizontal-scroll">
                    <svg width="16" height="16" fill="currentColor" focusable="false" viewBox="0 0 24 24"><path d="M12.771 7.115a.829.829 0 0 0-1.2 0L3 15.686l1.2 1.2 7.971-7.971 7.972 7.971 1.2-1.2-8.572-8.571Z"></path></svg>
                </button>
                <button type="button" id="action-button--next" className="action-button--horizontal-scroll">
                    <svg width="16" height="16" fill="currentColor" focusable="false" viewBox="0 0 24 24"><path d="M12.771 7.115a.829.829 0 0 0-1.2 0L3 15.686l1.2 1.2 7.971-7.971 7.972 7.971 1.2-1.2-8.572-8.571Z"></path></svg>
                </button>
            </div>
            <div id="bank-accounts">
                {products}
            </div>
        </div>
    )
}
export default ProductCarousel