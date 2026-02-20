import { useState } from "react";

interface Video {
  path: string;
  title: string;
  description: string;
}

export default function VideoGallery() {
  // Liste des vidéos
  const videos: Video[] = [
    { path: "videos/apple-logo.mp4", title: "Logo Apple", description: "Reprises personnalisées de l'animation de motion design du logo Apple" },
    { path: "videos/nike-logo.mp4", title: "Nike Motion", description: "Expérimentation d'animation et de rendu Blender en utilisant les Geometry Nodes" },
    { path: "videos/storm.mp4", title: "Tempête", description: "Animation d'une tempête de mer par simulation" },
    { path: "videos/glass.mp4", title: "Boisson pétillante", description: "Modélisation rapide d'un verre de jus pétillant semi-réaliste" },
    { path: "videos/maison.mp4", title: "Maisonnette", description: "Modélisation style cartoon d'une scènette d'un port fictif" },
    { path: "videos/avatar-flower.mp4", title: "Fleur Avatar", description: "Modélisation et animation simple d'une fleur inspirée de la saga Avatar" },
    { path: "videos/witch.mp4", title: "Sorcière", description: "Modélisation d'un personnage low-poly dans une petite scènette" },
    { path: "videos/fluffly-cat.mp4", title: "Fluffy cat", description: "Modélisation et animation d'un petit chat mochi moelleux avec expérimentation du grease pencil" },
  ];

  // Vidéo principale
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);

  return (
    <>
      <div className="flex flex-col justify-center items-center w-full rounded-xl p-4 mb-18">

        <div className="flex flex-row gap-6 h-[75vh] max-h-250">
          {/* Vidéo principale */}
          <div className="flex-1 border-4 rounded-2xl overflow-hidden items-center justify-center">
            <video
              key={selectedVideo.path}
              className="w-full h-[85%] rounded-t-xl aspect-video object-cover"
              controls
              autoPlay
              muted
              loop
            >
              <source src={selectedVideo.path} type="video/mp4" />
            </video>
            <div className="flex flex-col justify-around h-[15%]">
              <div className="font-bold text-2xl text-center text-orange">{selectedVideo.title}</div>
              <div className="video-gallery-subtitle text-center">{selectedVideo.description}</div>
            </div>
          </div>

          {/* Miniatures */}
          <div className="h-full pr-1 border-4 rounded-2xl">
            <div className="h-full overflow-y-auto py-2 pl-2 pr-1 overflow-x-hidden">
              <div className="w-full flex-col gap-4">
                {videos.map((video, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedVideo(video)}
                    className="flex gap-2 items-center cursor-pointer rounded-lg overflow-hidden
                           border-4 border-transparent hover:border-gray-200 transition-all"
                  >
                    <video className="w-40 h-28 object-cover" preload="metadata" muted>
                      <source src={video.path} type="video/mp4" />
                    </video>
                    <div className="font-bold">
                      {video.title}
                    </div>

                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </>

  );
}
