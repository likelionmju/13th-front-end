const Controller = ({count, setCount}) => {
    const setState = setCount;
    const state = count;
    return (
        <div style={{width:"400px", height: "25px", backgroundColor: "lightgray", borderRadius: "5px", padding: "10px 5px"}}>
            <button onClick={() => {setState(state-1)}}>-1</button>  
            <button onClick={() => {setState(state-10)}}>-10</button>  
            <button onClick={() => {setState(state-100)}}>-100</button>  
            <button onClick={() => {setState(state+100)}}>+100</button>  
            <button onClick={() => {setState(state+10)}}>+10</button>  
            <button onClick={() => {setState(state+1)}}>+1</button>  
        </div>
    )
    
}
export default Controller