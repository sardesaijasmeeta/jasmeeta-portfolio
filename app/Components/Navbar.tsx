export default function Navbar() {
  return (
    <>
      <nav className="relative lg:flex hidden  justify-center gap-10 px-10 py-6 text-[18px] text-white/80">
        <div className="flex gap-10">
          <a href="#Home" className="hover:text-white cursor-pointer">HOME</a>
          <a href="#About" className="hover:text-white cursor-poanter">ABOUT</a>
        </div>
        <div className="flex gap-10">
          <a href="#Work" className="hover:text-white cursor-pointer">WORK</a>
          <a href="#Contact" className="hover:text-white cursor-pointer">CONTACT</a>
        </div>
      </nav>
         <nav
      className="
        flex justify-center items-center
        lg:hidden
        gap-6
        px-4 py-4
        text-sm sm:text-base
        font-medium
        text-white/80
      "
    >
      <a href="#Home" className="hover:text-white transition">Home</a>
      <a href="#About" className="hover:text-white transition">About</a>
      <a href="#Work" className="hover:text-white transition">Work</a>
      <a href="#Contact" className="hover:text-white transition">Contact</a>
    </nav>
    </>
  );
}
