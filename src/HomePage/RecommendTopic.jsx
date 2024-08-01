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
    <div className="sidebar-card ">
      <h2 className="text-xl font-bold pb-4">Recommendaed Topics</h2>
      <div className="flex flex-wrap gap-3">
        {reco?.map((r) => (
          <p key={r?.id} className="py-2 px-3 bg-gray-500 rounded-full">
            {r?.text}
          </p>
        ))}
      </div>
      <p className="text-green-600 font-semibold mt-7">See more</p>
    </div>
  );
}
