"use client";
import React, { useState, useMemo } from "react";
import { PlayCircle, TrendingUp, MessageSquare, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

// ID do vídeo fornecido pelo usuário
const HERO_VIDEO_ID = "zB_zoWDz740";

const getYoutubeThumbnailUrl = (videoId: string) => 
  `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

export const HeroVisualMockup: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const thumbnailUrl = useMemo(() => getYoutubeThumbnailUrl(HERO_VIDEO_ID), []);
  const embedUrl = `https://www.youtube.com/embed/${HERO_VIDEO_ID}?autoplay=1&controls=1&rel=0&modestbranding=1`;

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto p-4 bg-gray-900/50 backdrop-blur-sm rounded-2xl shadow-2xl border border-blue-600/50">
      
      {/* Mockup Principal (Video Player) */}
      <div className="relative w-full aspect-video bg-gray-800 rounded-xl shadow-inner border-4 border-blue-600/50 overflow-hidden">
        {!isPlaying ? (
          <div
            className="relative w-full h-full cursor-pointer"
            onClick={handlePlay}
          >
            {/* Thumbnail */}
            <img
              src={thumbnailUrl}
              alt="Thumbnail do vídeo de apresentação do MegazordCRM"
              className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-80"
              loading="lazy"
            />
            
            {/* Overlay de Play */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 transition-opacity duration-300">
              <PlayCircle className="h-24 w-24 text-white opacity-90 hover:text-blue-400 transition-colors" />
              <span className="mt-2 text-lg font-semibold text-white">
                ▶ Veja a IA em ação
              </span>
            </div>
          </div>
        ) : (
          <iframe
            className="w-full h-full"
            src={embedUrl}
            title="Vídeo de Apresentação do MegazordCRM"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          ></iframe>
        )}
      </div>

      {/* Mini Cards de Estatísticas Flutuantes (Glassmorphism) */}
      {/* Posicionamento ajustado para centralização */}
      <div className="absolute -top-6 left-1/4 transform -translate-x-1/2 hidden sm:block">
        <Card className="bg-white/10 backdrop-blur-md border-gray-700 text-white p-3 shadow-lg">
          <CardContent className="p-0 flex items-center">
            <Clock className="h-5 w-5 text-blue-400 mr-2" />
            <span className="text-sm font-bold">🤖 IA SDR Sênior 24/7</span>
          </CardContent>
        </Card>
      </div>

      <div className="absolute -bottom-6 right-1/4 transform translate-x-1/2 hidden sm:block">
        <Card className="bg-white/10 backdrop-blur-md border-gray-700 text-white p-3 shadow-lg">
          <CardContent className="p-0 flex items-center">
            <MessageSquare className="h-5 w-5 text-red-400 mr-2" />
            <span className="text-sm font-bold">97% de Qualificação</span>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};