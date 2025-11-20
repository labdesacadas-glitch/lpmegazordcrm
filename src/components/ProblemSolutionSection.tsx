"use client";
import React from "react";
import { Brain, Flame } from "lucide-react";
import { ProblemCard } from "./ProblemCard";

const problems = [
  {
    problem: "Perdendo leads fora do horário comercial",
    solution: "IA SDR 24/7: Atendimento consultivo e qualificação imediata.",
  },
  {
    problem: "Pagando caro por tráfego, mas sem retorno real",
    solution: "Pipeline Vivo™: Transforma tráfego em oportunidades reais e agendadas.",
  },
  {
    problem: "Cansado de depender de secretária sobrecarregada",
    solution: "Automação Total: A IA faz o trabalho repetitivo, liberando seu time.",
  },
  {
    problem: "Sem tempo nem braço pra qualificar leads no WhatsApp",
    solution: "Agente IA Sênior: Qualifica com perguntas estratégicas e quebra objeções.",
  },
  {
    problem: "Sem controle do seu funil ou dos dados do comercial",
    solution: "Dashboard Completo: Visão em tempo real de tráfego, funil e conversão.",
  },
];

const attempts = [
  {
    problem: "Usar um chatbot de 99 reais que mais atrapalhou que ajudou",
    solution: "IA Humanizada: Linguagem natural que realmente engaja e agenda.",
  },
  {
    problem: "Contratar pré-vendas (SDR) e pagou caro sem resultado",
    solution: "SDR Virtual: Custo fixo baixo com performance de SDR Sênior.",
  },
  {
    problem: "Usar CRM técnico demais que ninguém alimentava",
    solution: "CRM Inteligente: Movimentação automática no funil pela IA.",
  },
  {
    problem: "Criar automação no WhatsApp, mas viveu um caos",
    solution: "Sistema Integrado: WhatsApp, CRM e Agenda em um fluxo coeso e sem falhas.",
  },
  {
    problem: "Comprar várias ferramentas (CRM, Chatbot, Agenda) que não se integram",
    solution: "Ecossistema Unificado: MegazordCRM é a única ferramenta que você precisa, com tudo nativamente conectado.",
  },
];

export const ProblemSolutionSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-950 relative overflow-hidden">
      {/* Subtle Background Effect */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle_at_top_left,_var(--tw-color-blue-900)_0%,_transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Column 1: Problems */}
          <div>
            <h2 className="text-3xl font-bold mb-8 flex items-center text-blue-400">
              <Brain className="h-8 w-8 mr-3 text-blue-500" />
              Se você está nesse momento...
            </h2>
            <div className="space-y-6">
              {problems.map((item, index) => (
                <ProblemCard
                  key={index}
                  problem={item.problem}
                  solution={item.solution}
                  type="problem"
                />
              ))}
            </div>
          </div>

          {/* Column 2: Failed Attempts */}
          <div>
            <h2 className="text-3xl font-bold mb-8 flex items-center text-red-400">
              <Flame className="h-8 w-8 mr-3 text-red-500" />
              Se você já tentou, mas...
            </h2>
            <div className="space-y-6">
              {attempts.map((item, index) => (
                <ProblemCard
                  key={index}
                  problem={item.problem}
                  solution={item.solution}
                  type="attempt"
                />
              ))}
            </div>
          </div>
        </div>
        
        <p className="mt-16 text-2xl text-center text-gray-200 max-w-5xl mx-auto border-t border-gray-800 pt-10 font-semibold">
          Agora você vai descobrir por que o MegazordCRM é diferente de tudo que você já testou.
          <br />
          Porque o MegazordCRM resolve tudo isso em um único sistema — de forma inteligente, humanizada e escalável.
        </p>
      </div>
    </section>
  );
};