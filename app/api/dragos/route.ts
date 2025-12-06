import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { address, includeRent } = await request.json();
  const LOK_EXTERNAL_LINK_DRAGO =
    process.env.NEXT_PUBLIC_EXTERNAL_API_LINK_WALLET_ADDRESS_DRAGO;

  try {
    const response = await fetch(`${LOK_EXTERNAL_LINK_DRAGO}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        address,
        includeRent,
      }),
      //0xE86Cd3C133cC32D75d793FA8834A2BaC14d4aD3b
    });

    const data = await response.json();

    return NextResponse.json({ message: data.myDragos }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: err }, { status: 404 });
  }
}
