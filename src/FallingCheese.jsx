import React, { useEffect } from 'react';
import styled from 'styled-components';
import anime from 'animejs';
import cheese from './cheese.png';

const Cheese = styled.img`
  position: fixed;
  z-index: 1;
`;

const QUARTER_NOTE = 1920;

const animate = (targets) => anime({
  targets,
  bottom: ['120%', '-20%'],
  rotate: '1turn',
  duration: QUARTER_NOTE * 2,
  delay: anime.random(0, QUARTER_NOTE * 4),
  easing: 'linear',
  loop: true,
});

const FallingCheese = ({ count }) => {
  const cheesies = new Array(count).fill(0);

  useEffect(() => {
    cheesies.map((v, i) => animate(`#cheese-${i}`));
  });

  return cheesies.map((v, i) => <Cheese id={`cheese-${i}`} alt="CHEESE" key={`cheese-${i}`} src={cheese} style={{ left: `${anime.random(-20, 120)}%` }} />);
}

export default FallingCheese