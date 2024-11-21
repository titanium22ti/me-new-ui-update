import Countdown, { zeroPad } from "react-countdown";

function Timer({count}) {
    // Random component
    const Completionist = () => <span style={{'padding-left':'20px'}}>You are good to go!</span>;
    
    // Renderer callback with condition
    const renderer = ({days, hours, minutes, seconds, completed }) => {
        if (completed) {
        // Render a completed state
        return <Completionist />;
        } else {
        // Render a countdown
        return <span className="countdown d-flex align-items-center" style={{'paddingTop':'10px','padding-left':'10px'}}>{days > 0 && <span>{days}D :</span>}<span>{zeroPad(hours)}H</span>:<span>{zeroPad(minutes)}M</span>:<span>{zeroPad(seconds)}S</span></span>;
        }
    };
    return ( 
        <Countdown date={count} renderer={renderer} autoStart />
     );
}

export default Timer;