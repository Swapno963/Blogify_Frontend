import { Link } from "react-router-dom";
import bgImg from "../assets/reading_blog.jpg";
export default function TopBanner() {
  const divStyle = {
    background: `linear-gradient(
          rgba(78, 87, 212, 0.507),
          rgba(78, 87, 212, 0.438)
        ), url(${bgImg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  return (
    <div className="bg-white" style={divStyle}>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Read Blogs To enhance your knowledge
            </h1>
            <p className="mt-6 text-lg leading-8 text-white">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link to="blogs"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </Link>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-white"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
