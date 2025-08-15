import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import coitonLogo from "./../assets/coiton-big.png";
import { FaCalculator } from "react-icons/fa";

const ScoreCard = () => {
  return (
    <>
      <Navbar />
      <section className="flex flex-col justify-center items-center mt-[8%] gap-28 w-full">
        <article className="bg-gray-700 w-[40%] flex flex-col justify-center items-center py-8 space-y-5 rounded-xl">
          <h1 className="text-5xl font-bold">On-Chain Score Card</h1>
          <p className="text-xl">
            Calculate your on-chain activity score and mint it as a unique NFT
          </p>
          <img src={coitonLogo} alt="logo" />
        </article>
        <article className="bg-gray-700 w-[40%] flex flex-col justify-center items-center py-8 space-y-5 rounded-xl">
          <h2 className="text-2xl font-bold">Enter Your Wallet Address</h2>
          <p>We'll analyze your on-chain activity to calculate your score</p>

          <input
            type="text"
            className="w-[80%] h-12 outline-none border border-gray-300 rounded-lg pl-10 pr-3"
            placeholder="Enter your wallet Address to calculate your on-chain score"
          />
          <button className="w-[80%] flex flex-row items-center justify-center gap-3 cursor-pointer bg-[#E0FFB0] text-black rounded-lg h-12">
            <FaCalculator />
            Calculate My Score
          </button>
        </article>
      </section>
      <Footer />
    </>
  );
};

export default ScoreCard;
