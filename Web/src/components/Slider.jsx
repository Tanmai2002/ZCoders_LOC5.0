import React from 'react'
import SimpleImageSlider from 'react-simple-image-slider'

export const Slider = () => {

    const images = [
        { url: "img/r1.png" },
        { url: "img/r2.png" },
        { url: "img/r3.png" },
        { url: "img/r4.png" },
      ];

  return (
    <div>
        <SimpleImageSlider
            width={600}
            height={500}
            images={images}
            autoPlay={true}
            slideDuration={1}
            showNavs={true}
            navStyle={2}
            bgColor={"#fff"}
        ></SimpleImageSlider>
    </div>
  )
}
