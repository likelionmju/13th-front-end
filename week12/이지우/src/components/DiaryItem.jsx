import "./DiaryItem.css";
import { useNavigate } from "react-router-dom";
import { getEmotionImage } from "../util/get-emotion-image";

const DiaryItem = ({ id, createdDate, emotionId, content }) => {
  const nav = useNavigate();

  const goToDetail = () => {
    nav(`/diary/${id}`);
  };

  const goToEdit = (e) => {
    e.stopPropagation(); // 상세보기 방지
    nav(`/edit/${id}`);
  };

  const dateStr = new Date(createdDate).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  return (
    <div className="DiaryItem">
      {/* 감정 이미지 박스 */}
      <div
        className={`img_section img_section_${emotionId}`}
        onClick={goToDetail}
      >
        <img src={getEmotionImage(emotionId)} alt={`emotion-${emotionId}`} />
      </div>

      {/* 날짜 + 내용 */}
      <div className="info_section" onClick={goToDetail}>
        <div className="created_date">{dateStr}</div>
        <div className="content">{content.slice(0, 40)}</div>
      </div>

      {/* 수정 버튼 */}
      <div className="button_section">
        <button className="diary_edit_button" onClick={goToEdit}>
          수정하기
        </button>
      </div>
    </div>
  );
};

export default DiaryItem;
