import React, { memo } from 'react';
import { Slide, Layer } from '../carousel';
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
      <Layer center>
        <Image
          src="../../images/slide-performance.jpg"
          className="homepage-carousel__image"
        />
      </Layer>
      <Layer topLeft>
        <picture>
          <SlideTopLeftLightning />
        </picture>
      </Layer>
      <Layer topLeft>
        <picture>
          <SlideTopLeftShapes />
        </picture>
      </Layer>
      <Layer topRight>
        <picture>
          <SlideTopRight />
        </picture>
      </Layer>
      <Layer bottomLeft>
        <picture>
          <SlideBottomLeft />
        </picture>
      </Layer>
      <Layer bottomRight>
        <picture>
          <SlideBottomRightRaf />
        </picture>
      </Layer>
      <Layer bottomRight>
        <picture>
          <SlideBottomRight60Fps />
        </picture>
      </Layer>
      <Layer bottomRight>
        <picture>
          <SlideBottomRightShapes />
        </picture>
      </Layer>
    </Slide>
  ),
  () => true
);

export default SlidePerformance;
