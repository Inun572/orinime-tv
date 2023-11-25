// import { NextResponse } from 'next/server';
// import { authUserSession } from './libs/auth-lib';

// export const middleware = async (request) => {
//   const user = await authUserSession();
//   if (user) {
//     return NextResponse.redirect(new URL('/'), request.url);
//   }
// };

export { default } from 'next-auth/middleware';

export const config = {
  matcher: ['/user/:path*'],
};
