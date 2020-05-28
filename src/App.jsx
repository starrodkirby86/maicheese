import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import anime from 'animejs';
import video from './festivalight.mp4';
import scanlines from './scanlines.png';
import cheese from './cheese.png';
import ras from './rasCry.png';
import FallingCheese from './FallingCheese';

const FullScreenVideo = styled.video`
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: -99;
`;

const FullScreenBG = styled.img`
  position: fixed;
  right: 0;
  bottom: 0;
  opacity: 50%;
  min-width: 100%;
  min-height: 100%;
  z-index: -98;
`;

// approx the ms before the song starts
const TIME_OFFSET = 386;
const QUARTER_NOTE = 1980;

const Cheese = styled.img`
  {
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 5;
  }
`;

const Ras = styled.img`
  {
    position: fixed;
    bottom: 3%;
    right: 3%;
    transform: translate(50%, 40%) scale(0.2);
    z-index: 1;
  }
`;




function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    anime({
      targets: '#bigcheese',
      translateX: {
        value: '-50%',
        duration: 0,
      },
      translateY: {
        value: '-50%',
        duration: 0,
      },
      scale: [
      {
        value: 4,
        duration: QUARTER_NOTE,
      },
      {
        value: 2,
        duration: QUARTER_NOTE,
      }],
      rotate: { value: '1turn', duration: QUARTER_NOTE * 2, direction: 'alternate' },
      autoplay: true,
      loop: true,
    });

  }, [loaded]);
  
  return (
    <>
      <FullScreenVideo src={video} autoPlay loop type="video/mp4" onPlay={() => setLoaded(true)} />  
      <FullScreenBG src={scanlines} />
      <FallingCheese count={256} />
      <Cheese id="bigcheese" src={cheese} />
      <a target="popup" href="http://ongaku.io"><Ras src={ras} /></a>
    </>
  );
}

export default App;
