import { testing } from '../lib/testing.js';
import { apollo } from '../lib/apollo.js';

export default async function get() {
  return { message: `${testing} ${apollo}` };
}
