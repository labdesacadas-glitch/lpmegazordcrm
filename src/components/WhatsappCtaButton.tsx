"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

interface WhatsappCtaButtonProps extends React.ComponentProps<typeof Button> {
  children: React.ReactNode;
  className?: string;
}

export const WhatsappCtaButton: React.FC<WhatsappCtaButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Button
      asChild
      className={cn(
        "bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-[1.05] text-lg",
        "animate-cta-pulse", // Adicionando a animação de pulsação
        className
      )}
      {...props}
    >
      <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
        <Send className="mr-2 h-5 w-5" />
        {children}
      </a>
    </Button>
  );
};