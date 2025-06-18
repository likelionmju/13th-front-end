function Etc() {
  return (
    <div className="flex flex-col items-center gap-6">
      <h2 className="text-3xl font-bold">ETC</h2>
      <div className="flex gap-10">
        <div>
          <details>
            <summary>Question 1</summary>
            <p>제일 좋아하는 음식</p>
          </details>
          <details>
            <summary>Answer 1</summary>
            <p>고기</p>
            <img src="고기.jpeg" alt="고기" />
          </details>
        </div>
        <div>
          <details>
            <summary>Question 2</summary>
            <p>제일 좋아하는 음악 장르 3가지</p>
          </details>
          <details>
            <summary>Answer 2</summary>
            <p>힙합, 팝송</p>
            <img src="Hip-HOp.jpeg" alt="힙합" />
            <img src="pop-song.jpeg" alt="팝송" />
          </details>
        </div>
        <div>
          <details>
            <summary>Question 3</summary>
            <p>제일 좋아하는 계절</p>
          </details>
          <details>
            <summary>Answer 3</summary>
            <p>겨울</p>
            <img src="겨울.jpeg" alt="겨울" />
          </details>
        </div>
      </div>
    </div>
  );
}

export default Etc;
