import React, { memo } from 'react';
import { Slide, Layer } from '../carousel';
import { Headline2 } from '../material/Typography';
import Image from '../image';

import loadable from '@loadable/component';

const TopLeftCloud = loadable(() =>
  import('../../images/slide-reliability-top-left-cloud.svg')
);
const TopLeftNoWiFi = loadable(() =>
  import('../../images/slide-reliability-top-left-no-wi-fi.svg')
);
const TopLeftPwaP = loadable(() =>
  import('../../images/slide-reliability-top-left-pwa-p.svg')
);
const TopLeftPwaW = loadable(() =>
  import('../../images/slide-reliability-top-left-pwa-w.svg')
);
const TopLeftPwaA = loadable(() =>
  import('../../images/slide-reliability-top-left-pwa-a.svg')
);
const TopRightLock = loadable(() =>
  import('../../images/slide-reliability-top-right-lock.svg')
);
const TopRightServer = loadable(() =>
  import('../../images/slide-reliability-top-right-server.svg')
);
const TopRightLike = loadable(() =>
  import('../../images/slide-reliability-top-right-like.svg')
);
const BottomLeftDinosaur = loadable(() =>
  import('../../images/slide-reliability-bottom-left-dinosaur.svg')
);
const BottomLeftSw = loadable(() =>
  import('../../images/slide-reliability-bottom-left-sw.svg')
);
const BottomLeftCogs = loadable(() =>
  import('../../images/slide-reliability-bottom-left-cogs.svg')
);
const BottomRightSvg = loadable(() =>
  import('../../images/slide-reliability-bottom-right.svg')
);

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
        <TopLeftCloud />
      </Layer>
      <Layer topLeft className="carousel__slide__layer--no-wi-fi">
        <TopLeftNoWiFi />
      </Layer>
      <Layer topLeft className="carousel__slide__layer--pwa-p">
        <TopLeftPwaP />
      </Layer>
      <Layer topLeft className="carousel__slide__layer--pwa-w">
        <TopLeftPwaW />
      </Layer>
      <Layer topLeft className="carousel__slide__layer--pwa-a">
        <TopLeftPwaA />
      </Layer>
      <Layer topRight className="carousel__slide__layer--lock">
        <TopRightLock />
      </Layer>
      <Layer topRight className="carousel__slide__layer--server">
        <TopRightServer />
      </Layer>
      <Layer topRight className="carousel__slide__layer--like">
        <TopRightLike />
      </Layer>
      <Layer bottomLeft className="carousel__slide__layer--dinosaur">
        <BottomLeftDinosaur />
      </Layer>
      <Layer bottomLeft className="carousel__slide__layer--sw">
        <BottomLeftSw />
      </Layer>
      <Layer bottomLeft className="carousel__slide__layer--cogs">
        <BottomLeftCogs />
      </Layer>
      <Layer bottomRight className="carousel__slide__layer--bottom-right">
        <BottomRightSvg />
      </Layer>
      <Layer center className="carousel__slide__layer--headline">
        <Headline2>Reliable</Headline2>
      </Layer>
    </Slide>
  ),
  () => true
);

export default SlideReliability;
