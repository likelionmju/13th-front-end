const Viewer = ({state}) => {
    return(
        <>
            <div id="count">
                <p>현재 카운트:</p>
                <h1>{state}</h1>
            </div>
        </>
    )
}

export default Viewer;