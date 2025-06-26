import { EvervaultCard } from "./evervault-card";

export default function LoginSignUpPage() {
  return (
    <div className="min-h-screen h-screen flex flex-col md:flex-row">
      {/* LEFT PANEL */}
      <div className="md:w-1/2 w-full flex flex-col justify-center items-center bg-white p-8 md:p-12">
        <h2 className="text-3xl font-semibold mb-6">Welcome back,</h2>

        <form className="w-full max-w-sm space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
          <a href="#" className="text-sm text-right text-blue-500 block">
            Forgot password?
          </a>

          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-white py-2 rounded transition"
          >
            SIGN IN
          </button>

          <button className="w-full border border-gray-300 py-2 rounded flex items-center justify-center gap-2 hover:bg-gray-100 transition">
            <img
              src="https://www.svgrepo.com/show/157810/facebook.svg"
              alt="fb"
              className="h-5"
            />
            Connect with Facebook
          </button>
        </form>
      </div>

      {/* RIGHT PANEL */}
      <div className="md:w-1/2 w-full h-96 md:h-auto relative flex justify-center items-center bg-gray-900 overflow-hidden">
        <div className="w-[80%] h-[80%] md:h-[90%]">
          <EvervaultCard text="Trimurti" className="w-full h-full" />
        </div>

        <div className="absolute bottom-4 md:bottom-8 right-4 md:right-8 z-20 text-right px-2 md:px-0">
          <h3 className="text-white text-lg md:text-xl font-semibold">New here?</h3>
          <p className="text-white text-xs md:text-sm mt-1 max-w-xs">
            Sign up and discover great amount of new opportunities!
          </p>
          <button className="mt-3 md:mt-4 px-4 md:px-6 py-2 bg-white text-gray-900 rounded shadow hover:bg-gray-100 text-sm md:text-base">
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  );
}
