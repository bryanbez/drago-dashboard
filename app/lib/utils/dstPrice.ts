import { getDstPrice } from "../service/dstPriceService";

export async function getDSTLatestPrice() {
  const dstPrice = await getDstPrice();
  return dstPrice;
}
