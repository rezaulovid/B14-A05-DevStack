import logo from "../assets/logo-text.png";

const Nav = () => {
  return (
    <nav className="border-b border-sky-400 bg-white">
      <div className="container mx-auto flex h-17.5 items-center justify-between px-6">

        <img
          src={logo}
          alt="DevStack"
          className="w-27.5"
        />

        <ul className="hidden items-center gap-7 text-sm text-slate-600 md:flex">
          <li className="text-pink-500">Home</li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <div className="flex items-center gap-2">
          <button className="btn btn-ghost">
            Sign In
          </button>

          <button className="rounded-full bg-pink-600 px-6 py-2 text-sm font-medium text-white hover:bg-pink-700">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Nav;