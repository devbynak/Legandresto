import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const url = new URL(req.url);
  if (url.pathname === "/@vite/client") {
    // Return a harmless JS response to silence dev-tool requests.
    return new NextResponse("// noop for vite client in Next dev\n", {
      status: 200,
      headers: { "content-type": "application/javascript" },
    });
  }
  return NextResponse.next();
}