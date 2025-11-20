"use client";
import React from "react";
import { WhatsappCtaButton } from "./WhatsappCtaButton";
import { Check, Zap, ShieldCheck } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface Plan {
  name: string;
  monthlyPrice: string;
  features: string[];
  isRecommended: boolean;
}

const plans: Plan[] = [
  {
    name: "Megazord com Aceleração Comercial Individual",
    monthlyPrice: "R$ 1.700",
    features: [
      "Tudo do Plano Megazord",
      "Aceleração Comercial Individual:",
      "2 Encontros de 1,5h por mês",
      "Grupo Exclusivo no WhatsApp",
      "Mentoria em Grupo (Central Megazord)",
    ],
    isRecommended: false,
  },
  {
    name: "Plano Megazord (Recomendado)",
    monthlyPrice: "R$ 297",
    features: [
      "IA SDR Sênior™",
      "Pipeline Vivo™",
      "Mentoria em Grupo (Central Megazord)",
      "Biblioteca de Copy",
      "Área de Membros",
      "Dashboard Completo",
      "Prospecção Automática",
      "Integração com API e Webhooks",
      "E mais...",
    ],
    isRecommended: true,
  },
  {
    name: "Plano Enterprise",
    monthlyPrice: "Sob Consulta",
    features: [
      "Tudo dos demais planos",
      "Aceleração Comercial Avançada",
      "Suporte Dedicado 24/7",
      "Integrações Customizadas",
      "Onboarding VIP",
    ],
    isRecommended: false,
  },
];

export const PricingSection: React.FC = () => {
  return (
    <section className="py-20 bg-background" id="pricing">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold mb-4 text-white">
          💰 Investimento e Planos
        </h2>
        <p className="text-xl text-gray-400 mb-12">
          Escolha o plano que vai transformar sua operação de vendas.
        </p>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`bg-gray-900 text-white border-2 ${
                plan.isRecommended ? "border-blue-600 shadow-2xl shadow-blue-900/50 transform scale-[1.05]" : "border-gray-800"
              } transition-all duration-500`}
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-3xl font-bold flex justify-center items-center text-left">
                  {plan.name}
                  {plan.isRecommended && <Zap className="ml-2 h-6 w-6 text-orange-400 fill-orange-400" />}
                </CardTitle>
                <CardDescription className="text-gray-400">
                  {plan.isRecommended ? "O mais escolhido para escalar rápido." : "Solução completa para alta performance."}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-4xl font-extrabold">
                  {plan.monthlyPrice === "Sob Consulta" ? (
                    <span className="text-2xl text-blue-400">Sob Consulta</span>
                  ) : (
                    <>
                      <span className="text-xl align-top">R$</span>
                      {plan.monthlyPrice.replace('R$ ', '')}
                      <span className="text-xl text-gray-400">/mês</span>
                    </>
                  )}
                </p>
                <ul className="space-y-2 text-left">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start text-gray-300">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <WhatsappCtaButton className="w-full">
                  Ativar Plano Agora
                </WhatsappCtaButton>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Guarantee Section */}
        <div className="mt-16 p-8 bg-gray-900 rounded-xl border border-gray-800 max-w-4xl mx-auto flex items-center justify-center space-x-6">
          <ShieldCheck className="h-12 w-12 text-green-400 flex-shrink-0" />
          <div className="text-left">
            <h3 className="text-2xl font-bold text-blue-400 mb-2">
              🔐 Garantia Megazord:
            </h3>
            <p className="text-xl text-gray-300">
              Se não fizer sentido, você não paga. Sem perguntas. Sem pegadinhas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};