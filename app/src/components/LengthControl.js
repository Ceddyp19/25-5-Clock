function LengthControl(props) {
    return (
        <>
            <div id={props.id}>{props.title}</div>
            <button onClick={() => props.decrementLengthTime(props.type)} className='length-btn' id={props.decrementBtnId}></button>
            <div className='length-btn' id={props.lengthId}>{props.value}</div>
            <button onClick={() => props.incrementLengthTime(props.type)} className='length-btn' id={props.incrementBtnId}></button>
        </>
    )
}

export default LengthControl;