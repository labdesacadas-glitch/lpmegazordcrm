"use client";
import React from "react";
import { PlayCircle } from "lucide-react";

export const VideoPlaceholder: React.FC = () => {
  return (
    <section className="py-16 bg-gray-950">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 text-white">
          Veja o MegazordCRM em Ação
        </h2>
        <div className="relative w-full max-w-4xl mx-auto aspect-video bg-gray-800 rounded-xl shadow-2xl flex items-center justify-center border-4 border-blue-600/50">
          <PlayCircle className="h-20 w-20 text-blue-500 opacity-70 transition-opacity hover:opacity-100 cursor-pointer" />
          <p className="absolute bottom-4 text-gray-400">
            (Placeholder para Vídeo de Vendas - Em breve)
          </p>
        </div>
      </div>
    </section>
  );
};