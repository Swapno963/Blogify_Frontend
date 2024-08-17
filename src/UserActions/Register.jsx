import RegisterForm from "../components/Auth/RegisterForm";

export default function Register() {
  return (
    <>
      <mainp>
        <section className="container my-[77px] py-12">
          <div className="w-full md:w-1/2 mx-auto bg-[#d2d2f7] p-8 rounded-md mt-12">
            <h2 className="text-2xl font-bold mb-6">Register</h2>
            <RegisterForm />
          </div>
        </section>
      </mainp>
    </>
  );
}
