"use client";
import React from "react";
import { WhatsappCtaButton } from "./WhatsappCtaButton";
import { Zap } from "lucide-react";

export const LandingFooter: React.FC = () => {
  return (
    <footer className="bg-gray-900 py-16 border-t border-gray-800">
      <div className="container mx-auto px-4 text-center">
        {/* Strong Closing */}
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-8 text-white max-w-4xl mx-auto">
          Você pode continuar com uma operação solta, sem controle, perdendo vendas...
          <br />
          Ou pode entrar agora no MegazordCRM e pilotar sua máquina de vendas automatizada, inteligente e escalável.
        </h2>

        <WhatsappCtaButton className="mb-12">
          <Zap className="mr-2 h-5 w-5" />
          Agendar Demonstração
        </WhatsappCtaButton>

        {/* Copyright and Links */}
        <div className="mt-10 pt-6 border-t border-gray-800">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} MegazordCRM. Todos os direitos reservados.
          </p>
          <p className="text-xs text-gray-600 mt-1">
            Desenvolvido com foco em alta performance e conversão.
          </p>
        </div>
      </div>
    </footer>
  );
};