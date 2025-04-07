import type { AppLoadContext } from "react-router";
import type { PlatformProxy } from "wrangler";

export type CF = Omit<PlatformProxy<Env>, "dispose"> & { env: Cloudflare.Env };
declare module "react-router" {
  interface AppLoadContext {
    cloudflare: CF;
  }
}

export type GetLoadContext = (args: {
  request: Request;
  context: { cloudflare: CF } & AppLoadContext;
}) => AppLoadContext;

export const getLoadContext: GetLoadContext = ({ context }) => {
  return {
    ...context,
  };
};
