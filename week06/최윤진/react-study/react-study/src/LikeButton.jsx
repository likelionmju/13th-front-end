LikeButton.jsx;
import { useState } from "react";

function LikeButton({ title }) {
  const [likes, setLikes] = useState(0);

  const handleClick = () => {
    if (likes < 20) {
      setLikes(likes + 1);
    }
  };

  // 스타일 조건부 설정
  const likeStyle = {
    color: likes >= 10 ? "red" : "black",
    fontWeight: "bold",
  };

  return (
    <div>
      <h2>제목: {title}</h2>
      <p style={likeStyle}>좋아요 수: {likes}</p>
      {likes >= 20 && <p style={{ color: "gray" }}>더 이상 누를 수 없어요</p>}
      <button onClick={handleClick} disabled={likes >= 20}>
        좋아요
      </button>
    </div>
  );
}

export default LikeButton;
