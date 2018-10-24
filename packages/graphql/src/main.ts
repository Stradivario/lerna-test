import { awesomeFn } from "@rxdi/core";

export function cli() {
  awesomeFn();
  return Promise.resolve(true);
}
