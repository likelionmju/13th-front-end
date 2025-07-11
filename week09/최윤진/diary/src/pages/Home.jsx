import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";
import { useState, useContext } from "react";
import { DiaryStateContext } from "../App";

const getMonthlyData = (pivotDate, data) => {
  /*beginTime: 기준 날짜인 pivotDate의 연도(getFullYear)와 월(getMonth)을 사용하여 
해당 달의 첫 번째 날 자정(00:00:00)의 시간을 밀리초 단위로 구함*/
  const beginTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth(),
    1,
    0,
    0,
    0
  ).getTime();

  /*endTime: 다음 달의 첫 번째 날에서 하루 전날(즉, 기준 달의 마지막 날) 
23시 59분 59초의 시간을 밀리초 단위로 구함*/
  const endTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1,
    0,
    23,
    59,
    59
  ).getTime();

  //data.filter: data 배열에서 각 항목을 검사하여 createdDate가 beginTime과 endTime 사이에 있는 항목만 남김
  /*beginTime <= item.createdDate && item.createdDate <= endTime: 항목의 createdDate가 
기준 달의 첫 번째 날 자정부터 마지막 날 23시 59분 59초 사이인지 확인*/

  return data.filter(
    (item) => beginTime <= item.createdDate && item.createdDate <= endTime
  );
};

const Home = () => {
  const [pivotDate, setPivotDate] = useState(new Date());
  const data = useContext(DiaryStateContext);
  const monthlyData = getMonthlyData(pivotDate, data);

  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };

  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };

  return (
    <div>
      <Header
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
        leftChild={<Button onClick={onDecreaseMonth} text={"<"} />}
        rightChild={<Button onClick={onIncreaseMonth} text={">"} />}
      />
      <DiaryList data={monthlyData} />
    </div>
  );
};

export default Home;
