import { NextRequest, NextResponse } from "next/server";
import { getUrlByPath } from "./lib/getUrlByPath";
import { type Session } from "next-auth";
import { env } from "~/env";
import { nextTick } from "process";

export default async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const tokenName = "next-auth.session-token";
  const token = request.cookies.get(tokenName);

  if (pathname === "/" && token) {
    const session = (await (
      await fetch(process.env.NEXTAUTH_URL + "/api/auth/session", {
        method: "GET",
        headers: {
          ...Object.fromEntries(request.headers),
        },
      })
    ).json()) as Session;

    if (session.user.isadmin) {
        return (
            NextResponse.redirect(getUrlByPath("/page"))
        )
    }

    if (session.user) {
        return(
            NextResponse.redirect(getUrlByPath("/page"))
        )
    }
  
    }
    else if (pathname == "/page") {
      console.log(pathname )
      const session = (await (
        await fetch(process.env.NEXTAUTH_URL + "/api/auth/session", {
          method: "GET",
          headers: {
            ...Object.fromEntries(request.headers),
          },
        })
      ).json()) as Session;
      return !session?.user
      ? NextResponse.redirect(getUrlByPath("/"))
      : NextResponse.next();
  }

  else if (pathname == "/product") {
    console.log(pathname )
    const session = (await (
      await fetch(process.env.NEXTAUTH_URL + "/api/auth/session", {
        method: "GET",
        headers: {
          ...Object.fromEntries(request.headers),
        },
      })
    ).json()) as Session;
    return !session?.user
    ? NextResponse.redirect(getUrlByPath("/"))
    : NextResponse.next();
}

else if (pathname == "/createProduct") {
  console.log(pathname )
  const session = (await (
    await fetch(process.env.NEXTAUTH_URL + "/api/auth/session", {
      method: "GET",
      headers: {
        ...Object.fromEntries(request.headers),
      },
    })
  ).json()) as Session;
  return !session?.user
  ? NextResponse.redirect(getUrlByPath("/"))
  : NextResponse.next();
}

else if (pathname == "/editProduct") {
  console.log(pathname )
  const session = (await (
    await fetch(process.env.NEXTAUTH_URL + "/api/auth/session", {
      method: "GET",
      headers: {
        ...Object.fromEntries(request.headers),
      },
    })
  ).json()) as Session;
  return !session?.user
  ? NextResponse.redirect(getUrlByPath("/"))
  : NextResponse.next();
}

else if (pathname == "/deleteProduct") {
  console.log(pathname )
  const session = (await (
    await fetch(process.env.NEXTAUTH_URL + "/api/auth/session", {
      method: "GET",
      headers: {
        ...Object.fromEntries(request.headers),
      },
    })
  ).json()) as Session;
  return !session?.user
  ? NextResponse.redirect(getUrlByPath("/"))
  : NextResponse.next();
}
  return NextResponse.next();
}

