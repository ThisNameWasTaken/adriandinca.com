import React, { memo } from 'react';
import { Slide, Layer } from '../carousel';
import Image from '../image';

const SlideAccessibility = memo(
  () => (
    <Slide className="carousel__slide--accessibility">
      <Layer center>
        <Image
          src="../../images/slide-accessibility.jpg"
          className="homepage-carousel__image"
        />
      </Layer>
      <Layer topLeft>
        <picture>
          <Image
            src="../../images/slide-accessibility-top-left.svg"
            sizes="(max-width: 1330px) 100vw, 1330px"
          />
        </picture>
      </Layer>
      <Layer topRight>
        <picture>
          <Image
            src="../../images/slide-accessibility-top-right.svg"
            sizes="(max-width: 1330px) 100vw, 1330px"
          />
        </picture>
      </Layer>
      <Layer bottomLeft>
        <picture>
          <Image
            src="../../images/slide-accessibility-bottom-left.svg"
            sizes="(max-width: 1330px) 100vw, 1330px"
          />
        </picture>
      </Layer>
      <Layer bottomRight>
        <picture>
          <Image
            src="../../images/slide-accessibility-bottom-right-eye.svg"
            sizes="(max-width: 1330px) 100vw, 1330px"
          />
        </picture>
      </Layer>
      <Layer bottomRight>
        <picture>
          <Image
            src="../../images/slide-accessibility-bottom-right-voice.svg"
            sizes="(max-width: 1330px) 100vw, 1330px"
          />
        </picture>
      </Layer>
    </Slide>
  ),
  () => true
);

export default SlideAccessibility;
