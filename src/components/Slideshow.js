import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { makeStyles } from '@material-ui/core/styles';
import Img from '../components/Img';
import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.jpg';
import slide3 from '../assets/slide3.jpg';

const slideHeight = 400;

const useStyles = makeStyles((theme) => ({
    img: {
        maxHeight: slideHeight - 42,
        maxWidth: '100%',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    wrapper: {
        height: 'fit-content'
    }
  }));

const Slideshow = () => {
    const images = [
        {
            src: slide1,
            alt: 'Bilde fra promenadekonserten fra UKA 2019 med sangsolist',
            credit: 'Foto: foto.samfundet.no'
        },
        {
            src: slide2,
            alt: 'Bilde fra promenadekonserten fra UKA 2019 med dirigent Gavin David Lee i fokus',
            credit: 'Foto: foto.samfundet.no'
        },
        {
            src: slide3,
            alt: 'Bilde fra konserten "borte bra, storsalen best" februar 2020',
            credit: 'Foto: foto.samfundet.no'
        }
    ];

    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <Carousel
                animation={'slide'}
                autoPlay={false}
            >
                {
                    images.map((image, i) => <Img source={image.src} alt={image.alt} credit={image.credit} className={classes.img} totalheight={slideHeight}/>)
                }
            </Carousel>
        </div>
    );
};

export default Slideshow;