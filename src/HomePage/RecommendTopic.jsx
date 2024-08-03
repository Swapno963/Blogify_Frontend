export default function RecommendTopic() {
  const reco = [
    { id: 1, text: "Machine Learing" },
    { id: 2, text: "Productivity" },
    { id: 3, text: "psychology" },
    { id: 5, text: "Money" },
    { id: 4, text: "Python" },
    { id: 6, text: "Helth " },
    { id: 7, text: "Business" },
  ];
  return (
    <div className="sidebar-card mt-8">
      <h2 className="text-slate-700 opacity-70 text-xl lg:text-2xl font-semibold pt-3 mb-6">
        Recommendaed Topics
      </h2>
      <div className="flex flex-wrap gap-3">
        {reco?.map((r) => (
          <p
            key={r?.id}
            className="py-2 px-3 text-[#333333] bg-[#D7DAF2] rounded-full"
          >
            {r?.text}
          </p>
        ))}
      </div>
      <p className="text-green-600 font-semibold mt-7">See more</p>
    </div>
  );
}
