"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const uniquePoints = [
  {
    mecanismo: "IA SDR Sênior™",
    oQueFaz: "Qualifica, quebra objeção, faz follow-up e agenda",
    porQueImporta: "Você não perde lead por inércia",
  },
  {
    mecanismo: "Pipeline Vivo™",
    oQueFaz: "Movimenta o lead sozinho no funil",
    porQueImporta: "Seu time só entra quando o lead tá pronto/agendado",
  },
  {
    mecanismo: "Agenda Viva™",
    oQueFaz: "IA + Google Agenda automatizado",
    porQueImporta: "Fim do vai-e-volta do “qual horário tem?”",
  },
  {
    mecanismo: "Hot Seat Megazord™",
    oQueFaz: "Mentoria ao vivo com estratégia real",
    porQueImporta: "Você não está mais só no campo de batalha",
  },
  {
    mecanismo: "GPT Copiável™",
    oQueFaz: "Biblioteca de copies prontas",
    porQueImporta: "Nunca mais comece uma copy do zero",
  },
];

export const UniqueSellingPoints: React.FC = () => {
  return (
    <section className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold mb-12 text-center text-white">
          ⚙️ O Que Torna o MegazordCRM Único
        </h2>

        <div className="overflow-x-auto">
          <Table className="min-w-full">
            <TableHeader>
              <TableRow className="bg-gray-800 hover:bg-gray-800">
                <TableHead className="text-blue-400 font-bold text-lg">Mecanismo</TableHead>
                <TableHead className="text-red-400 font-bold text-lg">O que faz</TableHead>
                <TableHead className="text-orange-400 font-bold text-lg">Por que importa</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {uniquePoints.map((point, index) => (
                <TableRow key={index} className="border-gray-800 hover:bg-gray-800/50 transition-colors">
                  <TableCell className="font-medium text-lg text-white">{point.mecanismo}</TableCell>
                  <TableCell className="text-gray-300">{point.oQueFaz}</TableCell>
                  <TableCell className="text-gray-300">{point.porQueImporta}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};