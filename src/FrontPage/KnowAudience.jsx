// import audienceImg from "../assets/audience.jpg";
import audienceImg from "../assets/Blog-Know-your-audience.png";
export default function KnowAudience() {
  return (
    // bg-indigo-400
    <section className=" h-[100vh] sm:h-[70vh] flex justify-center items-center">
      <div className="w-4/5 mx-auto grid grid-cols-2  opacity-70  items-center">
        <div className="sm:w-4/5 w-full col-span-2 sm:col-span-1 sm:pt-12 pt-2 ">
          <h1 className="font-bold text-6xl  pb-8">Know your audience</h1>
          <p className="font-semibold leading-7	 text-xl">
            Find out which posts are a hit with Blogger’s built-in analytics.
            You’ll see where your audience is coming
            <br /> <br /> from and what they’re interested in. You can even
            connect your blog directly to Google Analytics for a more detailed
            look.
          </p>
        </div>
        <div className="col-span-2 pt-9 sm:col-span-1">
          <img className="w-full h-90 " src={audienceImg} alt="" />
        </div>
      </div>
    </section>
  );
}
