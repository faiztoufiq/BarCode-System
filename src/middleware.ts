// import { NextResponse } from "next/server";

// export const middleware = async (request:any) => {
//   const session = request.cookies.get("token");
//   const path = request.nextUrl.pathname;

//   const publicPaths = [
//     "/login",
//     "/signup",
//     "/forgot-password",
//     "/reset-password",
//   ];

//   const isPublicPath = publicPaths.includes(path);

//   if (session && path === "/") {
//     return NextResponse.redirect(new URL("/Dashboard", request.nextUrl));
//   }

//   if (session && isPublicPath) {
//     return NextResponse.redirect(new URL("/Dashboard", request.nextUrl));
//   }

//   if (!session && !isPublicPath) {
//     return NextResponse.redirect(new URL("/login", request.nextUrl));
//   }

//   return NextResponse.next();
// };

// export const config = {
//   matcher: [
//     "/",
//     "/seller-profile",
//     "/reset-password",
//     "/buyer-dashboard",
//     "/login",
//     "/buyer-profile",
//     "/home",
//     "/Products",

//     "/Dasboard",
//     "/Generate-Order",
//     "/seller-dashboard",
//   ],
// };
