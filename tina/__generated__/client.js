import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '109a83f40fadcb4e93b1a503679349fd7c113078', queries });
export default client;
  