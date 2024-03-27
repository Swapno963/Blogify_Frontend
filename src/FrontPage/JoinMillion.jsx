import bgImg1 from '../assets/world_2.png'
import bgImg2 from '../assets/world_dots.png'
export default function JoinMillion() {
    const divStyle1 = {
        background: `linear-gradient(
              rgba(78, 87, 212, 0.507),
              rgba(78, 87, 212, 0.438)
            ), url(${bgImg1})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      };
    const divStyle2 = {
        background: `linear-gradient(
              rgba(78, 87, 212, 0.507),
              rgba(78, 87, 212, 0.438)
            ), url(${bgImg2})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      };
  return (
    <section className="text-white min-h-screen relative bg-orange-100">
      <div className="absolute inset-0 flex flex-col justify-center items-center z-10">
        <h2 className="font-bold text-6xl pb-6">Join millions of others</h2>
        <p className="font-semibold text-md text-center text-2xl pb-6">
          Whether sharing your expertise, breaking news, or <br />
          whatever’s on your mind, you’re in good company on <br />
          Blogger. Sign up to discover why millions of people have <br />
          published their passions here.
        </p>
        <button className="bg-indigo-600 font-bold text-white px-3 py-2 rounded-md">
          Get Started
        </button>
      </div>
      <div>
        <div
          className="absolute inset-0 w-full h-full object-cover bg-orange-700"
          style={divStyle1}
        ></div>
        <div
          className="absolute inset-0 w-full h-full object-cover"
          style={divStyle2}
        ></div>
      </div>
    </section>
  );
}
