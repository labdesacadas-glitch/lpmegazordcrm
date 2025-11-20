"use client";
import React from "react";
import { WhatsappCtaButton } from "./WhatsappCtaButton";

export const LandingHeader: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-background/90 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <img
            src="/assets/megazord_crm_sem_fundo.png"
            alt="MegazordCRM Logo"
            className="h-8 w-auto"
          />
        </div>
        <WhatsappCtaButton className="hidden md:flex">
          Quero Ver a IA em Ação
        </WhatsappCtaButton>
      </div>
    </header>
  );
};