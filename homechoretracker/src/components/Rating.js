

import React, { Component } from 'react';
import './App.css';
// import cn from 'classnames/bind'


//const cx = cn.bind(styles)

class CountDown extends Component {
    constructor(props) {
        super(props)
        this.count = this.count.bind(this)
        this.state = {
            days: 0,
            minutes: 0,
            hours: 0,
            secounds: 0,
            time_up: ""
        }
        this.x = null
        this.deadline = null
    }
    count() {
        var now = new Date().getTime();
        var t = this.deadline - now;
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((t % (1000 * 60)) / 1000);
        this.setState({ days, minutes, hours, seconds })
        if (t < 0) {
            clearInterval(this.x);
            this.setState({ days: 0, minutes: 0, hours: 0, seconds: 0, time_up: "TIME IS UP" })
        }
    }
    componentDidMount() {
        this.deadline = new Date("nov 28, 2019 21:00:00").getTime();

        this.x = setInterval(this.count, 1000);
    }
    // if(choreCompleted > deadline)
    // return Date;

}
render() {
    const { days, seconds, hours, minutes, time_up } = this.state
    return (
        <div>

            <h1>Countdown Clock</h1>
            <div id="clockdiv">
                <div>
                    <span className="days" id="day">{days}</span>
                    <div className="smalltext">Days</div>

                </div>
                <div>
                    <span className="hours" id="hour">{hours}</span>
                    <div className="smalltext">Hours</div>

                </div>
                <div>
                    <span className="minutes" id="minute">{minutes}</span>
                    <div className="smalltext">Minutes</div>

                </div>
                <div>
                    <span className="seconds" id="second">{seconds}</span>
                    <div className="smalltext">Seconds</div>

                </div>
            </div>

            <p id="demo">{time_up}</p>
        </div>
    )
}
}


// export default class Timer extends Component {
//     state = {
//         minutes: 3,
//         seconds: 0,
//     }

//     componentDidMount() {
//         this.myInterval = setInterval(() => {
//             const { seconds, minutes } = this.state

//             if (seconds > 0) {
//                 this.setState(({ seconds }) => ({
//                     seconds: seconds - 1
//                 }))
//             }
//             if (seconds === 0) {
//                 if (minutes === 0) {
//                     clearInterval(this.myInterval)
//                 } else {
//                     this.setState(({ minutes }) => ({
//                         minutes: minutes - 1,
//                         seconds: 59
//                     }))
//                 }
//             } 
//         }, 1000)
//     }


// // var t0 = performance.now();

// // doSomething();   // <---- The function you're measuring time for 

// // var t1 = performance.now();
// // console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");



// // import { useTracking } from 'react-tracking';
// // import ReactGA from 'react-ga';
// // ReactGA.initialize('UA-XXXXXXXX');

// onCLickLink
// // const SomeChild = () => {
//     const tracking = useTracking();

//     return (
//         <div
//             onClick={() => {
//                 tracking.trackEvent({ action: 'click' });
//             }}
//         />
//     );
// };



// import React from 'react';
// import Rating from '@material-ui/lab/Rating';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';

// export default function SimpleRating() {
//     const [value, setValue] = React.useState(2);

//     return (
//         <div>
//             <Box component="fieldset" mb={3} borderColor="transparent">
//                 <Typography component="legend">Controlled</Typography>
//                 <Rating
//                     name="simple-controlled"
//                     value={value}
//                     onChange={(event, newValue) => {
//                         setValue(newValue);
//                     }}
//                 />
//             </Box>
//         </div>)
// }