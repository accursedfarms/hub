export default function youtubeTime(time) {
  const ret = time.match(/(?:(\d+)h)?(?:(\d+)m)?(\d+)s/);

  const hours = ret[1] || 0;
  const minutes = ret[2] || 0;
  const seconds = ret[3] || 0;

  return hours * 60 * 60 + minutes * 60 + seconds * 1;
}
