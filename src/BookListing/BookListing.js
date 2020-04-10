import React from 'react';
import './BookListing.css';

export const BookListing = () => {
    return (
        <div className='book-listing'>
            <div className='book-listing__image-section'>
                {/* <img className='book-listing__book-image' /> */}
            </div>
            <section className='book-listing__info'>
                <h2 className='book-listing__title'>
                    Henry I
                </h2>
                <p className='book-listing__author'>
                    Author: C. Warren Hollister
                </p>
                <p className='book-listing__price'>
                    Price: $50
                </p>
                <p className='book-listing__description'>
                    The resulting volume is one that will be welcomed by students and general readers alike.
                </p>
            </section>
        </div>
    )
}