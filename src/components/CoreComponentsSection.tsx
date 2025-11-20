"use client";
import React from "react";
import { WhatsappCtaButton } from "./WhatsappCtaButton";
import { Bot, TrendingUp, BookOpen, Check } from "lucide-react";

interface FeatureItemProps {
  icon: React.ElementType;
  title: string;
  features: string[];
  color: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon: Icon, title, features, color }) => (
  <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-800 hover:border-blue-600 transition-all duration-300">
    <div className={`flex items-center mb-4 text-${color}-400`}>
      <Icon className="h-8 w-8 mr-3" />
      <h3 className="text-2xl font-bold text-white">{title}</h3>
    </div>
    <ul className="space-y-3">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start text-gray-300">
          <Check className={`h-5 w-5 text-${color}-500 mr-2 mt-1 flex-shrink-0`} />
          {feature}
        </li>
      ))}
    </ul>
  </div>
);

export const CoreComponentsSection: React.FC = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold mb-12 text-white">
          🔍 O MegazordCRM é composto por 3 peças conectadas:
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureItem
            icon={Bot}
            title="1. IA SDR Sênior Integrada ao WhatsApp"
            features={[
              "Atendimento consultivo com tom humanizado",
              "Qualificação com perguntas estratégicas",
              "Quebra de objeções durante o chat",
              "Follow-ups automáticos (evita o vácuo)",
              "Agendamento integrado com Google Agenda",
              "Movimentação automática no pipeline",
            ]}
            color="blue"
          />
          <FeatureItem
            icon={TrendingUp}
            title="2. CRM Visual e Inteligente"
            features={[
              "Pipeline Kanban com atualização/movimentação automática",
              "Histórico por lead e tags personalizáveis",
              "Segmentação inteligente",
              "Dashboard com dados em tempo real (tráfego, funil, conversão)",
              "Conecta diretamente com o agente de IA",
            ]}
            color="red"
          />
          <FeatureItem
            icon={BookOpen}
            title="3. Aceleração Comercial com Mentoria e Copy"
            features={[
              "Mentoria em grupo Central Megazord (ao vivo quinzenal)",
              "Área de membros Postou Vendeu com:",
              "Centenas de estruturas de copy validadas",
              "Curso completo de diferenciação e posicionamento",
              "Templates prontos pra ChatGPT",
            ]}
            color="orange"
          />
        </div>

        <WhatsappCtaButton className="mt-16">
          Quero Minha Demonstração
        </WhatsappCtaButton>
      </div>
    </section>
  );
};