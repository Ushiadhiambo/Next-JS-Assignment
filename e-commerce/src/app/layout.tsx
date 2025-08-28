"use client";
import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./sharedcomponents/Navbar/page";
import Footer from "./sharedcomponents/Footer/page";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
    <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}