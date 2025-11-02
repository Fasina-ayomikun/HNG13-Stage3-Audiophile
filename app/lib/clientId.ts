export function getClientId() {
  if (typeof window === "undefined") return "";
  const key = "audiophile:clientId";
  let id = localStorage.getItem(key);
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(key, id);
  }
  return id;
}
