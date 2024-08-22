import reviewer from "../assets/author.jpeg";
import reviewer2 from "../assets/review_1.jpeg";
import reviewer3 from "../assets/reviewer_2.png";

const reviews = [
  {
    id: 1,
    message:
      "I stumbled upon this blog recently and I must say, it's a hidden gem! The content is engaging and informative, covering a wide range of topics that cater to different interests. The writing style is captivating, making it a pleasure to read through each article. I look forward to seeing more great content!",
    userName: "John Doe",
    avatar: reviewer,
    date: "March 22, 2024",
  },
  {
    id: 2,
    message:
      "This blog has become my go-to source for insightful articles on various subjects. The writers consistently deliver high-quality content that keeps me coming back for more. Whether I'm looking for inspiration, advice, or entertainment, I know I can find it here. Keep up the fantastic work!",
    userName: "Jane Smith",
    avatar: reviewer2,
    date: "March 23, 2024",
  },
  {
    id: 3,
    message:
      "I've been following this blog for some time now, and it never fails to impress me. The depth of knowledge and expertise showcased in each post is truly remarkable. It's evident that a lot of effort goes into creating such valuable content. Thank you for consistently delivering excellence!",
    userName: "Alice Johnson",
    avatar: reviewer3,
    date: "March 24, 2024",
  },
];

export default function Review() {
  return (
    <section className=" py-12 md:my-12">
      <div className="row py-12 ">
        <div className="text-center mx-auto max-w-2xl  pb-12 opacity-70">
          <h1 className="font-bold text-6xl  pb-4">Testimonial</h1>

          <p className="pt-6  font-semibold">
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
                className="col-span-3 sm:col-span-1 p-6 rounded-lg shadow-lg   transition-all duration-300 hover:shadow-2xl opacity-90 dark:bg-gray-700
                "
              >
                <p className="text-lg leading-relaxed">{rev.message}</p>
                <div className="mt-6 flex items-center gap-x-4">
                  <img
                    className="h-12 w-12 rounded-full object-cover border-2 border-gray-300 dark:border-gray-600"
                    src={rev.avatar}
                    alt=""
                  />
                  <div>
                    <h4 className="font-semibold ">{rev.userName}</h4>
                    <small className="text-gray-500 dark:text-gray-400">
                      {rev.date}
                    </small>
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
