import React, { memo } from 'react';
import { Slide, Layer } from '../carousel';
import Image from '../image';

import loadable from '@loadable/component';

const TopLeftSvg = loadable(() =>
  import('../../images/slide-accessibility-top-left.svg')
);
const TopRightSvg = loadable(() =>
  import('../../images/slide-accessibility-top-right.svg')
);
const BottomLeftSvg = loadable(() =>
  import('../../images/slide-accessibility-bottom-left.svg')
);
const BottomRightEye = loadable(() =>
  import('../../images/slide-accessibility-bottom-right-eye.svg')
);
const BottomRightVoice = loadable(() =>
  import('../../images/slide-accessibility-bottom-right-voice.svg')
);

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
        <TopLeftSvg />
      </Layer>
      <Layer topRight className="carousel__slide__layer--top-right">
        <TopRightSvg />
      </Layer>
      <Layer bottomLeft className="carousel__slide__layer--bottom-left">
        <BottomLeftSvg />
      </Layer>
      <Layer bottomRight className="carousel__slide__layer--eye">
        <BottomRightEye />
      </Layer>
      <Layer bottomRight className="carousel__slide__layer--voice">
        <BottomRightVoice />
      </Layer>
      <Layer center className="carousel__slide__layer--headline">
        <h2 className="homepage-carousel__headline">Accessible</h2>
      </Layer>
    </Slide>
  ),
  () => true
);

export default SlideAccessibility;
