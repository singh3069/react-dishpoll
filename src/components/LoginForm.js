function LoginForm() {
  return (
    <div className="bg-slate-300 border-2 border-black rounded-md my-6 mx-auto w-1/4 h-96 justify-center flex items-center flex-col gap-6">
      <p className="text-4xl tracking-wider">Login</p>
      <form className="flex flex-col w-10/12 gap-4 items-center">
        <input
          type={"text"}
          className="border w-full border-black rounded-sm"
        />
        <input
          type={"password"}
          className="border w-full border-black rounded-sm"
        />
        <input
          type={"submit"}
          className="border w-1/2  border-black rounded-sm cursor-pointer"
        />
      </form>
    </div>
  );
}

export default LoginForm;
