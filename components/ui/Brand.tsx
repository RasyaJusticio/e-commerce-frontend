import React from "react";
import { Oxygen } from "next/font/google";

const oxygen = Oxygen({
  variable: "--font-oxygen",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const Brand = () => {
  return (
    <div
      className={`${oxygen.className} flex items-center justify-center w-fit text-3xl`}
    >
      <p className="text-emerald-400">Jscio</p>
      <p>store</p>
    </div>
  );
};

export default Brand;
