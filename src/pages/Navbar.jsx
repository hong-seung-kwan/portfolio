import React from 'react'

const Navbar = () => {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // 네브바 높이만큼 보정
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold tracking-tight text-gray-800">
          홍승관
        </h1>

        <div className="flex gap-5 text-gray-700">
          <button onClick={() => scrollToSection("about")} className="hover:text-black">
            소개
          </button>
          <button onClick={() => scrollToSection("projects")} className="hover:text-black">
            프로젝트
          </button>
          <a
            href="https://github.com/hong-seung-kwan"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-300 px-3 py-1.5 rounded-full hover:bg-gray-100 transition"
          >
            Github
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar