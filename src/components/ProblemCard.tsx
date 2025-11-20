"use client";
import React from "react";
import { X, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProblemCardProps {
  problem: string;
  solution: string;
  type: "problem" | "attempt";
}

export const ProblemCard: React.FC<ProblemCardProps> = ({ problem, solution, type }) => {
  const isProblem = type === "problem";
  
  const problemIcon = <X className="h-6 w-6 text-red-500 mr-3 mt-1 flex-shrink-0" />;
  const solutionIcon = <Check className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />;

  const baseClasses = "relative p-6 rounded-xl shadow-xl transition-all duration-500 overflow-hidden group cursor-pointer h-full";
  
  // Classes para o estado inicial (Problema)
  const problemStateClasses = "bg-gray-900 border border-gray-800 hover:border-blue-600";
  
  // Classes para o overlay de solução (aparece no hover)
  const solutionOverlayClasses = cn(
    "absolute inset-0 flex flex-col items-start justify-center p-6 transition-opacity duration-500",
    "bg-gradient-to-br from-blue-900/80 to-red-900/80 backdrop-blur-sm opacity-0 group-hover:opacity-100"
  );

  return (
    <div className={cn(baseClasses, problemStateClasses)}>
      {/* Conteúdo do Problema (Sempre visível, mas fica por baixo do overlay no hover) */}
      <div className="flex items-start transition-opacity duration-300 group-hover:opacity-0">
        {problemIcon}
        <p className="text-lg text-gray-200 font-medium">{problem}</p>
      </div>

      {/* Overlay da Solução (Aparece no hover) */}
      <div className={solutionOverlayClasses}>
        <div className="flex items-start mb-3">
          {solutionIcon}
          <h3 className="text-xl font-bold text-white">Solução Megazord:</h3>
        </div>
        <p className="text-lg text-green-200 font-semibold">
          {solution}
        </p>
      </div>
    </div>
  );
};