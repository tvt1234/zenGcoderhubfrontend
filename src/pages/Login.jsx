const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <form className="shadow-xl p-10 rounded-xl w-96">
        <h2 className="text-3xl font-bold mb-6">
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="border p-3 w-full mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-3 w-full mb-4"
        />

        <button className="bg-blue-600 text-white w-full py-3 rounded">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;