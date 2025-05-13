const Viewer = ({count}) => {
    return (
        <div style={{width:"400px", height: "150px", backgroundColor: "lightgray", borderRadius: "5px", margin: "0px 0px 10px", padding: "10px 5px 0px"}}>
            <h2>현재 카운트 :</h2>
            <h1>{count}</h1>
        </div>
    )
}

export default Viewer