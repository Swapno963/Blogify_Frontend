
export default function Footer() {
  return (
    <section  className=" px-20  opacity-80 bg-gray-800">
      <div className="grid grid-cols-4 gap-4 text-start px-6">
        <div className="pt-12 pb-10">
          <h2 className="text-3xl font-bold ">BlogiFy</h2>
          <p className="text-md pt-3 font-semibold text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quo
            quasi voluptates explicabo natus? Ea voluptas temporibus maiores
            quidem aspernatur.
          </p>
        </div>
        <div className="pt-12 pb-10 mx-auto">
          <h2 className="text-3xl font-bold">Services</h2>
          <p className="text-md pt-3 font-semibold text-xl">Mark Favourite</p>
          <p className="text-md pt-3 font-semibold text-xl">Comment to Blog</p>
          <p className="text-md pt-3 font-semibold text-xl">Like a Blo</p>
        </div>
        <div className="pt-12 pb-10 mx-auto">
          <h2 className="text-3xl font-bold">Links</h2>
          <p className="text-md pt-3 font-semibold text-xl">All Blogs</p>
          <p className="text-md pt-3 font-semibold text-xl">Popular Blogs</p>
          <p className="text-md pt-3 font-semibold text-xl">Favourite Blogs</p>
        </div>
        <div className="pt-12 pb-10 mx-auto">
          <h2 className="text-3xl font-bold">Contact</h2>
          <p className="text-md pt-3 font-semibold text-xl">
            Dhanmondi, Dhaka 1207
          </p>
          <p className="text-md pt-3 font-semibold text-xl">
            (+880) 01725 - 019616
          </p>
          <p className="text-md pt-3 font-semibold text-xl">
            swapno963@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
}
