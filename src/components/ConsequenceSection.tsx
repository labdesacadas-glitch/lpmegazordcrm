"use client";
import React from "react";
import { X } from "lucide-react";

const consequences = [
  "Você segue perdendo leads no vácuo",
  "Depende de equipe ou secretária sobrecarregada",
  "Gasta com tráfego que não vira venda",
  "Fica preso em ferramentas que não conversam entre si",
];

export const ConsequenceSection: React.FC = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold mb-10 text-red-500">
          📉 O Custo de Não Agir (Sem Megazord)
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-6">
          {consequences.map((consequence, index) => (
            <div key={index} className="flex items-center justify-center p-4 bg-red-900/30 rounded-lg border border-red-700/50">
              <X className="h-6 w-6 text-red-400 mr-3 flex-shrink-0" />
              <p className="text-xl text-gray-100 font-medium">{consequence}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};