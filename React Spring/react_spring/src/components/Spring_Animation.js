import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

function SpringAnimation() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const incrementCount = () => {
      setCount((prevCount) => prevCount+0.5);
    };

    // Increment count 10 times with a delay
    for (let index = 0; index < 10; index++) {
      setTimeout(incrementCount, index * 1000); // Adjust the delay as needed
    }
  }, []);

  const props = useSpring({
    opacity: 1,
    marginTop: 0,
    from: { opacity: 0, marginTop: -500 },
  });

  const counterProps = useSpring({
    opacity: 1,
    marginTop: 0,
    number: count,
    from: { number: 0 },
  });

  return (
    <>
      <animated.div style={props}>
        <div className='Components' style={c1Style}>
          <h1>Component-1</h1>
          <p>
            Twenty-five hours had passed since the incident. It seemed to be a
            lot longer than that. That twenty-five hours seemed more like a
            week in her mind. The fact that she still was having trouble
            comprehending exactly what took place wasn't helping the matter. She
            thought if she could just get a little rest the entire incident
            might make a little more sense.
          </p>
        </div>
      </animated.div>
      <animated.div style={counterProps}>
        <div className='counter'>
          <h2>{count}</h2>
        </div>
      </animated.div>
    </>
  );
}

const c1Style = {
  color: 'white',
};

export default SpringAnimation;
