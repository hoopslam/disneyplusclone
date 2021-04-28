import styled from "styled-components";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImageSlider = () => {
	let settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
	};

	return (
		<div>
			<Carousel {...settings}>
                <Wrap>
                    <div>
                        <img src='/assets/images/slider-1.jpg' alt='slider1'/>
                    </div>
                </Wrap>
                <Wrap>
                    <div>
                        <img src='/assets/images/slider-2.jpg' alt='slider2'/>
                    </div>
                </Wrap>
                <Wrap>
                    <div>
                        <img src='/assets/images/slider-3.jpg' alt='slider3'/>
                    </div>
                </Wrap>
                <Wrap>
                    <div>
                        <img src='/assets/images/slider-4.jpg' alt='slider4'/>
                    </div>
                </Wrap>
            </Carousel>
		</div>
	);
};

const Carousel = styled(Slider)`
    margin-top: 20px;

    & > button {
        opacity: 0;
        height: 100%;
        width: 50%;
        z-index: 1;

        &:hover {
            opacity: 1;
            transition: opacity 0.2s ease 0s;
        }
    }

    ul li button {
        &::before {
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }

    li.slick-active button::before {
        color: white;
    }

    .slick-list {
        overflow: initial;
    }

    .slick-prev {
        left: -20%;
    }

    .slick-next {
        right: -20%;
    }

`

const Wrap = styled.div`
    border-radius: 4px;
    cursor: pointer;
    position: relative;

    div{
        border-radius: 4px;
        box-shadow: rgb( 0 0 0 / 69%) 0px 26px 30px --10px, rgb(0 0 0 / 73%) 0px 16px 19px --10px;
        cursor: pointer;
        display: block;
        position: relative;
        padding: 4px;

        img {
            width: 100%;
            height: 100%;
            min-height: 300px;
            object-fit: cover;
        }

        &:hover {
            padding: 0;
            border: 4px solid rgba(249, 249, 249, 0.8);
        }
    }
`

export default ImageSlider;
