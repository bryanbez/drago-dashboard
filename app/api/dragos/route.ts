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

    if (!response.ok) {
      let errorDetails;
      try {
        errorDetails = await response.json();
      } catch {
        errorDetails = await response.text();
      }
      return NextResponse.json(
        {
          message: `Failed to fetch data: ${response.status} ${response.statusText}`,
          details: errorDetails,
        },
        { status: response.status }
      );
    }

    const data = await response.json();

    return NextResponse.json({ dragos: data.myDragos }, { status: 201 });
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : "Unknown error occured";
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}
