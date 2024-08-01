export function getLocalStorage(key: string, defaultValue: any) {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem(key);

    return value !== null && value !== "undefined"
      ? JSON.parse(value)
      : defaultValue;
  }
}

export function setLocalStorage(key: string, value: any) {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
}
