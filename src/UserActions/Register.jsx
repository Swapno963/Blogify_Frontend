import { Link } from "react-router-dom";
import RegisterForm from "../components/Auth/RegisterForm";

export default function Register() {
  return (
    <>
      <main>
        <section className="container">
          <div className="w-full md:w-1/2 mx-auto bg-[#030317] p-8 rounded-md mt-12">
            <h2 className="text-2xl font-bold mb-6">Register</h2>
            <RegisterForm/>
          </div>
        </section>
      </main>
    </>
  );
}
