import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // const isAuthenticated =
  //   request.cookies.get("isAuthenticated")?.value === "true";
  const isAuthenticated = true;
  const isLoginPage = request.nextUrl.pathname === "/login";
  const isLandingPage = request.nextUrl.pathname === "/";

  if (!isAuthenticated && !isLoginPage && !isLandingPage) {
    console.log("NOT AUTH");
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (isAuthenticated == true && isLoginPage) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/dashboard/:path*", "/login"],
};
