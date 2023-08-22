import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CgSmileSad } from "react-icons/cg";
import { BsInfoCircle } from "react-icons/bs";
import { RiEmotionHappyLine } from "react-icons/ri";
import { ImWarning } from "react-icons/im";
import { IoCloseOutline } from "react-icons/io5";
import { clearNotife, notifeColors } from "@/redux/ducks/layoutSlice";

export default function Notife() {
  const dispatch = useDispatch();
  const { isTriggerd, message, color } = useSelector(
    (state) => state.layout.notife
  );

  useEffect(() => {
    if (isTriggerd) {
      const timer1 = setTimeout(() => {
        dispatch(clearNotife());
      }, 4000);

      return () => {
        clearTimeout(timer1);
      };
    }
  }, [isTriggerd]);

  return (
    <>
      {isTriggerd && (
        <div
          className={`z-[999999999999999] transition-all duration-[500ms] ${
            isTriggerd ? "opacity-100" : "opacity-0"
          }
        } fixed text-sm top-1 right-1 w-max max-w-[90vw] flex items-center gap-x-2 rounded-xl py-8 px-8 ${color} text-white`}
        >
          <button
            onClick={() => {
              dispatch(clearNotife());
            }}
            className="absolute top-2 left-2"
          >
            {" "}
            <IoCloseOutline className="w-5 h-5" />
          </button>
          <div>
            {color === notifeColors.warning ? (
              <ImWarning className="w-5 h-5" />
            ) : color === notifeColors.success ? (
              <RiEmotionHappyLine className="w-5 h-5" />
            ) : color === notifeColors.info ? (
              <BsInfoCircle className="w-5 h-5" />
            ) : (
              <CgSmileSad className="w-5 h-5" />
            )}
          </div>
          <div>{message}</div>
          <div className="absolute bottom-2 left-8 right-8 h-1 rounded-3xl bg-[#ffffff53]">
            <div
              className={`h-full rounded-3xl ${
                isTriggerd && "bars"
              } bg-[#ffffff]`}
            ></div>
          </div>
          <style jsx>{`
            .success {
              background-color: #3e9187;
            }
            .danger {
              background-color: #ff5050;
            }
            .error {
              background-color: #ff5050;
            }
            .warning {
              background-color: #fbb54a;
            }
            .info {
              background-color: #4ba6e1;
            }

            .bars {
              width: 100%;
              animation-name: progress;
              animation-duration: 4s;
              animation-timing-function: linear;
            }

            @keyframes progress {
              0% {
                width: 0%;
              }
              100% {
                width: 100%;
              }
            }
          `}</style>
        </div>
      )}
    </>
  );
}
