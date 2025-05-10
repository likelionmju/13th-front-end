const Controller = ({state, setState}) => {

    return(
        <>
            <div id="click">
                <button onClick={()=>{setState(state-1)}}>-1</button>
                <button onClick={()=>{setState(state-10)}}>-10</button>
                <button onClick={()=>{setState(state-100)}}>-100</button>
                <button onClick={()=>{setState(state+100)}}>+100</button>
                <button onClick={()=>{setState(state+10)}}>+10</button>
                <button onClick={()=>{setState(state+1)}}>+1</button>
            </div>
        </>
    )
}

export default Controller;
