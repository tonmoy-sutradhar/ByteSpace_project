// src/app/Components/Course/CourseVideo.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import { youtubeEmbed, youtubeThumb } from "@/app/lib/youtube";

interface CourseVideoProps {
  videoId: string;
  title: string;
}

const CourseVideo = ({ videoId, title }: CourseVideoProps) => {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-[719/479] w-full overflow-hidden rounded-[24px] bg-[#E9E9E9] lg:ml-[5px] lg:w-[719px]">
      {playing ? (
        <iframe
          src={youtubeEmbed(videoId)}
          title={title}
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <>
          <Image
            src={youtubeThumb(videoId, "maxresdefault")}
            alt={title}
            fill
            priority
            sizes="719px"
            className="object-cover"
          />

          <button
            type="button"
            aria-label="Play course preview"
            onClick={() => setPlaying(true)}
            className="absolute left-[52%] top-[54%] flex h-[103px] w-[103px] -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-[24px] bg-[#7A5A52]/70 backdrop-blur-md transition hover:scale-105"
          >
            <span className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-white">
              <svg
                width="20"
                height="22"
                viewBox="0 0 20 22"
                aria-hidden="true"
              >
                <path
                  d="M3 2.2v17.6a1 1 0 0 0 1.5.9l14-8.8a1 1 0 0 0 0-1.8l-14-8.8A1 1 0 0 0 3 2.2Z"
                  fill="#6B6B6B"
                />
              </svg>
            </span>
          </button>
        </>
      )}
    </div>
  );
};

export default CourseVideo;

// import Image from "next/image";
// import poster from "@/app/assets/Course/video-poster.png";

// const CourseVideo = () => {
//   return (
//     <div className="relative aspect-[719/479] w-full overflow-hidden rounded-[24px] bg-[#E9E9E9] lg:ml-[5px] lg:w-[719px]">
//       <Image
//         src={poster}
//         alt="Course preview"
//         fill
//         priority
//         sizes="719px"
//         className="object-cover"
//       />

//       {/* Play button (design e video er center theke ektu dan-niche) */}
//       <button
//         type="button"
//         aria-label="Play course preview"
//         className="absolute left-[52%] top-[54%] flex h-[103px] w-[103px] -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-[24px] bg-[#7A5A52]/70 backdrop-blur-md transition hover:scale-105"
//       >
//         <span className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-white">
//           <svg width="20" height="22" viewBox="0 0 20 22" aria-hidden="true">
//             <path
//               d="M3 2.2v17.6a1 1 0 0 0 1.5.9l14-8.8a1 1 0 0 0 0-1.8l-14-8.8A1 1 0 0 0 3 2.2Z"
//               fill="#6B6B6B"
//             />
//           </svg>
//         </span>
//       </button>
//     </div>
//   );
// };

// export default CourseVideo;
