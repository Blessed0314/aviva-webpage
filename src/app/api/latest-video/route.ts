import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Fetch the streams (live broadcasts) tab as churches primarily post their weekly predicas via live streams
    const response = await fetch("https://www.youtube.com/@avivachurchoficial5559/streams", {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
        "Accept-Language": "es-ES,es;q=0.9,en;q=0.8"
      },
      next: { revalidate: 1800 } // Cache response for 30 minutes
    });

    if (!response.ok) {
      throw new Error(`YouTube responded with status: ${response.status}`);
    }

    const html = await response.text();

    // Search for the first videoId in ytInitialData or HTML contents
    const videoIdMatch = html.match(/"videoId":"([^"]+)"/);
    const videoId = videoIdMatch ? videoIdMatch[1] : "8tHKu3xxsGc";

    return NextResponse.json({ videoId });
  } catch (error) {
    console.error("Error fetching latest YouTube video:", error);
    // Return the latest known video ID as fallback in case of errors
    return NextResponse.json({ videoId: "8tHKu3xxsGc", isFallback: true });
  }
}
