export function daysAgo(dateOfPosting) {
  const postDate = new Date(dateOfPosting);
  const now = new Date();
  const diffTime = Math.abs(now - postDate);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  if (diffDays === 0) {
    return "New";
  } else if (diffDays === 1) {
    return "Yesterday";
  } else {
    return `${diffDays} days ago`;
  }
}
