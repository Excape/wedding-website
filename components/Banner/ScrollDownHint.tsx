import React from "react";

const ScrollDownHint = () => {
  return (
    <div className="container">
      <svg className="arrows">
        <path className="a1" d="M0 0 L30 32 L60 0"></path>
        <path className="a2" d="M0 20 L30 52 L60 20"></path>
        <path className="a3" d="M0 40 L30 72 L60 40"></path>
      </svg>

      <style jsx>{`
        .arrows {
          width: 60px;
          height: 72px;
          position: absolute;
          left: 50%;
          margin-left: -30px;
          bottom: 50px;
        }

        .arrows path {
          stroke: rgba(147, 193, 31);
          fill: transparent;
          stroke-width: 3px;
          animation: arrow 4s infinite;
           {
            /* -webkit-animation: arrow 2s infinite; */
          }
        }

        @keyframes arrow {
          0% {
            opacity: 0;
          }
          40% {
            opacity: 1;
          }
          80% {
            opacity: 0;
          }
          100% {
            opacity: 0;
          }
        }

        .arrows path.a1 {
          animation-delay: -2s;
        }

        .arrows path.a2 {
          animation-delay: -1s;
        }
      `}</style>
    </div>
  );
};

export default ScrollDownHint;
