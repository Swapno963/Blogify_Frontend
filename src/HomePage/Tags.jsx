export default function Tags() {
  const tags = [
    { id: 1, text: "+" },
    { id: 2, text: "For Your" },
    { id: 3, text: "Following" },
    { id: 4, text: "Sexuality" },
    { id: 5, text: "React" },
    { id: 6, text: "Android " },
    { id: 7, text: "Marketing" },
    { id: 8, text: "Technology" },
  ];
  return (
    <div className="flex gap-8 py-6 pl-8  text-md flex-wrap  ">
      {tags?.map((t) => (
        <p className=" text-lg" key={t?.id}>
          {t?.text}
        </p>
      ))}
    </div>
  );
}
