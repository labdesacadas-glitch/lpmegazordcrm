"use client";
import React, { useState } from "react";
import { MessageCircle, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { WHATSAPP_LINK } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export const WhatsappFloatingWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenWhatsapp = () => {
    window.open(WHATSAPP_LINK, "_blank");
    setIsOpen(false); // Fecha o modal após abrir o link
  };

  return (
    <>
      {/* Botão Flutuante Principal */}
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-6 right-6 z-[100] p-4 rounded-full shadow-2xl transition-all duration-300",
          "bg-green-500 hover:bg-green-600 text-white",
          "flex items-center justify-center h-14 w-14",
          "animate-bounce" // Adiciona uma animação sutil para chamar a atenção
        )}
        aria-label="Falar com Especialista via WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
      </button>

      {/* Modal Persuasivo */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="w-[90%] max-w-sm rounded-xl bg-gray-900 text-white p-0 border-gray-700">
          
          {/* Header do Chat */}
          <div className="bg-green-600 p-4 flex items-center justify-between rounded-t-xl">
            <div className="flex items-center">
              <div className="p-2 rounded-full bg-white/20 mr-3">
                <MessageCircle className="h-5 w-5 text-white" />
              </div>
              <div>
                <DialogTitle className="text-lg font-bold text-white">
                  Especialista MegazordCRM
                </DialogTitle>
                <p className="text-sm text-green-200">Online agora</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Corpo do Chat */}
          <div className="p-6">
            <h3 className="text-2xl font-extrabold mb-3 text-white">
              Quer aumentar suas vendas com automação?
            </h3>
            <p className="text-gray-300 mb-6">
              Descubra como o MegazordCRM está multiplicando o faturamento de nossos clientes com IA e automação 24/7.
            </p>

            <Button
              onClick={handleOpenWhatsapp}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 text-lg"
            >
              <Zap className="mr-2 h-5 w-5" />
              Falar com Especialista
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};