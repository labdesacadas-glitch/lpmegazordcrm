"use client";
import React from "react";
import { WhatsappCtaButton } from "./WhatsappCtaButton";
import { MessageCircle, Calendar, TrendingUp } from "lucide-react";

export const FutureVisionSection: React.FC = () => {
  const steps = [
    { icon: MessageCircle, text: "Um lead chega pelo WhatsApp às 22h de sábado." },
    { icon: MessageCircle, text: "A IA responde com linguagem humanizada." },
    { icon: TrendingUp, text: "Qualifica com perguntas consultivas." },
    { icon: Calendar, text: "Agenda uma reunião/consulta pra segunda." },
    { icon: TrendingUp, text: "Move o lead automaticamente no seu funil." },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold mb-12 text-white">
          🚀 Imagine isso: Sua Máquina de Vendas Imparável
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center text-left bg-gray-900 p-4 rounded-lg shadow-xl border border-gray-800 transition-all duration-300 hover:border-blue-600">
                <div className="p-3 rounded-full bg-blue-600/20 mr-4">
                  <step.icon className="h-6 w-6 text-blue-400" />
                </div>
                <p className="text-lg text-gray-200 font-medium">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
          
          <p className="mt-10 text-xl text-gray-300 font-semibold">
            📣 E você acorda na segunda com uma nova reunião/consulta marcada, lead quente no CRM, e lembretes programados.
          </p>
          
          <p className="mt-4 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
            Isso não é futuro. Isso é o MegazordCRM operando sua máquina de vendas enquanto você dorme.
          </p>
        </div>

        <WhatsappCtaButton className="mt-12">
          Agendar Demonstração Grátis
        </WhatsappCtaButton>
      </div>
    </section>
  );
};