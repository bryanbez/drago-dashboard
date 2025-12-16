import { fetchWithTimeout } from "./httpClient";

interface DstPriceResponse {
  dstPrice: number;
}

export async function getDstPrice(): Promise<number> {
  const response = await fetchWithTimeout("/api/dstprice", { timeout: 3000 });
  return Number((response as DstPriceResponse).dstPrice);
}
