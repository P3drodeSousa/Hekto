import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useState,
} from "react";
import { Link } from "react-router-dom";

type Props = {
  menus: string[];
};

const Mobile = ({ menus }: Props, ref) => {
  const [visible, setVisible] = useState(false);

  const closeMenu = useCallback(() => {
    setVisible(false);
  }, []);

  useImperativeHandle(
    ref,
    () => {
      return { openMenu };
    },
    []
  );

  const openMenu = useCallback(() => {
    setVisible(true);
  }, []);

  if (!visible) return null;

  return (
    <section className="h-screen w-screen bg-white fixed inset-0 z-50 px-16 py-16">
      <div className="absolute top-16 right-16 " onClick={() => closeMenu()}>
        <svg
          className="h-8 w-8 text-black"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </div>
      <div className="flex flex-col items-center justify-evenly h-full">
        {menus.map((link: string) => {
          return (
            <Link to={link} className="mr-6 font-lato text-3xl">
              {link}
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default forwardRef(Mobile);
