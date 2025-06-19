const LikesSection = () => {
  return (
    <section className="bg-[#d1d5db] h-screen w-full box-border flex justify-center items-start">
      <article className="max-w-[1200px] w-full mr-[100px]">
        <header className="w-[500px] h-[70px] bg-gray-300 flex items-center">
          <h2 className="ml-2 text-[45px] font-[myfont]">Things I Like</h2>
        </header>
        <div className="flex bg-gray-300">
          <figure className="flex flex-col items-start">
            <figcaption className="ml-[50px] text-[50px] font-[myfont]">
              Movie
            </figcaption>
            <img src="/image/wick.png" alt="wick" className="h-[370px]" />
            <p className="ml-[62px] text-[25px] font-[kakaofont]">Jhon wick</p>
          </figure>
          <figure className="flex flex-col items-start">
            <figcaption className="ml-[160px] text-[50px] font-[myfont]">
              Music
            </figcaption>
            <img src="/image/youra.png" alt="youra" className="h-[370px]" />
            <p className="ml-[175px] text-[25px] font-[kakaofont]">
              시집 - youra
            </p>
          </figure>
          <figure className="flex flex-col items-start">
            <figcaption className="ml-[90px] text-[50px] font-[myfont]">
              Food
            </figcaption>
            <img src="/image/food.jpg" alt="food" className="h-[370px]" />
            <p className="ml-[110px] text-[25px] font-[kakaofont]">제육볶음</p>
          </figure>
        </div>
      </article>
    </section>
  );
};

export default LikesSection;
