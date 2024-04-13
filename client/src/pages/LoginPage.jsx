import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from 'react';
function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signin, isAuthenticated,  errors: signinErrors } = useAuth();

  const navigate = useNavigate()
  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  useEffect(() => {
    if (isAuthenticated) navigate("/wishes");
  }, [isAuthenticated]);

  return (
    <div className="bg-zinc-800 max-w-md p-10 rounded-md">
      <h1 className="text-2xl font-bold">Login</h1>

      {signinErrors.map((error, i) => (
        <div key={i} className="bg-red-500">
          {error}
        </div>
      ))}
      <form onSubmit={onSubmit}>
        <input
          type="email"
          {...register("email", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="Email"
        />
        {errors.email && <p className="text-red-500">Email is required</p>}
        <input
          type="password"
          {...register("password", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="Password"
        />
        {errors.password && (
          <p className="text-red-500">Password is required</p>
        )}
        <button className="border" type="submit">
          Login
        </button>
      </form>
      <p className="flex gap-x-2 justify-between pt-5">
        Don't have an account?{" "}
        <Link to="/register" className="text-sky-500">
          Sign up
        </Link>
      </p>
    </div>
  );
}

export default LoginPage;
