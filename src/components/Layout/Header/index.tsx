import { useCallback, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Mobile from "./Mobile";
import SearchComponent from "./Search";

const links: string[] = ["Home", "Shop", "Contact"];

const HeaderComponent = () => {
  const menuRef = useRef(null);

  const handleOpenMenu = useCallback(() => {
    menuRef.current.openMenu();
  }, []);

  return (
    <header className="h-20 flex items-center md:p-0 p-2 justify-between max-w-7xl w-full mx-auto ">
      <Link to="/">
        <svg
          width="94"
          height="28"
          viewBox="0 0 94 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.276 1.976V27H16.346V16.834H5.16V27H0.23V1.976H5.16V12.074H16.346V1.976H21.276ZM34.2502 27.408C32.4369 27.408 30.8955 27.068 29.6262 26.388C28.3795 25.708 27.4275 24.7673 26.7702 23.566C26.1129 22.3647 25.7842 20.982 25.7842 19.418C25.7842 17.922 26.1695 16.5733 26.9402 15.372C27.7109 14.1707 28.7422 13.2187 30.0342 12.516C31.3262 11.7907 32.7655 11.428 34.3522 11.428C36.4829 11.428 38.2282 12.0513 39.5882 13.298C40.9709 14.522 41.8662 16.3013 42.2742 18.636L30.7142 22.308L29.6602 19.724L38.0242 16.902L37.0382 17.344C36.8569 16.7547 36.5282 16.2447 36.0522 15.814C35.5989 15.3607 34.9075 15.134 33.9782 15.134C33.2755 15.134 32.6522 15.304 32.1082 15.644C31.5869 15.9613 31.1789 16.426 30.8842 17.038C30.6122 17.6273 30.4762 18.33 30.4762 19.146C30.4762 20.0753 30.6462 20.8573 30.9862 21.492C31.3262 22.104 31.7909 22.5687 32.3802 22.886C32.9695 23.2033 33.6269 23.362 34.3522 23.362C34.8735 23.362 35.3722 23.2713 35.8482 23.09C36.3469 22.9087 36.8342 22.6707 37.3102 22.376L39.4182 25.912C38.6249 26.3653 37.7635 26.728 36.8342 27C35.9275 27.272 35.0662 27.408 34.2502 27.408ZM45.7332 27V0.173999H50.4932V27H45.7332ZM54.2672 16.902L60.9992 27H55.4572L51.1392 19.622L54.2672 16.902ZM49.0652 22.886L48.5892 18.364L57.5652 11.768L60.4552 14.318L49.0652 22.886ZM65.6877 5.614H70.4477V12.074H74.0517V15.78H70.4477V27H65.6877V15.78H63.3757V12.074H65.6877V5.614ZM76.5186 19.384C76.5186 17.8653 76.8699 16.5053 77.5726 15.304C78.2979 14.1027 79.3066 13.162 80.5986 12.482C81.8906 11.7793 83.3752 11.428 85.0526 11.428C86.7526 11.428 88.2259 11.7793 89.4726 12.482C90.7192 13.162 91.6712 14.1027 92.3286 15.304C93.0086 16.5053 93.3486 17.8653 93.3486 19.384C93.3486 20.9027 93.0086 22.274 92.3286 23.498C91.6712 24.6993 90.7192 25.6513 89.4726 26.354C88.2259 27.0567 86.7299 27.408 84.9846 27.408C83.3526 27.408 81.8906 27.0907 80.5986 26.456C79.3292 25.8213 78.3319 24.9033 77.6066 23.702C76.8812 22.5007 76.5186 21.0613 76.5186 19.384ZM81.3126 19.418C81.3126 20.1887 81.4712 20.8913 81.7886 21.526C82.1059 22.138 82.5366 22.6253 83.0806 22.988C83.6246 23.3507 84.2366 23.532 84.9166 23.532C85.6646 23.532 86.3106 23.3507 86.8546 22.988C87.3986 22.6253 87.8179 22.138 88.1126 21.526C88.4072 20.8913 88.5546 20.1887 88.5546 19.418C88.5546 18.6247 88.4072 17.922 88.1126 17.31C87.8179 16.698 87.3986 16.2107 86.8546 15.848C86.3106 15.4853 85.6646 15.304 84.9166 15.304C84.2366 15.304 83.6246 15.4853 83.0806 15.848C82.5366 16.2107 82.1059 16.698 81.7886 17.31C81.4712 17.922 81.3126 18.6247 81.3126 19.418Z"
            fill="#0D0E43"
          />
        </svg>
      </Link>

      <div className="space-y-2 block lg:hidden" onClick={handleOpenMenu}>
        <span className="block h-0.5 w-8 animate-pulse bg-black"></span>
        <span className="block h-0.5 w-8 animate-pulse bg-black"></span>
        <span className="block h-0.5 w-8 animate-pulse bg-black"></span>
      </div>

      <Mobile ref={menuRef} menus={links} />

      <nav className="lg:block hidden">
        {links.map((link) => {
          return (
            <Link
              to={link}
              className="mr-6 font-lato text-base hover:text-pink"
            >
              {link}
            </Link>
          );
        })}
      </nav>

      {/* <SearchComponent /> */}
    </header>
  );
};

export default HeaderComponent;
