"use client";
import React from "react";
import Hero from "./Hero/page";
import FlashSales from "./FlashSales/page";
import BrowseByCategories from "./BrowseByCategory/page";
import BestSellingProducts from "./BestSellingProducts/page";
import ExploreOurProducts from "./ExploreOurProducts/page";
import NewArrival from "./NewArrival/page";

export default function Home() {
  return (
    <>
      <Hero />
  <FlashSales />
      <BrowseByCategories />
      <BestSellingProducts />
      <ExploreOurProducts />
      <NewArrival />
    </>
  );
}
