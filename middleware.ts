import { NextRequest, NextResponse } from "next/server";

export function middleware (request: NextRequest){
    const requestHeader = new Headers(request.headers);
    requestHeader.set('next-js-code-tuti', 'buenas-gente')

    const response = NextResponse.next({
        headers: requestHeader
    });

    if(request.nextUrl.pathname.endsWith('/information')){
        return NextResponse.redirect(new URL("/information/character", request.url))
    }

    if(request.nextUrl.pathname.startsWith('/information')){
        const user = {
            name: 'Lainer',
            autheticated: false
        }
        if(!user.autheticated){
            return NextResponse.redirect(new URL("/login", request.url))
        }
      
    }

    return response;
}


//Se ejecuta el middleware solo en estas rutas
export const config = {
    matcher: ["/information/:path*"]
}