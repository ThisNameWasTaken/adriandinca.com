import React, { memo } from 'react';
import { Slide, Layer } from '../carousel';
import Image from '../image';

const SlideReliability = memo(
  () => (
    <Slide className="carousel__slide--reliability">
      <Layer center className="carousel__slide__layer--image">
        <Image
          src="../../images/slide-reliability.jpg"
          className="homepage-carousel__image"
        />
      </Layer>
      <Layer topLeft className="carousel__slide__layer--cloud">
        <Image
          src="../../images/slide-reliability-top-left-cloud.svg"
          sizes="(max-width: 1330px) 100vw, 1330px"
        />
      </Layer>
      <Layer topLeft className="carousel__slide__layer--no-wi-fi">
        <Image
          src="../../images/slide-reliability-top-left-no-wi-fi.svg"
          sizes="(max-width: 1330px) 100vw, 1330px"
        />
      </Layer>
      <Layer topLeft className="carousel__slide__layer--pwa-p">
        <Image
          src="../../images/slide-reliability-top-left-pwa-p.svg"
          sizes="(max-width: 1330px) 100vw, 1330px"
        />
      </Layer>
      <Layer topLeft className="carousel__slide__layer--pwa-w">
        <Image
          src="../../images/slide-reliability-top-left-pwa-w.svg"
          sizes="(max-width: 1330px) 100vw, 1330px"
        />
      </Layer>
      <Layer topLeft className="carousel__slide__layer--pwa-a">
        <Image
          src="../../images/slide-reliability-top-left-pwa-a.svg"
          sizes="(max-width: 1330px) 100vw, 1330px"
        />
      </Layer>
      <Layer topRight className="carousel__slide__layer--lock">
        <Image
          src="../../images/slide-reliability-top-right-lock.svg"
          sizes="(max-width: 1330px) 100vw, 1330px"
        />
      </Layer>
      <Layer topRight className="carousel__slide__layer--server">
        <Image
          src="../../images/slide-reliability-top-right-server.svg"
          sizes="(max-width: 1330px) 100vw, 1330px"
        />
      </Layer>
      <Layer topRight className="carousel__slide__layer--like">
        <Image
          src="../../images/slide-reliability-top-right-like.svg"
          sizes="(max-width: 1330px) 100vw, 1330px"
        />
      </Layer>
      <Layer bottomLeft className="carousel__slide__layer--dinosaur">
        <Image
          src="../../images/slide-reliability-bottom-left-dinosaur.svg"
          sizes="(max-width: 1330px) 100vw, 1330px"
        />
      </Layer>
      <Layer bottomLeft className="carousel__slide__layer--sw">
        <Image
          src="../../images/slide-reliability-bottom-left-sw.svg"
          sizes="(max-width: 1330px) 100vw, 1330px"
        />
      </Layer>
      <Layer bottomLeft className="carousel__slide__layer--cogs">
        <Image
          src="../../images/slide-reliability-bottom-left-cogs.svg"
          sizes="(max-width: 1330px) 100vw, 1330px"
        />
      </Layer>
      <Layer bottomRight className="carousel__slide__layer--bottom-right">
        <Image
          src="../../images/slide-reliability-bottom-right.svg"
          sizes="(max-width: 1330px) 100vw, 1330px"
        />
      </Layer>
    </Slide>
  ),
  () => true
);

export default SlideReliability;
