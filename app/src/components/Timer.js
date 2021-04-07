function Timer(props) {
    return (
        <div className='timer'>
            <div className='timer-wrapper'>
                <div id='timer-label'>Session</div>
                <div id='time-left'> {props.time}</div>
            </div>
        </div>
    )
}

export default Timer;

// need to finish this project man