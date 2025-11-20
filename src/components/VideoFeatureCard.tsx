"use client";
import React, { useState, useMemo } from "react";
import { PlayCircle, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface VideoFeatureCardProps {
  icon: React.ElementType;
  title: string;
  copy: string;
  videoId: string;
  color: string;
}

const getYoutubeThumbnailUrl = (videoId: string) => 
  `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

export const VideoFeatureCard: React.FC<VideoFeatureCardProps> = ({
  icon: Icon,
  title,
  copy,
  videoId,
  color,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const thumbnailUrl = useMemo(() => getYoutubeThumbnailUrl(videoId), [videoId]);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  // URL do embed com autoplay e controles
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&rel=0&modestbranding=1`;

  return (
    <div
      className={cn(
        "bg-gray-900/70 backdrop-blur-sm p-6 rounded-xl shadow-2xl border border-gray-800 transition-all duration-500 hover:border-blue-600/80 group",
        "flex flex-col h-full"
      )}
    >
      {/* Ícone e Título */}
      <div className="flex items-center mb-4">
        <Icon className={cn("h-8 w-8 mr-3", color)} />
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>

      {/* Copy Descritiva */}
      <p className="text-gray-300 mb-4 flex-grow">{copy}</p>

      {/* Player de Vídeo */}
      <div className="relative w-full aspect-video mt-4 rounded-lg overflow-hidden shadow-lg">
        {!isPlaying ? (
          <div
            className="relative w-full h-full cursor-pointer"
            onClick={handlePlay}
          >
            {/* Thumbnail */}
            <img
              src={thumbnailUrl}
              alt={`Thumbnail do vídeo: ${title}`}
              className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-80"
              loading="lazy"
            />
            
            {/* Overlay de Play */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 transition-opacity duration-300">
              <PlayCircle className="h-16 w-16 text-white opacity-90 hover:text-blue-400 transition-colors" />
              <span className="mt-2 text-sm font-semibold text-white">
                ▶ Assistir
              </span>
            </div>
          </div>
        ) : (
          <iframe
            className="w-full h-full"
            src={embedUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          ></iframe>
        )}
      </div>
    </div>
  );
};