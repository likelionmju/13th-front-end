import React, { useState } from "react";

const LikeButton = ({ title }) => {
  const [likes, setLikes] = useState(0);

  const handleClick = () => {
    if (likes < 20) {
      setLikes(likes + 1);
    }
  };

  return (
    <div className="like-button-container">
      <h2>{title}</h2>
      <p style={{ color: likes >= 10 ? "red" : "black" }}>좋아요 수: {likes}</p>
      {likes >= 20 && <p>더 이상 누를 수 없어요</p>}
      <button onClick={handleClick} disabled={likes >= 20}>
        좋아요
      </button>
    </div>
  );
};

export default LikeButton;
