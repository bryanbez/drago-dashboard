export async function getDragos(walletAddress: string) {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  try {
    const res = await fetch(`${BASE_URL}/api/dragos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        address: walletAddress,
        includeRent: true,
      }),
    });

    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log("An Error Occured: ", err);
  }
}
