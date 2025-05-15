const extractImageFromHTML = (html) => {
  if (!html) return null;
  const match = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  return match ? match[1] : null;
};

const cleanText = (html) => {
  return html.replace(/<[^>]+>/g, "").trim();
};

function extractYouTubeID(url) {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/);
  return match ? match[1] : null;
}

module.exports = {
  extractImageFromHTML,
  cleanText,
  extractYouTubeID,
};
