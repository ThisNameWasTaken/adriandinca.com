import React, { memo } from 'react';
import { Slide, Layer } from '../carousel';
import Image from '../image';

const SlideAccessibility = memo(
  () => (
    <Slide className="carousel__slide--accessibility">
      <Layer center className="carousel__slide__layer--image">
        <Image
          src="../../images/slide-accessibility.jpg"
          className="homepage-carousel__image"
        />
      </Layer>
      <Layer topLeft className="carousel__slide__layer--top-left">
        <Image
          src="../../images/slide-accessibility-top-left.svg"
          sizes="(max-width: 1330px) 100vw, 1330px"
        />
      </Layer>
      <Layer topRight className="carousel__slide__layer--top-right">
        <Image
          src="../../images/slide-accessibility-top-right.svg"
          sizes="(max-width: 1330px) 100vw, 1330px"
        />
      </Layer>
      <Layer bottomLeft className="carousel__slide__layer--bottom-left">
        <Image
          src="../../images/slide-accessibility-bottom-left.svg"
          sizes="(max-width: 1330px) 100vw, 1330px"
        />
      </Layer>
      <Layer bottomRight className="carousel__slide__layer--eye">
        <Image
          src="../../images/slide-accessibility-bottom-right-eye.svg"
          sizes="(max-width: 1330px) 100vw, 1330px"
        />
      </Layer>
      <Layer bottomRight className="carousel__slide__layer--voice">
        <Image
          src="../../images/slide-accessibility-bottom-right-voice.svg"
          sizes="(max-width: 1330px) 100vw, 1330px"
        />
      </Layer>
    </Slide>
  ),
  () => true
);

export default SlideAccessibility;
