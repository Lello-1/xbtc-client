export function truncateString(str, num) {

  if (num === str.length || num > str.length) {
    return str;
  } else {
    return str.slice(0, num) + '...';
  }
}