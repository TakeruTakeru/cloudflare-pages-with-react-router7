import { createPagesFunctionHandler } from "@react-router/cloudflare";
import type { ServerBuild } from "react-router";
import * as buildImport from "../build/server";
import { getLoadContext } from "../load-context";

const build = buildImport as unknown as ServerBuild;

export const onRequest = createPagesFunctionHandler({
    build,
    getLoadContext,
} as {
    build: ServerBuild;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getLoadContext: any;
});
