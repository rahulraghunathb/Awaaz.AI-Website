

// CardSlider.js

import React from 'react';
import Slider from 'react-slick';
import './Slider.css'; // Import the CSS file for styling the slider


const CardSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
  
  };

  return (
    <div className="card-list">
    <Slider {...settings}>
      <div>
        {data.map((d) => (
          <div className="card">
            <p className="heading">{d.name}</p>
            <p>{d.item}</p>
            <p>{d.place}</p>
          </div>
        ))}
      </div>
    </Slider>
    </div>
  );
};


 const data=[
{
  name:`john`,
  item:`fyv ferf ufyw f6rw tvhjav yycv aycuy`,
  place:`bean`
},
{
  name:`john`,
  item:`fyv ferf ufyw f6rw tvhjav yycv aycuy`,
  place:`bean`
},
{
  name:`john`,
  item:`fyv ferf ufyw f6rw tvhjav yycv aycuy`,
  place:`bean`
},
{
  name:`john`,
  item:`fyv ferf ufyw f6rw tvhjav yycv aycuy`,
  place:`bean`
},
{
  name:`john`,
  item:`fyv ferf ufyw f6rw tvhjav yycv aycuy`,
  place:`bean`
},
{
  name:`john`,
  item:`fyv ferf ufyw f6rw tvhjav yycv aycuy`,
  place:`bean`
}
 ]


export default CardSlider;
