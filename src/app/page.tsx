"use client";
import FaqSection from "@/components/FaqSection";
import HomePage from "../components/HomePage";
import HeroSection from "@/components/HeroSection";
import OffersBoxs from "@/components/OffersBoxs";
import HomeEnd from "@/components/HomeEnd";
import GridBoxes from "@/components/GridBoxes";
import { motion } from "motion/react";
import New from "@/components/New";
import WeWorkFast from "@/components/WeWorkFast";
import VideoPage from "@/components/VideoPage";

export default function Home() {
  return (
    <>
      {/* <motion.div className="relative w-full min-h-screen flex justify-center items-center gap-4 p-8 flex-col overflow-hidden"> */}
      <motion.div
        className="relative w-full min-h-screen flex justify-center items-center gap-4 p-8 flex-col overflow-hidden"
        initial={{ opacity: 0 }} // Initial state
        animate={{ opacity: 1 }} // Animation state
        transition={{ duration: 1 }} // Transition duration
      >
        {/* Video background */}
        <video
          src="/home.mp4"
          autoPlay
          loop
          muted
          controls={false}
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-[-1] blur-[1px]"
        ></video>

        {/* Content */}
        <HomePage />
      </motion.div>
      <VideoPage/>
      <HeroSection />
      <OffersBoxs />
      <GridBoxes />
      <New />
      <WeWorkFast />
      <div className="w-full h-auto flex justify-center items-center py-14">
        <FaqSection />
      </div>
      <HomeEnd />
    </>
  );
}
