import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import checkIsUserLogin from "./middleware/auth/login";

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  if (pathname == "/login") {
    const isUserLogin = await checkIsUserLogin(request);
    if (isUserLogin) {
      return NextResponse.redirect(new URL("/", request.url));
    } 
  }

  if (pathname == "/checkout") {
    const isUserLogin = await checkIsUserLogin(request);
    if (!isUserLogin) {
      return NextResponse.redirect(new URL("/login", request.url));
    } 
  }
}

export const config = {
  matcher: ["/login","/checkout"],
};
