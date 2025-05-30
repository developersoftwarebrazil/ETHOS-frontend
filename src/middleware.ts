import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const authenticated = token ? true : false;
  console.log(authenticated);

  if (
    !authenticated &&
    request.nextUrl.pathname.startsWith("/account/:path*")
  ) {
    return NextResponse.redirect(new URL("/account/login", request.url));
  }
  if (authenticated && request.nextUrl.pathname.startsWith("/account/login")) {
    return NextResponse.redirect(new URL("/account", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/account/:path*", "/login/:path*"],
};
