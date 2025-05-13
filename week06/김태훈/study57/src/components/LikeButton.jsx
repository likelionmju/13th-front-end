const LikeButton = ({title, like, setlike}) => {

    const setLike = setlike;
    const Like = like;

    function handleClick() {
        const liketext = document.querySelector(".liketext")
        const LikeButton1 = document.querySelector(".LikeButton1")
        const likeButton2 = document.querySelector(".likeButton2")
        if (Like >= 20) {
            liketext.style.color = "black"
            LikeButton1.style.display = "none"
            likeButton2.style.display ="block"
        }
    }

    handleClick()
    return (
        <div>
            <h1>{title}</h1>
            <div style={{ }}>
                    <h1>좋아요 수: <span className="liketext" style={{ color: "red" }}>{Like}</span></h1>
            </div>

            <div className="LikeButton1" style={{ display: "flex"}}>
                <button onClick={() => {setLike(Like+1)}}>좋아요</button>  
            </div>

            <div className="likeButton2" style={{ display: "none"}}>
                <p>더 이상 누를 수 없어요</p>
                <button disabled>좋아요</button>  
            </div>
        </div>
    )


    //--------------------------------------------------------------

    // if (Like >= 20) {
    //     return (
    //         <div>
    //             <h1>{title}</h1>
    //             <div style={{ }}>
    //                     <h1>좋아요 수: {Like}</h1>
    //             </div>
    //             <div style={{ }}>
    //                 <p>더 이상 누를 수 없어요</p>
    //                 <button disabled>좋아요</button>  
    //             </div>
    //         </div>
    //     )
    // }else {
    //     return (
    //         <div>
    //             <h1>{title}</h1>
    //             <div style={{ }}>
    //                     <h1>좋아요 수: <span style={{ color: "red" }}>{Like}</span></h1>
    //             </div>
    //             <div>
    //                 <button onClick={() => {setLike(Like+1)}}>좋아요</button>  
    //             </div>
    //         </div>
    //     )
    // }
    
}
export default LikeButton