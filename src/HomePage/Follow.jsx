import author from "../assets/author.jpeg";
export default function Follow() {
  const follow = [
    {
      id: 1,
      author: "Ariana",
      des: "I write about sex, love, relationships, and other thin",
    },
    {
      id: 2,
      author: "Liu Zuo Lin",
      des: "The latest posts from Android Professionals and Google",
    },
    {
      id: 1,
      author: "Ariana",
      des: "I write about sex, love, relationships, and other thin",
    },
  ];
  return (
    <div className="sidebar-card">
      <h2 className=" opacity-90 text-xl lg:text-2xl font-semibold ">
        Who to follow
      </h2>
      <div className="flex flex-wrap gap-3 my-5">
        {follow?.map((f) => (
          <div key={f?.id} className="flex">
            <img className="w-8 h-8 rounded-full mr-2" src={author} alt="" />
            <div className="w-3/5">
              <h2 className="font-bold text-xl">{f?.author} </h2>
              <p>{f?.des} </p>
            </div>
            <div>
              <button className="rounded-xl px-3 py-2 border border-indigo-400  transition-colors duration-300 ease-in-out hover:bg-indigo-500 hover:text-white">
                Follow
              </button>
            </div>
          </div>
        ))}
      </div>
      <p className="text-green-600 font-semibold mt-7">See more</p>
    </div>
  );
}
