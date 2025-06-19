export default function SideBar() {
  return (
    <aside className="fixed top-1/2 -translate-y-1/2 left-0 bg-black text-white w-[250px] h-[85vh] rounded-r-2xl p-4 space-y-4 transition-transform hover:translate-x-4">
      <ul className="space-y-2 text-lg font-bold">
        <li><a href="#profile">기본정보</a></li>
        <li><a href="#timeline">고등학교 때 작품</a></li>
        <li><a href="#life">나의 일생..?</a></li>
        <li><a href="#hobbies">나에 대해..</a></li>
      </ul>
    </aside>
  );
}
