"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Preciso saber programar?",
    answer: "Não. Tudo é plug-and-play, com interface intuitiva. O MegazordCRM foi desenhado para ser usado por qualquer pessoa, sem necessidade de conhecimento técnico.",
  },
  {
    question: "Essa IA responde fora do horário comercial?",
    answer: "Sim. O Agente IA opera 24 horas por dia, 7 dias por semana, inclusive fins de semana e feriados, garantindo que você nunca perca um lead por demora.",
  },
  {
    question: "Ela faz agendamento automático mesmo?",
    answer: "Sim. O sistema possui integração nativa com o Google Agenda, permitindo que a IA agende reuniões ou consultas diretamente na sua agenda, eliminando o 'vai-e-volta' de emails e mensagens.",
  },
];

export const FaqSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold mb-12 text-center text-white">
          🧠 FAQ Inteligente
        </h2>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-gray-800">
                <AccordionTrigger className="text-lg font-semibold text-blue-400 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};