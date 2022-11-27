// deno run --allow-run --allow-read=. --allow-write=. --allow-env --allow-net src/validate.ts

import { getCliArgs } from './util/helper.ts';
import { validate } from './util/validate.ts';

const args = getCliArgs();
const { errorMessage } = validate(args.all);
if (errorMessage) {
  throw new Error('Not all entries are valid!');
}
