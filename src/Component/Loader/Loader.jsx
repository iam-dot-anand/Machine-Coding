import React, { useState } from 'react'

import './index.css'
const limit = 3;

function Loader() {
    const [count,setcount] = useState(0);
    const [animationData, setAnimationData] = useState({noOfActiveBox:0,completedBoxIndex:0});

    const handleAnimationEnd = ()=>{
        setAnimationData({noOfActiveBox:animationData.noOfActiveBox-1,completedBoxIndex:animationData.completedBoxIndex+1})
    }

    const handleAnimationStart = ()=>{
        setAnimationData({...animationData,noOfActiveBox:animationData.noOfActiveBox+1})
    }
    const handleReset = () => {
        setcount(0);
        setAnimationData({noOfActiveBox:0,completedBoxIndex:0});
    }

  return (
    <div className="main">
      <div className="heading">
        <h1>Uber's Problem</h1>
      </div>
      <div className="btn-box">
        <button className="btn1" onClick={() => setcount(count + 1)}>
          Click me
        </button>
        <button className="btn2" onClick={handleReset}>
          Reset
        </button>
        <p>limit - {limit}</p>
      </div>
      <div>
        {[...Array(count).keys()].map((val) => {
          return <>
            {animationData.completedBoxIndex <= val ? (
              <div
                className={`box limitBox`}
                key={val}
                onAnimationStart={handleAnimationStart}
                onAnimationEnd={handleAnimationEnd}
              />
            ) : (
              <div className="box" key={val} />
            )}
          </>
        })}
      </div>
    </div>
  );
}

export default Loader