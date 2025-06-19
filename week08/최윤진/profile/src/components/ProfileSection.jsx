const ProfileSection = () => {
  return (
    <section className="bg-white h-screen">
      <div className="flex items-start px-[100px] py-[50px]">
        <img
          src="/image/profilephoto.jpg"
          alt="프로필"
          className="w-[420px] h-[600px] ml-[75px]"
        />
        <div className="flex flex-col ml-10">
          <h1 className="mt-[90px] ml-[270px] mb-2 text-[100px] font-[myfont]">
            Profile
          </h1>
          <div className="flex gap-2 pl-[330px]">
            <img src="/image/suit.png" alt="사진1" className="w-[60px]" />
            <img src="/image/bow.png" alt="사진2" className="w-[60px]" />
            <img src="/image/case.png" alt="사진3" className="w-[60px]" />
          </div>
          <address className="mt-[50px] text-[24px] font-[kakaofont]">
            <p className="ml-[395px]">최윤진</p>
            <p className="ml-[370px]">04.07.23</p>
            <p className="ml-[330px]">응용소프트웨어전공</p>
          </address>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
