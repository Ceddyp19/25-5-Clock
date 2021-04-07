
export default function TimerControl(props) {
    return (
        <div className='timer-control'>
            <button id='start_stop' onClick={props.toggleTimer}>start/stop</button>
            <button id='reset' onClick={props.reset}>reset</button>
        </div>
    )
}
