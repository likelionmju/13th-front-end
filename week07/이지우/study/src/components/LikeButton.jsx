const LikeButton = ({state, setState}) => {
    return(
        <>
        <div>
            <button onClick={()=>{setState(state+1)}} disabled={state >= 20}>좋아요</button>
            <h1>좋아요 수:</h1>
            <p style={{ color: state >= 10 ? 'red' : 'black' }}>{state}</p>
            {state >= 20 && <p>더 이상 좋아요를 누를 수 없습니다</p>}    
        </div>   
    </>
    )

    
}

export default LikeButton;