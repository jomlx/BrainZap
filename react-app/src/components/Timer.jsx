import { useEffect, useRef, useState } from 'react';
import '../styles/timer.css';
import alarmSound from '../assets/audio/alarm1.wav';

function Timer() {
    const [time, setTime] = useState(5);
    const [isRunning, setIsRunning] = useState(false);
    const [loopCount, setLoopCount] = useState(0);
    const [selectedTime, setSelectedTime] = useState('pomodoro');

    // Time dislplay
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const formatedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    // Countdown
    useEffect(() => {
        let timer;

        if (isRunning && time > 0) {
            timer =setInterval(() => {
                setTime(prevTime => prevTime - 1);
            }, 1000);

        } else if (time === 0) {
            switch (loopCount) {
                case 0:
                    handleTimeType('shortBreak');
                    break;
                case 1:
                    handleTimeType('pomodoro');
                    break;
                case 2:
                    handleTimeType('shortBreak');
                    break;
                case 3:
                    handleTimeType('pomodoro');
                    break;
                case 4:
                    handleTimeType('shortBreak');
                    break;
                case 5:
                    handleTimeType('pomodoro');
                    break;
                case 6:
                    handleTimeType('LongBreak');
                    break;
                default:
                    setLoopCount(0);
                    return;
            }
            setLoopCount(prevCount => (prevCount + 1) % 7);
        }

        return () => clearInterval(timer);
    }, [isRunning, time, loopCount]);

    // Start function
    const handleStart = () => {
        setIsRunning(true);
    }

    // Time type
    const handleTimeType = (timeType) => {
        switch(timeType) {
            case 'pomorodo':
                setTime(5);
            break;

            case 'shortBreak':
                setTime(3);
            break;

            case 'longBreak':
                setTime(7);
            break;

            default:
                setTime(5);
        }
        setIsRunning(false);  // stop when changing time type
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
            <audio>
                <source src={alarmSound} type="audio/wav" />
                Your browser does not support the audio element.
            </audio>
        </div>
    );
}

export default Timer;
