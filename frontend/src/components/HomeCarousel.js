import './HomeCarousel.css';
import Carousel from 'react-bootstrap/Carousel';

function HomeCarousel() {
    return (
        <Carousel data-bs-theme="transparent">
            <Carousel.Item interval={1000}>
                <div className='content'>
                    <div className='text'>
                        <h2>NEW ARRIVALS</h2>
                        <h1>NEW COLLECTIONS FOR EVERYONE</h1>
                        <a href="/categories/all-products" className='btn btn-dark'>Latest Collection</a>
                    </div>

                    <div className='image'>
                        <img src="/images/carousel/c1.png"/>
                    </div>

                </div>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <div className='content'>
                    <div className='text'>
                        <h2>NEW ARRIVALS</h2>
                        <h1>NEW COLLECTIONS FOR EVERYONE</h1>
                        {/* <Button variant="link">Latest Collection</Button> */}
                        <a href="/categories/all-products" className='btn btn-dark'>Latest Collection</a>
                    </div>

                    <div className='image'>
                        <img src="/images/carousel/c2.png"/>
                    </div>

                </div>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <div className='content'>
                    <div className='text'>
                        <h2>NEW ARRIVALS</h2>
                        <h1>NEW COLLECTIONS FOR EVERYONE</h1>
                        {/* <Button variant="link">Latest Collection</Button> */}
                        <a href="/categories/all-products" className='btn btn-dark'>Latest Collection</a>
                    </div>

                    <div className='image'>
                        <img src="/images/carousel/c3.png"/>
                    </div>

                </div>
            </Carousel.Item>
        </Carousel>
    );
}

export default HomeCarousel;