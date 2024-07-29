import './Navbar.css';
import { MenuLinks } from '../../data/index';
import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  const navItems = MenuLinks.map((data) => ({
    name: data.name,
    link: data.link,
    icon: null, // Adjust this if you have icons to add
  }));

  const handleNavigation = (link) => {
    navigate(link);
  };

  useEffect(() => {
    console.log("FloatingNav visibility:", visible);
  }, [visible]);

  return (
    <>
      <div className='mt-5 bg-black bg-opacity-70 dark:text-white duration-200 z-40 sticky top-0 mx-auto border-b-2 border-white w-[40%] rounded-3xl'>
        <div className='flex items-center justify-around'>
          <div className='hidden lg:block'>
            <ul className='flex items-center justify-center gap-4'>
              {MenuLinks.map((data, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavigation(data.link)}
                    className='px-4 font-semibold text-white hover:text-primary duration-200'
                  >
                    {data.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {visible && (
          <motion.div
            initial={{
              opacity: 1,
              y: -100,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -100,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
            }}
            className={
              "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-10 py-5 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-4"
            }
            style={{
              backdropFilter: "blur(16px) saturate(180%)",
              backgroundColor: "rgba(17, 25, 40, 0.75)",
              borderRadius: "12px",
              border: "1px solid rgba(255, 255, 255, 0.125)",
            }}
          >
            {navItems.map((navItem, idx) => (
              <button
                key={`link=${idx}`}
                onClick={() => handleNavigation(navItem.link)}
                className={
                  "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
                }
              >
                <span className="block sm:hidden">{navItem.icon}</span>
                <span className="text-sm !cursor-pointer">{navItem.name}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
