"use client";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ContractSection from "@/components/ContractSection";
import SocialLinks from "@/components/SocialLinks";
import MemeGallery from "@/components/MemeGallery";
import Footer from "@/components/Footer";
import Tokenomics from "@/components/Tokenomics";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ContractSection />
        <SocialLinks />
        <MemeGallery />
        <Tokenomics />
      </main>
      <Footer />
    </div>
  );
}
