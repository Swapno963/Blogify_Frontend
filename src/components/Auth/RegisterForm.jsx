
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Field from "../common/Field";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

export default function RegisterForm() {
  const navigate = useNavigate();
  const { updateData } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm();

  const submitForm = async (formData) => {
    console.log(formData);
    // make an api cal
    // will will return tokens and logedin
    const data = { ...formData}
    try {
      const responce = await axios.post(
        // `${import.meta.env.DJANGO_SERVER_BASE_URL}/auth/register/`,
        `http://127.0.0.1:8000/auth/register/`,
        data
      );

      if (responce.status === 200) {
        // const { token, user } = responce.data;
        // if (token) {
        //   const authToken = token.token;
        //   const refreshToken = token.refreshToken;
        //   console.log("authToken :", authToken);
        //   console.log("refreshToken :", refreshToken);
        //   updateData({ user, authToken, refreshToken });
        // }
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    //   console.log(error?.response?.data?.error);
      // setError("root.random",{
      //   type:"random",
      //   message:error?.response?.data?.error

      // });
    }
  };
  return (
    <form onSubmit={handleSubmit(submitForm)} action="">
      <div className="mb-6">
        <Field label="FirstName" error={errors.first_name}>
          <input
            {...register("first_name", { required: "First Name Id is required!" })}
            type="text"
            id="first_name"
            name="first_name"
            className={`w-full p-3 bg-[#030317] border
                  // eslint-disable-next-line no-extra-boolean-cast
                  ${
                    !errors.email ? "border-red-500" : ""
                  } border-white/20 rounded-md focus:outline-none focus:border-indigo-500`}
          />
        </Field>
      </div>
      <div className="mb-6">
        <Field label="Last Name" error={errors.last_name}>
          <input
            {...register("last_name", { required: "Last Name Id is required!" })}
            type="text"
            id="last_name"
            name="last_name"
            className={`w-full p-3 bg-[#030317] border
                  // eslint-disable-next-line no-extra-boolean-cast
                  ${
                    !errors.email ? "border-red-500" : ""
                  } border-white/20 rounded-md focus:outline-none focus:border-indigo-500`}
          />
        </Field>
      </div>
      <div className="mb-6">
        <Field label="Email" error={errors.email}>
          <input
            {...register("email", { required: "Email Id is required!" })}
            type="email"
            id="email"
            name="email"
            className={`w-full p-3 bg-[#030317] border
                  // eslint-disable-next-line no-extra-boolean-cast
                  ${
                    !errors.email ? "border-red-500" : ""
                  } border-white/20 rounded-md focus:outline-none focus:border-indigo-500`}
          />
        </Field>
      </div>
      <div className="mb-6">
        <Field label="Confirm Password" error={errors.confirm_password}>
          <input
            {...register("confirm_password", {
              required: "Password Id is required!",
              minLength: {
                value: 8,
                message: "Your password must be at least 8 characters!",
              },
            })}
            type="password"
            id="confirm_password"
            name="confirm_password"
            className={`w-full p-3 bg-[#030317] border
                  // eslint-disable-next-line no-extra-boolean-cast
                  ${
                    !errors.confirm_password ? "border-red-500" : ""
                  } border-white/20 rounded-md focus:outline-none focus:border-indigo-500`}
          />
        </Field>
      </div>
      <div className="mb-6">
        <Field label="Password" error={errors.password}>
          <input
            {...register("password", {
              required: "Password Id is required!",
              minLength: {
                value: 8,
                message: "Your password must be at least 8 characters!",
              },
            })}
            type="password"
            id="password"
            name="password"
            className={`w-full p-3 bg-[#030317] border
                  // eslint-disable-next-line no-extra-boolean-cast
                  ${
                    !errors.password ? "border-red-500" : ""
                  } border-white/20 rounded-md focus:outline-none focus:border-indigo-500`}
          />
        </Field>
      </div>
      <p className="font-bold text-red-500">{errors?.root?.random?.message}</p>
      <div className="mb-6">
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700 transition-all duration-200"
        >
          Register
        </button>
      </div>
      <p className="text-center">
        Do not have an account?{" "}
        <Link to="/Login" className="text-indigo-600 hover:underline">
          Login
        </Link>
      </p>
    </form>
  );
}
