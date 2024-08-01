const reviews = [
  {
    id: 1,
    message:
      "I stumbled upon this blog recently and I must say, it's a hidden gem! The content is engaging and informative, covering a wide range of topics that cater to different interests. The writing style is captivating, making it a pleasure to read through each article. I look forward to seeing more great content!",
    userName: "John Doe",
    avatar: "https://source.unsplash.com/150x150/?woman",
    date: "March 22, 2024",
  },
  {
    id: 2,
    message:
      "This blog has become my go-to source for insightful articles on various subjects. The writers consistently deliver high-quality content that keeps me coming back for more. Whether I'm looking for inspiration, advice, or entertainment, I know I can find it here. Keep up the fantastic work!",
    userName: "Jane Smith",
    avatar: "https://source.unsplash.com/150x150/?girl",
    date: "March 23, 2024",
  },
  {
    id: 3,
    message:
      "I've been following this blog for some time now, and it never fails to impress me. The depth of knowledge and expertise showcased in each post is truly remarkable. It's evident that a lot of effort goes into creating such valuable content. Thank you for consistently delivering excellence!",
    userName: "Alice Johnson",
    avatar: "https://source.unsplash.com/150x150/?portrait",
    date: "March 24, 2024",
  },
];

export default function Review() {
  return (
    <section className=" pb-12">
      <div className="row py-12 ">
        <div className="text-center mx-auto max-w-2xl  pb-12">
          <h2 className="text-4xl pb-4 font-bold tracking-tight  sm:text-6xl">
            Testimonial
          </h2>
          <p className="pt-8 font-semibold ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            <br /> nobis magni quas aut labore, similique eos! Pariatur magni et
            repellendus dolores aliquid totam, culpa animi qui, dolor velit ex
            eaque.
          </p>
        </div>
        <div className=" w-4/5  mx-auto">
          <div className="grid grid-cols-3 gap-4 text-center ">
            {reviews.map((rev) => (
              <div
                key={rev.id}
                className="col-span-3 sm:col-span-1 pt-12 pb-10 shadow-2xl p-6 rounded-md  opacity-80"
              >
                <p className="">{rev.message}</p>
                <div className="mt-8 flex items-center gap-x-4">
                  <img
                    className="h-10 w-10 rounded-full "
                    src={rev.avatar}
                    alt=""
                  />
                  <div>
                    <h4 className="font-semibold">{rev.userName}</h4>
                    <small>{rev.date}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
