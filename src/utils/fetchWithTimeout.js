export async function fetchWithTimeout(url, timeoutAfter) {
  const controller = new AbortController();
  const id = setTimeout(() => {
    controller.abort();
  }, timeoutAfter * 1000);
  const response = await fetch(url, {
    signal: controller.signal,
  });
  clearTimeout(id);
  return response;
}
