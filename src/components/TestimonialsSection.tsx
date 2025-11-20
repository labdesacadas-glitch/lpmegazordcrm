"use client";
import React from "react";
import { Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "Fechei 3 calls só no fim de semana, tudo automático.",
    author: "Lucas, Mentor e lançador",
    iconColor: "text-blue-500",
  },
  {
    quote: "A IA já me economizou 3 meses de salário de SDR.",
    author: "Carla, Clínica de Estética",
    iconColor: "text-red-500",
  },
  {
    quote: "Agora eu tenho dados reais de tráfego e CRM no mesmo lugar. Decido com base em números.",
    author: "Felipe, Nutricionistas",
    iconColor: "text-orange-500",
  },
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold mb-12 text-white">
          🧠 Exemplos Reais de Sucesso
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => {
            const [name, role] = t.author.split(',').map(s => s.trim());
            const initial = name.charAt(0).toUpperCase();

            return (
              <div
                key={index}
                className="bg-gray-900 p-6 rounded-xl shadow-xl border border-gray-800 flex flex-col h-full"
              >
                <Quote className={`h-8 w-8 mb-4 ${t.iconColor}`} />
                <p className="text-xl italic text-gray-200 flex-grow mb-6">
                  "{t.quote}"
                </p>
                
                {/* Profile Section with Avatar */}
                <div className="flex items-center mt-auto pt-4 border-t border-gray-800">
                  <Avatar className="h-12 w-12 mr-4 border-2 border-gray-700">
                    {/* AvatarImage is empty as we don't have real images, AvatarFallback shows initials */}
                    <AvatarImage src="" alt={name} /> 
                    <AvatarFallback className={`bg-gray-700 text-white font-bold text-lg border-2 ${t.iconColor.replace('text-', 'border-')}`}>
                      {initial}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-gray-200 text-left">
                      {name}
                    </p>
                    <p className="text-sm text-gray-400 text-left">
                      {role}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};