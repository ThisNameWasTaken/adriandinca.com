import React, { memo } from 'react';
import { Slide, Layer } from '../carousel';
import { Headline2 } from '../material/Typography';
import Image from '../image';


// @ts-ignore
import SlideTopLeftLightning from '../../images/inline/slide-performance-top-left-lightning.svg';
// @ts-ignore
import SlideTopLeftShapes from '../../images/inline/slide-performance-top-left-shapes.svg';
// @ts-ignore
import SlideTopRight from '../../images/inline/slide-performance-top-right.svg';
// @ts-ignore
import SlideBottomLeft from '../../images/inline/slide-performance-bottom-left.svg';
// @ts-ignore
import SlideBottomRightRaf from '../../images/inline/slide-performance-bottom-right-raf.svg';
// @ts-ignore
import SlideBottomRight60Fps from '../../images/inline/slide-performance-bottom-right-60fps.svg';
// @ts-ignore
import SlideBottomRightShapes from '../../images/inline/slide-performance-bottom-right-shapes.svg';

const SlidePerformance = memo(
  () => (
    <Slide className="carousel__slide--performance">
      <Layer center className="carousel__slide__layer--image">
        <Image
          src="../../images/slide-performance.jpg"
          className="homepage-carousel__image"
        />
      </Layer>
      <Layer topLeft className="carousel__slide__layer--lightning">
        <SlideTopLeftLightning />
      </Layer>
      <Layer topLeft className="carousel__slide__layer--top-left-shapes">
        <SlideTopLeftShapes />
      </Layer>
      <Layer topRight>
        <SlideTopRight />
      </Layer>
      <Layer bottomLeft>
        <SlideBottomLeft />
      </Layer>
      <Layer bottomRight className="carousel__slide__layer--raf">
        <SlideBottomRightRaf />
      </Layer>
      <Layer bottomRight className="carousel__slide__layer--60fps">
        <SlideBottomRight60Fps />
      </Layer>
      <Layer
        bottomRight
        className="carousel__slide__layer--bottom-right-shapes"
      >
        <SlideBottomRightShapes />
      </Layer>
      <Layer center className="carousel__slide__layer--headline">
        <Headline2>Blazing Fast</Headline2>
      </Layer>
    </Slide>
  ),
  () => true
);

export default SlidePerformance;
