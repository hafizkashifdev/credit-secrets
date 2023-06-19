import React, { useEffect, useRef } from 'react';
import './ball-animation.scss';

const BallAnimation = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];
    const numBalls = 50;
    const balls = [];

    const homeContainerWidth = containerRef.current.clientWidth;
    const homeContainerHeight = containerRef.current.clientHeight;

    for (let i = 0; i < numBalls; i++) {
      let ball = document.createElement("div");
      ball.classList.add("ball");
      ball.style.background = colors[Math.floor(Math.random() * colors.length)];
      ball.style.left = `${Math.floor(Math.random() * homeContainerWidth)}px`;
      ball.style.top = `${Math.floor(Math.random() * homeContainerHeight)}px`;
      ball.style.transform = `scale(${Math.random()})`;
      ball.style.width = `${Math.random()}em`;
      ball.style.height = ball.style.width;

      balls.push(ball);
      containerRef.current.appendChild(ball);
    }

    balls.forEach((el, i, ra) => {
      let to = {
        x: Math.random() * (i % 2 === 0 ? -11 : 11),
        y: Math.random() * 12
      };

      let anim = el.animate(
        [
          { transform: "translate(0, 0)" },
          { transform: `translate(${to.x}rem, ${to.y}rem)` }
        ],
        {
          duration: (Math.random() + 1) * 2000,
          direction: "alternate",
          fill: "both",
          iterations: Infinity,
          easing: "ease-in-out"
        }
      );
    });

    return () => {
      balls.forEach((ball) => {
        ball.remove();
      });
    };
  }, []);

  return <div ref={containerRef} className="ball-animation-container" />;
};

export default BallAnimation;
