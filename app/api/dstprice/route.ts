import { NextResponse } from "next/server";

export async function GET() {
  const API_LINK = process.env.NEXT_PUBLIC_EXTERNAL_API_DST_PRICE;

  if (!API_LINK) {
    return NextResponse.json({ error: "API Link not found" }, { status: 500 });
  }

  const response = await fetch(API_LINK);

  if (!response.ok) {
    return NextResponse.json(
      { error: "Response not ok" },
      { status: response.status }
    );
  }

  const data = await response.json();

  if (!data) {
    return NextResponse.json(
      { error: "Data not found" },
      { status: response.status }
    );
  }

  const dstPrice = data.data.attributes?.base_token_price_usd;

  return NextResponse.json({ dstPrice }, { status: response.status });
}
