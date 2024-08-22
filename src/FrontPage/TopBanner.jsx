import { Link } from "react-router-dom";
import bgImg from "../assets/reading_blog.jpg";
export default function TopBanner() {
  const divStyle = {
    background: `linear-gradient(
          rgb(207 208 218 / 51%),
          rgba(78, 87, 212, 0.438)
        ), url(${bgImg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  return (
    <div className=" ">
      <div
        style={divStyle}
        className="relative dark:text-gray-200 text-white px-6 pt-14 lg:px-8 "
      >
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center opacity-100">
            <h1 className="text-6xl  font-bold tracking-tight  sm:text-6xl">
              Read Blogs To enhance your knowledge
            </h1>
            <p className="mt-12 text-xl leading-8">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="blogs"
                className="rounded-md bg-gradient-to-r from-blue-500 to-green-500 px-4 py-3  font-semibold text-xl shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </Link>
              <a href="#" className="text-sm font-semibold leading-6 ">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
