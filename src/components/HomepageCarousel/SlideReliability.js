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
        <picture>
          <Image
            src="../../images/slide-reliability-top-left-cloud.svg"
            sizes="(max-width: 1330px) 100vw, 1330px"
          />
        </picture>
      </Layer>
      <Layer topLeft className="carousel__slide__layer--no-wi-fi">
        <picture>
          <Image
            src="../../images/slide-reliability-top-left-no-wi-fi.svg"
            sizes="(max-width: 1330px) 100vw, 1330px"
          />
        </picture>
      </Layer>
      <Layer topLeft className="carousel__slide__layer--pwa-p">
        <picture>
          <Image
            src="../../images/slide-reliability-top-left-pwa-p.svg"
            sizes="(max-width: 1330px) 100vw, 1330px"
          />
        </picture>
      </Layer>
      <Layer topLeft className="carousel__slide__layer--pwa-w">
        <picture>
          <Image
            src="../../images/slide-reliability-top-left-pwa-w.svg"
            sizes="(max-width: 1330px) 100vw, 1330px"
          />
        </picture>
      </Layer>
      <Layer topLeft className="carousel__slide__layer--pwa-a">
        <picture>
          <Image
            src="../../images/slide-reliability-top-left-pwa-a.svg"
            sizes="(max-width: 1330px) 100vw, 1330px"
          />
        </picture>
      </Layer>
      <Layer topRight className="carousel__slide__layer--lock">
        <picture>
          <Image
            src="../../images/slide-reliability-top-right-lock.svg"
            sizes="(max-width: 1330px) 100vw, 1330px"
          />
        </picture>
      </Layer>
      <Layer topRight className="carousel__slide__layer--server">
        <picture>
          <Image
            src="../../images/slide-reliability-top-right-server.svg"
            sizes="(max-width: 1330px) 100vw, 1330px"
          />
        </picture>
      </Layer>
      <Layer topRight className="carousel__slide__layer--like">
        <picture>
          <Image
            src="../../images/slide-reliability-top-right-like.svg"
            sizes="(max-width: 1330px) 100vw, 1330px"
          />
        </picture>
      </Layer>
      <Layer bottomLeft className="carousel__slide__layer--dinosaur">
        <picture>
          <Image
            src="../../images/slide-reliability-bottom-left-dinosaur.svg"
            sizes="(max-width: 1330px) 100vw, 1330px"
          />
        </picture>
      </Layer>
      <Layer bottomLeft className="carousel__slide__layer--sw">
        <picture>
          <Image
            src="../../images/slide-reliability-bottom-left-sw.svg"
            sizes="(max-width: 1330px) 100vw, 1330px"
          />
        </picture>
      </Layer>
      <Layer bottomLeft className="carousel__slide__layer--cogs">
        <picture>
          <Image
            src="../../images/slide-reliability-bottom-left-cogs.svg"
            sizes="(max-width: 1330px) 100vw, 1330px"
          />
        </picture>
      </Layer>
      <Layer bottomRight className="carousel__slide__layer--bottom-right">
        <picture>
          <Image
            src="../../images/slide-reliability-bottom-right.svg"
            sizes="(max-width: 1330px) 100vw, 1330px"
          />
        </picture>
      </Layer>
    </Slide>
  ),
  () => true
);

export default SlideReliability;
