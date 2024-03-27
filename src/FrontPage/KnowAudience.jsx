import audienceImg from '../assets/audience.jpg'
export default function KnowAudience() {
  return (
    // bg-indigo-400
    <section className="flex   opacity-70">
    <div className="justify-evenly items-center mx-auto max-w-2xl py-52">
      <h1 className="font-bold text-5xl  pb-12">Know your audience</h1>
      <p className="font-semibold">
        Find out which posts are a hit with Blogger’s built-in analytics.
        You’ll see where your audience is coming from and what they’re
        interested in. You can even connect your blog directly to Google
        Analytics for a more detailed look.
      </p>
    </div>
    <div className="justify-evenly items-center mx-auto max-w-2xl py-12 mt-12">
      <img
        className="w-full h-80 rounded-md"
        src={audienceImg}
        alt=""
      />
    </div>
  </section>
  )
}
