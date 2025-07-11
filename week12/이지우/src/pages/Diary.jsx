import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { DiaryStateContext } from "../App";
import Header from "../components/Header";
import Button from "../components/Button";
import EmotionItem from "../components/EmotionItem";

const emotionList = [
  { emotionId: 1, emotionName: "완전 좋음" },
  { emotionId: 2, emotionName: "좋음" },
  { emotionId: 3, emotionName: "그럭저럭" },
  { emotionId: 4, emotionName: "나쁨" },
  { emotionId: 5, emotionName: "끔찍함" },
];

const Diary = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const diaryList = useContext(DiaryStateContext);

  const diary = diaryList.find((item) => String(item.id) === String(id));

  useEffect(() => {
    if (!diary) {
      alert("해당 일기를 찾을 수 없습니다.");
      nav("/", { replace: true });
    }
  }, [diary, nav]);

  if (!diary) return null;

  const { createdDate, emotionId, content } = diary;
  const dateStr = new Date(createdDate).toLocaleDateString();
  const emotionData = emotionList.find(
    (e) => e.emotionId === Number(emotionId)
  );

  return (
    <div>
      <Header
        title={`${dateStr}의 감정일기`}
        leftChild={<Button text="< 뒤로가기" onClick={() => nav(-1)} />}
        rightChild={
          <Button text="수정하기" onClick={() => nav(`/edit/${diary.id}`)} />
        }
      />

      <section style={{ padding: "1rem" }}>
        <h4>오늘의 감정</h4>
        <div style={{ marginTop: "0.5rem" }}>
          <EmotionItem
            emotionId={emotionData.emotionId}
            emotionName={emotionData.emotionName}
            isSelected={true}
            onClick={() => {}}
          />
        </div>
      </section>

      <section style={{ padding: "1rem", marginTop: "2rem" }}>
        <h4>오늘의 일기</h4>
        <div
          style={{
            backgroundColor: "#f0f0f0",
            padding: "1rem",
            borderRadius: "8px",
            minHeight: "120px",
            marginTop: "0.5rem",
            whiteSpace: "pre-wrap",
          }}
        >
          {content}
        </div>
      </section>
    </div>
  );
};

export default Diary;
