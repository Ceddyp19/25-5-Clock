function LengthControl(props) {
    return (
        <>
            <div id={props.id}>{props.title}</div>
            <button className='length-btn' id={props.decrementBtnId}></button>
            <div className='length-btn' id={props.lengthId}>{props.value}</div>
            <button className='length-btn' id={props.incrementBtnId}></button>
        </>
    )
}

export default LengthControl;