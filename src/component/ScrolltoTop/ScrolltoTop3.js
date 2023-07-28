import React, { useEffect, useState } from 'react';
import './ScrolltoTop.scss'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 20) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          id="btn-back-to-top"
          style={{
            position: 'fixed',
            bottom: '3%',
            right: '2%',
            display: 'block',
          }}
          className="btn-floating"
          color="danger"
          size="lg"
        > <img
        src="./image/arrow-blue.svg"
        alt="arrow"
        class="icon-arrowTop"
      ></img>{" "}
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;