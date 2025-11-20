"use client";
import React from "react";
import { Check, Zap } from "lucide-react";
import { WhatsappCtaButton } from "./WhatsappCtaButton";

const items = [
  "Agente IA consultivo no WhatsApp",
  "CRM com movimentação automática",
  "Dashboard de tráfego e conversão",
  "Mentoria em grupo ao vivo",
  "Biblioteca de copy pra GPT",
  "Curso de diferenciação",
  "Templates prontos pra conteúdo e vendas",
  "Scripts prontos pra ChatGPT",
  "Suporte e onboarding",
  "Integração com Google Agenda e Webhooks", // Novo item adicionado
];

export const ValueStackSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-950">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold mb-12 text-white">
          📦 Empilhamento de Valor: Tudo isso incluso
        </h2>

        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-4 text-left">
          {items.map((item, index) => (
            <div key={index} className="flex items-center p-3 bg-gray-800 rounded-lg border border-gray-700">
              <Check className="h-6 w-6 text-green-400 mr-3 flex-shrink-0" />
              <span className="text-lg text-gray-200">{item}</span>
            </div>
          ))}
        </div>

        <WhatsappCtaButton className="mt-12">
          <Zap className="mr-2 h-5 w-5" />
          Ativar Meu Megazord
        </WhatsappCtaButton>
      </div>
    </section>
  );
};