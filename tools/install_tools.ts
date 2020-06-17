import { Params } from "../utils/types.ts";

function installTools(args: string[]) {
  return Deno.run({ cmd: ["deno", ...args], stdout: "piped" });
}

/*
 * install script from database.json
 */

export default async function exec(param: Params): Promise<void> {
  const args: string[] = [
    "install",
    ...param.config.permissions,
    param.config.url,
  ];

  const app: Deno.Process = installTools(args);
  const decoder = new TextDecoder("utf-8");

  const out = await app.output();
  console.log(decoder.decode(out));
}
