export function writeToLS(key: string, value: string) {
  localStorage.setItem(key, value);
}

export function getFromLS(key: string) {
  return localStorage.getItem(key);
}
