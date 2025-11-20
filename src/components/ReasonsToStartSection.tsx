"use client";
import React from "react";
import { CheckCircle } from "lucide-react";

const reasons = [
  "Você não precisa contratar time de pré-vendas.",
  "Você ganha produtividade sem aumentar equipe.",
  "Você transforma tráfego em oportunidade real.",
  "Você escala com estrutura, não com improviso.",
];

export const ReasonsToStartSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-950">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold mb-10 text-white">
          🔢 4 Motivos Pra Começar Agora
        </h2>
        
        <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <div key={index} className="flex items-center bg-gray-800 p-4 rounded-lg shadow-md border-l-4 border-blue-600">
              <CheckCircle className="h-6 w-6 text-blue-400 mr-3 flex-shrink-0" />
              <p className="text-lg text-gray-200 text-left">{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};