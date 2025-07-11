import Header from "../components/Header";
import Button from "../components/Button";
import { useContext, useEffect } from "react";
import { DiaryDispatchContext, DiaryStateContext } from "../App";
import Editor from "../components/Editor";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const nav = useNavigate();

  const diaryList = useContext(DiaryStateContext);
  const { onUpdate } = useContext(DiaryDispatchContext);
  const { onDelete } = useContext(DiaryDispatchContext);
  const targetDiary = diaryList.find((item) => String(item.id) === String(id));

  useEffect(() => {
    if (!targetDiary) {
      // alert("해당 일기를 찾을 수 없습니다.");
      nav("/", { replace: true });
    }
  }, [targetDiary, nav]);

  if (!targetDiary) return null;

  const onSubmit = (input) => {
    onUpdate(
      targetDiary.id,
      input.createdDate.getTime(),
      input.emotionId,
      input.content
    );
    nav(`/diary/${targetDiary.id}`, { replace: true });
  };

  return (
    <div>
      <Header
        title="일기 수정하기"
        leftChild={<Button text="< 뒤로 가기" onClick={() => nav(-1)} />}
        rightChild={
          <Button
            text="삭제하기"
            type="NEGATIVE"
            onClick={() => {
              if (window.confirm("정말 삭제하시겠습니까?")) {
                onDelete(targetDiary.id);
                nav("/", { replace: true });
              }
            }}
          />
        }
      />

      <Editor initData={targetDiary} onSubmit={onSubmit} />
    </div>
  );
};

export default Edit;
