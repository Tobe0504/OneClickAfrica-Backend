const extractImageFromHTML = (html) => {
  if (!html) return null;
  const match = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  return match ? match[1] : null;
};

const cleanText = (html) => {
  return html.replace(/<[^>]+>/g, "").trim();
};

function extractYouTubeID(url) {
  if (!url) return null;

  const regex =
    /(?:youtube\.com\/.*v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);

  return match ? match[1] : null;
}

module.exports = {
  extractImageFromHTML,
  cleanText,
  extractYouTubeID,
};
