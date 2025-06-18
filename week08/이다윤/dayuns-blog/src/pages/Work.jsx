export default function Work() {
  return (
    <section className="min-h-screen pt-32 px-6">
      {/* ✅ 상단 패딩 늘려 제목 노출 보장 */}
      <h2 className="text-3xl font-bold text-center mb-12 font-['KBO-Dia-Gothic_bold']">
        MY VALUES
      </h2>
      <div className="space-y-12">
        {[
          [
            "밝고 긍정적인 사람입니다.",
            "저의 긍정적인 에너지로 인해 주변에 사람이 많고 갈등 상황도 현명하게 대처합니다.",
            "/images/dog1.jpg",
          ],
          [
            "끊임없이 발전하고자 하는 사람입니다.",
            "목표를 달성하며 얻는 성취감을 통해 성장하는 삶을 살아갑니다.",
            "/images/dog2.jpg",
          ],
          [
            "새로운 도전을 좋아합니다.",
            "모르는 것이 있으면 반드시 해결하는 성격입니다.",
            "/images/dog3.jpg",
          ],
        ].map(([title, desc, img], i) => (
          <div key={i} className="flex items-center gap-8">
            <img src={img} alt="value" className="w-52 h-52 rounded-full" />
            <div>
              <h3 className="text-2xl font-bold mb-2">{title}</h3>
              <p className="text-lg">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
