import { useState, useEffect } from 'react';

import Navbar from '../components/Navbar';

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function handleClick() {
    setToggle((prevToggle) => !prevToggle);
  }

  return (
    <>
      <header className={offset >= 30 ? 'on-scroll' : null}>
        {!toggle ? (
          <div className="logo">
            <a href="#home">
              <p>michał wierzgoń</p>
            </a>
          </div>
        ) : null}
        <button
          onClick={handleClick}
          className="nav-toggle"
          aria-label="toggle navigation"
        >
          {!toggle ? (
            <span className="hamburger"></span>
          ) : (
            <span className="close"></span>
          )}
        </button>
        <Navbar navToggled={!toggle ? 'nav' : 'nav-open'} />
      </header>
    </>
  );
}
