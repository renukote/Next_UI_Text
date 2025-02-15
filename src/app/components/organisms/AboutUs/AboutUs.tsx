"use client";

import { MouseEvent, useState } from "react";
import { Heading } from "../../atoms/Heading/Heading";
import { Image } from "../../atoms/Image/Image";

type HoverPositionType = {
  x: number;
  y: number;
};

export const AboutUs = () => {
  const [hoverPosition, setHoverPosition] = useState<HoverPositionType | null>(
    null,
  );

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    setHoverPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setHoverPosition(null);
  };

  return (
    <section className="xl:w-2/2 container mx-auto p-4 pt-20 md:w-3/4 lg:w-3/4 xl:pt-10">
      <div className="pt-20">
        <div
          className="relative hidden h-96 w-full overflow-hidden sm:block"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex justify-between">
            <div className="my-auto">
              <Heading
                additionalClassNames="hidden sm:block whitespace-pre"
                tagType="h3"
                text={`About \nus`}
              />
              <p className="whitespace-pre leading-relaxed text-white opacity-70">
                {`Lorem \nLorem`}
              </p>
            </div>

            <p className="my-auto w-1/2 leading-relaxed opacity-70">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          <div
            className="duration-none absolute inset-0 transition-none"
            style={{
              clipPath: hoverPosition
                ? `circle(150px at ${hoverPosition.x}px ${hoverPosition.y}px)`
                : "circle(0px at 50% 50%)",
            }}
          >
            <Image src="/images/hover-image.png" alt="About us" fill />
          </div>
        </div>

        <div className="mb-4 flex w-full flex-col gap-5 pr-4 sm:hidden sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3">
          <Heading text="Lorem Ipsum" tagType="h3" />
          <p className="leading-relaxed opacity-70">Instagram</p>
          <p className="leading-relaxed opacity-70">LinkedIn</p>

          <p className="pt-16 leading-relaxed opacity-70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </section>
  );
};
