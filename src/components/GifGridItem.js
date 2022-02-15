import React from 'react';

export const GifGridItem = ({id,title,url}) => {
    console.log();
  return <div className="card animate__animated animate__bounce animate__delay-2s">
          <img src={url} alt={title} title={title}/>
          <p>{title}</p>

  </div>;
};
