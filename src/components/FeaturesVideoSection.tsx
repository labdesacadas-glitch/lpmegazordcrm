"use client";
import React from "react";
import { VideoFeatureCard } from "./VideoFeatureCard";
import { Brain, Wrench, Scale, Repeat, BarChart, FlaskConical, Lock, LayoutDashboard, Target, Link, Settings, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Atendimento inteligente com IA que pensa como SDR sênior",
    copy: "Chega de lead perdido no WhatsApp. Nosso agente Alpha5 responde com empatia, qualifica com estratégia e leva o lead até o agendamento final — sem você encostar. Mesmo às 23h de domingo.",
    videoId: "VoKeTT21GDM",
    color: "text-blue-400",
  },
  {
    icon: Wrench,
    title: "Monte sua IA em minutos — sem código, sem complicação",
    copy: "Você escolhe a personalidade, escreve o objetivo, define os limites... e pronto. Seu agente já está treinado pra vender do seu jeito, no seu tom de voz, com suas regras.",
    videoId: "rOCTZvdaen0",
    color: "text-orange-400",
  },
  {
    icon: Scale,
    title: "Distribuição Automática de Leads",
    copy: "Defina as regras e o sistema envia o lead automaticamente pro agente, funil ou atendimento ideal. Sem bagunça. Sem planilha. Sem lead esquecido.",
    videoId: "hpUntHjeAxk",
    color: "text-green-400",
  },
  {
    icon: Repeat,
    title: "O Megazord não aceita vácuo (Follow-Ups Automáticos)",
    copy: "Se o lead some, a IA continua o papo. Faz follow-up com inteligência, sem parecer robô, e leva o contato de volta pro fluxo da venda.",
    videoId: "7xwisXVph0E",
    color: "text-red-400",
  },
  {
    icon: TrendingUp,
    title: "Seu funil anda sozinho (Movimentação Automática de Leads)",
    copy: "O lead responde → a IA entende → o sistema move ele no funil. Sem vendedor arrastando post-it, sem lead travado na entrada.",
    videoId: "Cm29VDeSL2s",
    color: "text-purple-400",
  },
  {
    icon: FlaskConical,
    title: "Teste de Agente de IA antes de colocar em campo",
    copy: "Converse com seu agente, teste respostas, veja se ele tá pronto. Ajuste tudo antes de liberar pra rodar com leads reais.",
    videoId: "1_XNYE7cbjo",
    color: "text-yellow-400",
  },
  {
    icon: Lock,
    title: "Controle de Acesso de Usuários",
    copy: "Controle quem acessa o quê. Organize sua operação com perfis e permissões diferentes pra cada membro da equipe.",
    videoId: "DDXsJygrTDw",
    color: "text-pink-400",
  },
  {
    icon: LayoutDashboard,
    title: "CRM Kanban Visual, prático e sem confusão",
    copy: "Veja seus leads como um pipeline real. Com movimentação automática, filtro por estágio e visão clara do que precisa ser feito hoje.",
    videoId: "rkFVp5933fY",
    color: "text-cyan-400",
  },
  {
    icon: Target,
    title: "Geração e Prospecção Automática de Leads",
    copy: "Pesquise leads segmentados por cidade e nicho. Já dispara mensagens direto no WhatsApp, sem precisar sair do sistema. É seu hunter digital.",
    videoId: "4KICqg7W9GI",
    color: "text-indigo-400",
  },
  {
    icon: Link,
    title: "Conexão com WhatsApp em minutos",
    copy: "Use chip ou API oficial. O importante é que o sistema já conecta e começa a operar em tempo real, direto no seu número.",
    videoId: "l6cYOh3aF2E",
    color: "text-lime-400",
  },
  {
    icon: Settings,
    title: "Configurações Avançadas: Você no controle total da operação",
    copy: "Ajuste horários, regras, respostas, setores, automações e muito mais. É o cockpit da sua máquina comercial.",
    videoId: "g9KVNDladdI",
    color: "text-teal-400",
  },
  {
    icon: BarChart,
    title: "Dashboard do Megazord: Decida com dados reais",
    copy: "Veja o que tá funcionando. Quanto do tráfego virou reunião. Quantos leads pararam. Onde você precisa agir.",
    videoId: "Ld2br14YcWM",
    color: "text-fuchsia-400",
  },
];

export const FeaturesVideoSection: React.FC = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Tech Sutil */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-color-gray-800)_0%,_transparent_70%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-extrabold mb-4 text-center text-white">
          🎬 O que o MegazordCRM faz na prática
        </h2>
        <p className="text-xl text-gray-400 mb-12 text-center max-w-3xl mx-auto">
          Você já entendeu que o MegazordCRM é muito mais do que um CRM, né? Mas agora é hora de ver o que ele faz, ponto a ponto, pra transformar seu atendimento e seu comercial numa máquina imparável de vendas.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <VideoFeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              copy={feature.copy}
              videoId={feature.videoId}
              color={feature.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};