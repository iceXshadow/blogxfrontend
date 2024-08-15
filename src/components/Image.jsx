import React from 'react';

const Image = ({ src, alt }) => {
    return (
        <div 
            className='rounded-lg overflow-hidden max-h-80 flex items-center justify-center'
        >
            <img src={src} alt={alt} className="w-full object-cover" />
        </div>
    );
};

export default Image;