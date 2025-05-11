import React, { useState } from "react";

function LikeButton({ title }) {
  const [likes, setLikes] = useState(0);

  const handleClick = () => {
    if (likes < 20) {
      setLikes((prev) => prev + 1);
    }
  };

  const textStyle = {
    color: likes >= 10 ? "red" : "black",
    fontWeight: "bold",
  };

  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
      <h2>제목: {title}</h2>
      <p style={textStyle}>좋아요 수: {likes}</p>
      <button onClick={handleClick} disabled={likes >= 20}>
        좋아요
      </button>
      {likes >= 20 && <p style={{ color: "gray" }}>더 이상 누를 수 없어요</p>}
    </div>
  );
}

export default LikeButton;
