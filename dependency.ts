// see: https://github.com/eserozvataf/hex/blob/development/src/stdx/datetime.ts
import * as datetime from "https://deno.land/x/hex/src/stdx/datetime.ts";

const now = new Date();
const today = datetime.clampTime(now);

console.log(`
  Now: ${now}
  Today: ${today}
`);
