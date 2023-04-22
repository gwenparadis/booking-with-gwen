import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="mt-4 grow flex item-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4"> Login</h1>
        <form className="max-w-md mx-auto">
          <input
            className="border rounded-full"
            type="email"
            placeholder="your@email.com"
          ></input>
          <input type="password" placeholder="password"></input>
          <button className="primary" type="login">
            Login
          </button>
          <div className="text-center py-2 text-gray-500">
            Dont have an account yet?{" "}
            <Link className="underline text-black" to={"/register"}>
              Register now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
