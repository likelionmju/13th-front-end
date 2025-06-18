export default function Etc() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div>
        <details>
          <summary>제일 좋아하는 음식</summary>
          <img src="/고기.jpeg" alt="고기" className="mt-2 w-full object-cover"/>
        </details>
      </div>
      <div>
        <details>
          <summary>제일 좋아하는 음악 장르</summary>
          <div className="mt-2 flex gap-2">
            <img src="/Hip-HOp.jpeg" alt="힙합" className="w-1/2 object-cover"/>
            <img src="/pop-song.jpeg" alt="팝송" className="w-1/2 object-cover"/>
          </div>
        </details>
      </div>
      <div>
        <details>
          <summary>제일 좋아하는 계절</summary>
          <img src="/겨울.jpeg" alt="겨울" className="mt-2 w-full object-cover"/>
        </details>
      </div>
    </div>
  );
}
