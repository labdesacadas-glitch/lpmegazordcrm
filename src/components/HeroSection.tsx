"use client";
import React from "react";
import { WhatsappCtaButton } from "./WhatsappCtaButton";
import { Zap, Repeat, DollarSign } from "lucide-react"; // Usando Repeat
import { HeroVisualMockup } from "./HeroVisualMockup";

export const HeroSection: React.FC = () => {
  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center py-20 text-center bg-background relative overflow-hidden">
      {/* Background Gradient Animado e Grid Tech */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {/* Gradiente Animado (Mais sutil) */}
        <div className="w-full h-full bg-gradient-to-r from-blue-900 via-purple-900 to-red-900 bg-[length:400%_400%] animate-gradient-shift"></div>
        {/* Grid Tech Sutil */}
        <div className="absolute inset-0 bg-[url('/public/placeholder.svg')] opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-4xl">
        
        {/* Logo Centralizado e Proeminente */}
        <img
          src="/assets/megazord_crm_sem_fundo.png"
          alt="MegazordCRM Logo"
          className="h-24 w-auto mx-auto mb-8 sm:h-32"
        />

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-500">
          Pare de perder leads. Deixe a IA qualificar, agendar e vender por você, 24/7.
        </h1>
        
        <p className="text-xl sm:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto font-medium">
          O CRM com IA que faz qualificação consultiva, evita o vácuo, agenda e movimenta seu funil **sozinho**. Chega de perder leads por inércia.
        </p>

        {/* CTA Melhorado */}
        <WhatsappCtaButton className="mb-12">
          <Zap className="mr-2 h-5 w-5" />
          Quero Ver a IA em Ação
        </WhatsappCtaButton>

        {/* Prova Social Imediata (Trust Badges) */}
        <div className="flex flex-wrap justify-center gap-4 mt-4 mb-16">
          <div className="flex items-center text-gray-400 text-sm bg-gray-900/50 backdrop-blur-sm p-2 rounded-lg border border-gray-700">
            <DollarSign className="h-4 w-4 text-green-500 mr-2" />
            Economize 1 SDR/mês (IA trabalha por R$ 9,90/dia)
          </div>
          <div className="flex items-center text-gray-400 text-sm bg-gray-900/50 backdrop-blur-sm p-2 rounded-lg border border-gray-700">
            <Repeat className="h-4 w-4 text-blue-500 mr-2" />
            Sistema Anti Vácuo (Nenhum lead fica para trás)
          </div>
        </div>
        
        {/* Mockup Visual como elemento de suporte centralizado */}
        <div className="max-w-3xl mx-auto">
          <HeroVisualMockup />
        </div>
      </div>
    </section>
  );
};