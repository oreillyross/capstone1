import React from "react";
import { useRef } from "react";
import { RemoveScroll } from "react-remove-scroll";

export const ModalWrapper = ({
  children,
  isOpen,
  onCloseClick,
}: {
  children: React.ReactNode;
  isOpen: boolean;
  onCloseClick: React.MouseEventHandler<HTMLElement>;
}) => {
  const divBackgroundRef = useRef<null | HTMLDivElement>(null);

  if (!isOpen) return null;

  return (
    <>
      <RemoveScroll>
        <div
          ref={divBackgroundRef}
          className="fixed top-0 left-0 w-full h-full bg-black/30 backdrop-blur-sm flex justify-end"
          onClick={(e) => {
            if (e.target == divBackgroundRef.current) {
              onCloseClick(e);
            }
          }}
        >
          <button onClick={onCloseClick} className="absolute top-0 right-0 p-2">
            <i className="fa-regular fa-circle-xmark text-4xl text-emerald-400" />
          </button>
          {children}
        </div>
      </RemoveScroll>
    </>
  );
};
