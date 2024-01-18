import React from 'react';
import { useSpring, animated } from 'react-spring';

function Component_2() {
  const props = useSpring({
    opacity: 1,
    marginTop: 0,
    from: { opacity: 0, marginTop: -500 },
    config: { delay: 1000, duration: 1000 },
  });

  return (
    <animated.div style={props}>
      <div className='Components' style={c2Style}>
        <h1>Component-2</h1>
        <p>
          Twenty-five hours had passed since the incident. It seemed to be a
          lot longer than that. That twenty-five hours seemed more like a week
          in her mind. The fact that she still was having trouble comprehending
          exactly what took place wasn't helping the matter. She thought if she
          could just get a little rest the entire incident might make a little
          more sense.
        </p>
      </div>
    </animated.div>
  );
}

const c2Style = {
  background: 'slateblue',
  padding: '20px',
  borderRadius: '10px',
  color: 'white',
};

export default Component_2;
