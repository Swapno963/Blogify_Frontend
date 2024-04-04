/* eslint-disable react/no-unescaped-entities */

import LoginForm from "../components/Auth/LoginForm";

export default function Login() {
  return (
    <>
      <section className="flex justify-center items-center h-screen">
        <div className="w-full  md:w-1/2 mx-auto bg-[#3a3a47] p-8 rounded-md ">
          <h2 className="text-2xl font-bold mb-6">Login</h2>
          <LoginForm />
        </div>
      </section>
    </>
  );
}
