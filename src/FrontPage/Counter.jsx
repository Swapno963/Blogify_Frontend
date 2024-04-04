import bgImg from "../assets/audience.jpg";
export default function Counter() {
  const divStyle = {
    background: `linear-gradient(
              rgba(78, 87, 212, 0.507),
              rgba(78, 87, 212, 0.438)
            ), url(${bgImg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  return (
    <section className="bg-indigo-500 text-white opacity-100" style={divStyle}>
      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="pt-12 pb-10">
          <p className="text-6xl">90k+</p>
          <p className="text-2xl pt-6">Total User</p>
        </div>
        <div className="pt-12 pb-10">
          <p className="text-6xl">60k+</p>
          <p className="text-2xl pt-6">Active User</p>
        </div>
        <div className="pt-12 pb-10">
          <p className="text-6xl">20k+</p>
          <p className="text-2xl pt-6">Primum User</p>
        </div>
      </div>
    </section>
  );
}
