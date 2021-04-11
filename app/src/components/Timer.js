function Timer(props) {
    return (
        <div className='timer'>
            <div className='timer-wrapper'>
                <div id='timer-label'>{props.currentClockShown}</div>
                <div id='time-left'> {props.time}</div>
            </div>
        </div>
    )
}

export default Timer;
