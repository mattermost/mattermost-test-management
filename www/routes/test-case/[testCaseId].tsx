import { HandlerContext } from "$fresh/server.ts";

import tcKeyAndPath from "../../../data/key-and-path.json" assert {
  type: "json",
};

type KeyAndPath = { key: string; path: string; id: number }[];
const keyAndPath = tcKeyAndPath as KeyAndPath;

export const handler = {
  GET(_req: Request, ctx: HandlerContext) {
    const testCaseId = ctx.params.testCaseId.toUpperCase();
    let foundEntry = keyAndPath.filter((it) =>
      it.key.toUpperCase() === testCaseId
    );

    if (foundEntry.length === 0) {
      foundEntry = keyAndPath.filter((it) => it.id.toString() === testCaseId);
    }

    if (foundEntry.length !== 0) {
      return new Response("", {
        status: 301,
        headers: {
          location: `/test-cases/${foundEntry[0].path}/${
            foundEntry[0].key.toLowerCase()
          }`,
        },
      });
    } else {
      return ctx.renderNotFound();
    }
  },
};
