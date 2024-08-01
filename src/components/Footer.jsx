export default function Footer() {
  return (
    <section className=" sm:px-20  px-8 opacity-80 bg-gray-800  text-gray-200">
      <div className="grid grid-cols-4 gap-4 text-start px-2">
        <div className="pt-12 pb-10 col-span-4 sm:col-span-1">
          <h2 className="text-3xl font-bold ">BlogiFy</h2>
          <p className="text-md pt-3 font-semibold text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quo
            quasi voluptates explicabo natus? Ea voluptas temporibus maiores
            quidem aspernatur.
          </p>
        </div>
        <div className="pt-12 pb-10 sm:mx-auto col-span-4 sm:col-span-1">
          <h2 className="text-3xl font-bold">Services</h2>
          <a
            href="/blogs/"
            className="block cursor-pointer text-md pt-3 font-semibold text-xl"
          >
            Mark Favourite
          </a>
          <a
            href="/blogs/"
            className="block cursor-pointer text-md pt-3 font-semibold text-xl"
          >
            Comment to Blog
          </a>
          <a
            href="/blogs/"
            className="block cursor-pointer text-md pt-3 font-semibold text-xl"
          >
            Like a Blo
          </a>
        </div>
        <div className="pt-12 pb-10 sm:mx-auto  col-span-4 sm:col-span-1">
          <h2 className="text-3xl font-bold">Links</h2>
          <a
            href="/blogs/"
            className="block cursor-pointer text-md pt-3 font-semibold text-xl "
          >
            All Blogs
          </a>
          <a
            href="/blogs/"
            className="block cursor-pointer text-md pt-3 font-semibold text-xl"
          >
            Popular Blogs
          </a>
          <a
            href="/blogs/"
            className="block cursor-pointer text-md pt-3 font-semibold text-xl"
          >
            Favourite Blogs
          </a>
        </div>
        <div className="pt-12 pb-10 sm:mx-auto col-span-4 sm:col-span-1">
          <h2 className="text-3xl font-bold">Contact</h2>
          <p className="text-md pt-3 font-semibold text-xl">
            Dhanmondi 32, Dhaka 1207
          </p>
          <p className="text-md pt-3 font-semibold text-xl">
            (+880) 01709 - 112230
          </p>
          <p className="text-md pt-3 font-semibold text-xl">
            swapno963@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
}
