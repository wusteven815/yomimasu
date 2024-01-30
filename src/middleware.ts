import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const whitelistedEmails = process.env.WHITELISTED_EMAILS?.split(",") ?? [];

  if (whitelistedEmails.includes(token?.email ?? "")) return NextResponse.next();
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: "/library",
};
