import { fetchWithTimeout } from "./httpClient";

// Example of how to use the reusable function (Functional Approach)

export async function getDragosService(
  walletAddress: string,
  includeRent: boolean
) {
  // Uses the default 10s timeout
  const data = await fetchWithTimeout(`/api/dragos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ address: walletAddress, includeRent }),
  });

  return data;
}

export async function getDragosQuickCheck(
  walletAddress: string,
  includeRent: boolean
) {
  // Example with a custom 3-second timeout for fast checks

  const data = await fetchWithTimeout(`/api/dragos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ address: walletAddress, includeRent }),
    timeout: 3000,
  });

  return data;
}
