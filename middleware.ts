import { NextRequest, NextResponse } from "next/server";
// Importing the config is necessary to configure getEdgeFlags
import "./flags.config";
import { getEdgeFlags } from "@happykit/flags/edge";
import { getConfig } from "@happykit/flags/config";

export const config = {
  matcher: "/",
};

export async function middleware(request: NextRequest) {
  const flagBag = await getEdgeFlags({ request });

  console.log(getConfig());
  const response = NextResponse.next();

  console.log("ccccc", flagBag.cookie);

  if (flagBag.cookie) response.cookies.set(...flagBag.cookie.args);

  console.log(flagBag);

  return response;
}
