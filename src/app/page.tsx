"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { LuArrowUpRight } from "react-icons/lu";

function ExpandedText({
  currentlyActiveCard,
  index,
}: {
  currentlyActiveCard: number;
  index: number;
}) {
  return (
    <div
      className={cn(
        "absolute bottom-8 space-y-3 max-w-[20rem] px-4 lg:pl-18 overflow-hidden transition-all duration-500 ease-in-out",
        currentlyActiveCard === index
          ? "opacity-100"
          : "opacity-100 md:opacity-0"
      )}
    >
      <div className="flex gap-x-1 items-center">
        <CiLocationOn className="text-[#e5ed65] font-extrabold text-2xl" />
        <Link
          href="https://demo2.wpopal.com/spaciaz/project-location/new-york-ny/"
          rel="tag"
          className="text-white font-bold hover:text-[#e5ed65]/90"
        >
          New York, NY
        </Link>
      </div>
      <hr />
      <h4 className="text-white font-bold text-4xl hover:text-[#e5ed65]">
        <a href="https://demo2.wpopal.com/spaciaz/projects/mixed-use-development/">
          Mixed-Use Development
        </a>
      </h4>
      <div className="group hover:bg-[#e5ed65] bg-white rounded-full max-w-fit px-8 py-4">
        <Link
          className="project-button"
          href="https://demo2.wpopal.com/spaciaz/projects/mixed-use-development/"
        >
          <div className="flex items-center gap-x-4 relative min-w-[9.5rem] ">
            <span className="font-bold">Explore Project</span>
            <div className="rounded-full w-12 h-12 bg-[#e5ed65] group-hover:bg-white absolute -right-6 flex justify-center items-center">
              {/* First arrow - moves up-right on hover (45°) */}
              <LuArrowUpRight className="text-2xl font-extrabold transition-all duration-300 group-hover:-translate-y-4 group-hover:translate-x-4 group-hover:opacity-0 opacity-100 absolute" />

              {/* Second arrow - comes in from bottom-left on hover (45° path) */}
              <LuArrowUpRight className="text-2xl font-extrabold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 -translate-x-4 group-hover:translate-y-0 group-hover:translate-x-0" />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

function SingleCard({
  currentlyActiveCard,
  setCurrentlyActiveCard,
  index,
}: {
  currentlyActiveCard: number;
  setCurrentlyActiveCard: Dispatch<SetStateAction<number>>;
  index: number;
}) {
  return (
    <div
      className={cn(
        "relative transition-all duration-500 ease-in-out rounded-3xl h-96 md:h-full",
        currentlyActiveCard === index
          ? "w-full md:w-[37.5%]"
          : "w-full md:w-[12.5%]"
      )}
      onMouseEnter={() => setCurrentlyActiveCard(index)}
    >
      <Image
        alt="alt"
        src="https://demo2.wpopal.com/spaciaz/wp-content/uploads/2025/04/project_13.jpg"
        className="object-cover h-full w-full opacity-50 rounded-3xl"
        fill
      />
      <p
        className={cn(
          "absolute bottom-8 left-1/2 -translate-x-1/2 text-4xl [writing-mode:vertical-rl] rotate-180 text-white font-extrabold transition-all duration-500 ease-in-out max-h-[12rem]",
          currentlyActiveCard === index
            ? "opacity-0"
            : "opacity-0 md:opacity-100"
        )}
      >
        Mixed-use Development
      </p>
      <ExpandedText currentlyActiveCard={currentlyActiveCard} index={index} />
    </div>
  );
}

export default function Home() {
  const [currentlyActiveCard, setCurrentlyActiveCard] = useState<number>(0);

  return (
    <div className="min-h-screen flex justify-center items-center bg-black overflow-hidden px-4">
      <div className="flex flex-col  md:flex-row gap-x-2 gap-y-6 max-w-[1730px] w-full md:h-[40rem] mx-auto my-4">
        <SingleCard
          currentlyActiveCard={currentlyActiveCard}
          setCurrentlyActiveCard={setCurrentlyActiveCard}
          index={0}
        />
        <SingleCard
          currentlyActiveCard={currentlyActiveCard}
          setCurrentlyActiveCard={setCurrentlyActiveCard}
          index={1}
        />
        <SingleCard
          currentlyActiveCard={currentlyActiveCard}
          setCurrentlyActiveCard={setCurrentlyActiveCard}
          index={2}
        />
        <SingleCard
          currentlyActiveCard={currentlyActiveCard}
          setCurrentlyActiveCard={setCurrentlyActiveCard}
          index={3}
        />
        <SingleCard
          currentlyActiveCard={currentlyActiveCard}
          setCurrentlyActiveCard={setCurrentlyActiveCard}
          index={4}
        />
        <SingleCard
          currentlyActiveCard={currentlyActiveCard}
          setCurrentlyActiveCard={setCurrentlyActiveCard}
          index={5}
        />
      </div>
    </div>
  );
}
