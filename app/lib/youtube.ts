export const youtubeThumb = (
  id: string,
  quality: "hqdefault" | "maxresdefault" = "hqdefault",
) => `https://img.youtube.com/vi/${id}/${quality}.jpg`;

export const youtubeEmbed = (id: string) =>
  `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;

// Full link ba ID, duto-i nei. Jemon:
// https://youtu.be/FRgLclYaG60?si=...        -> FRgLclYaG60
// https://www.youtube.com/watch?v=FRgLclYaG60 -> FRgLclYaG60
// FRgLclYaG60                                 -> FRgLclYaG60
export const getYoutubeId = (urlOrId: string) => {
  const input = urlOrId.trim();

  // Already an 11-character video ID
  if (/^[\w-]{11}$/.test(input)) return input;

  try {
    const url = new URL(input);

    if (url.hostname === "youtu.be") {
      return url.pathname.slice(1).split("/")[0];
    }

    const v = url.searchParams.get("v");
    if (v) return v;

    const match = url.pathname.match(/^\/(?:embed|shorts|live)\/([\w-]{11})/);
    if (match) return match[1];
  } catch {
    // URL na hole input-ta jemon ache temon-i return hobe
  }

  return input;
};
