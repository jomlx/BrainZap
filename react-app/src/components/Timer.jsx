import { useEffect, useRef, useState } from 'react';
import '../styles/timer.css';
import alarmSound from '../assets/audio/alarm1.wav';

function Timer() {
    const [time, setTime] = useState(1500); // Time default to 15 minutes
    const [isRunning, setIsRunning] = useState(false); // Default to not running
    const [selectedTime, setSelectedTime] = useState('pomodoro'); // Default to pomodoro
    const [loopCount, setLoopCount] = useState(0); // Default to 0
    const audioRef = useRef(null);

    const totalLoop = 4; // Max loop cycle

    // Time dislplay
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const formatedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    // Handle countdown function
    useEffect(() => {
        let timer;

        if (isRunning && time > 0) {
            timer = setTimeout(() => setTime(time - 1), 1000);
        } else if (time === 0) {
            audioRef.current.play(); // Alarm play when time's up
            handleLoop(); // For loop function
            //setIsRunning(false);
        }

        return () => clearTimeout(timer); // Clear the timeout when it ends
    }, [time, isRunning]);

    // Handle loop function
    const handleLoop = () => {
        if (loopCount < totalLoop - 1) {

            // For alternate loop for the first 3 cycle
            if (selectedTime === 'pomodoro') {
                alert("Time's up! Time to relax!");
                setTime(300);
                setSelectedTime('shortBreak');
            } else if (selectedTime === 'shortBreak') {
                alert("Time's up! Time to focus!");
                setTime(1500);
                setSelectedTime('pomodoro');
                setLoopCount(loopCount + 1);
            }
        } else {
            // long break for the 4 cycle
            alert("Time's up! Time to have a long break!");
            setTime(900);
            setSelectedTime('longBreak');
            setLoopCount(0);
        }
        alert("Congratulations! you finish pomorodo!");
    }
    
    // Handle start function
    const handleStart = () => {
        setIsRunning(true);
    }

    // Handle time type
    const handleTimeType = (timeType) => {
        switch(timeType) {
            case 'pomorodo':
                setTime(1500);
            break;

            case 'shortBreak':
                setTime(300);
            break;

            case 'longBreak':
                setTime(900);
            break;

            default:
                setTime(1500);
        }
        setIsRunning(false);  // Stop when user choose to change time type
        setSelectedTime(timeType);
    }

    return (
        <div className="timer-container">   
            <ul className="timer-menu">
                <li>
                    <button onClick={() => handleTimeType('pomodoro')}
                        className={selectedTime === 'pomodoro' ? 'active' : ''}>
                        Pomodoro
                    </button></li>
                <li><button onClick={() => handleTimeType('shortBreak')}
                    className={selectedTime === 'shortBreak' ? 'active' : ''}>
                    Short Break
                    </button></li>
                <li><button onClick={() => handleTimeType('longBreak')}
                    className={selectedTime === 'longBreak' ? 'active' : ''}>
                    Long Break
                    </button></li>
            </ul>
            <div className="timer">
                <h1>{formatedTime}</h1>
            </div>
            <button className='start-button' onClick={handleStart}>START</button>
            <audio ref={audioRef}>
                <source src={alarmSound} type="audio/wav" />
                Your browser does not support the audio element.
            </audio>
        </div>
    );
}

export default Timer;
