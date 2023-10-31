import {
  getSessionOnEdge,
  redirectToLogin,
  shouldByPassMiddleware,
} from "@frontegg/nextjs/edge";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const middleware = async (request: NextRequest) => {
  const pathname = request.nextUrl.pathname;

  if (shouldByPassMiddleware(pathname)) {
    console.log("shouldByPassMiddleware", { pathname, request });

    return NextResponse.next();
  }

  const session = await getSessionOnEdge(request);
  console.log("session", { session, request });
  if (!session) {
    return redirectToLogin(pathname);
  }
  return NextResponse.next();
};

export const config = {
  matcher: "/(.*)",
};
