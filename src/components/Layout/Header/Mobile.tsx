import { forwardRef, useCallback, useImperativeHandle, useState } from "react";

type Props = {};

// TODO ADD MENU ITEMS

const Mobile = ({ menus }, ref) => {
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
    <section className="h-screen w-screen bg-white fixed inset-0  flex flex-col items-center justify-between z-50">
      <div
        className="absolute top-0 right-0 px-8 py-8"
        onClick={() => closeMenu()}
      >
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
      <h1>Mobile Menu</h1>
    </section>
  );
};

export default forwardRef(Mobile);
