import 'bulma/css/bulma.css';
import './App.css';

import React, {useState, useEffect} from "react";

function App() {
    const [isRunning, setIsRunning]=useState(false);
    const [time, setTime]=useState(0);
    //elapsed time init'd to 0 and currently not running


    useEffect(()=>{
        let interval;
        if(isRunning){
            interval=setInterval(()=>{
                setTime((prevTime)=>prevTime+1);
            },10)
        }else{
            clearInterval(interval);
        }
        return ()=>clearInterval(interval);
    }, [isRunning]);

    const handlePlay = () => {
        setIsRunning(true);
      };
    
      const handlePause = () => {
        setIsRunning(false);
      };
    
      const handleStop = () => {
        setIsRunning(false);
        setTime(0);
      };

      const formatTime = () => {
  const milliseconds = time % 100;
  const seconds = Math.floor((time / 100) % 60);
  const minutes = Math.floor((time / (100 * 60)) % 60);
  const hours = Math.floor((time / (100 * 60 * 60)) % 24);

  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;
};

      
      

  return (
    <section className="hero is-medium is-link is-flex is-align-items-center " style={{ backgroundColor: '#910A67' }}>
      <div className="hero-body has-text-centered">
        <p className="title" style={{fontSize:'100px',fontFamily: 'monospace' }}>
        {formatTime()}
        </p>
        <p className="subtitle">
          <button className='button is-danger mt-2' onClick={handleStop}> Reset </button>
          <button className='button is-warning ml-2 mt-2' onClick={handlePause}> Pause </button>
          <button className='button is-success ml-2 mt-2' onClick={handlePlay}> Play </button>
        </p>
      </div>
    </section>
  );
}

export default App;
