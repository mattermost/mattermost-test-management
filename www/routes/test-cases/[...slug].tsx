import { asset, Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { extractFrontMatter, gfm, sortBy } from "../../utils/deps.ts";
import { testCasesFolderFullPath } from "../../utils/constant.ts";
import { removeFromLast } from "../../utils/utils.ts";

import Header from "../../components/header.tsx";
import Sidebar from "../../islands/Sidebar.tsx";
import Footer from "../../components/footer.tsx";
import Search from "../../islands/Search.tsx";
import NavigationBar from "../../components/navigation_bar.tsx";

import tcTOC from "../../../data/test-cases-toc.json" with { type: "json" };
import tcManifest from "../../../data/test-cases-manifest.json" with {
  type: "json",
};
import tcFolders from "../../../data/test-cases-folders.json" with {
  type: "json",
};

interface Data {
  page: Page;
}

interface Page {
  slug: string;
  name: string;
  category?: string;
  markdown: string;
  data: Record<string, unknown>;
}

type TOC = Record<string, { name: string; slug: string }>;

const toc = tcTOC as TOC;
const folders = tcFolders as Record<string, string>;

export const handler: Handlers<Data> = {
  async GET(_req, ctx) {
    const slug = ctx.params.slug;
    const slugs = sortBy(Object.keys(toc), (it) => it);
    if (slug === "") {
      return new Response("", {
        status: 307,
        headers: { location: `test-cases/${slugs[0]}` },
      });
    }
    const entry = toc[slug];
    if (!entry) {
      return ctx.renderNotFound();
    }

    // Convert test key to uppercase to match naming convention of the actual markdown file
    const filePath = entry.slug.split("/").map((part, index, arr) => {
      if (index === arr.length - 1) {
        return part.toUpperCase();
      }
      return part;
    }).join("/");

    const url = new URL(
      `../../../${testCasesFolderFullPath}/${filePath}.md`,
      import.meta.url,
    );

    const fileContent = await Deno.readTextFile(url);
    const { body, attrs } = extractFrontMatter<Record<string, unknown>>(
      fileContent,
    );
    const page = { ...entry, markdown: body, data: attrs ?? {} };
    const resp = ctx.render({ page });
    return resp;
  },
};

export default function TestsPage(props: PageProps<Data>) {
  return (
    <>
      <Head>
        <title>{props.data.page?.name ?? "Not Found"} | Test Management</title>
        <link rel="stylesheet" href={asset("/gfm.css")} />
      </Head>
      <div class="flex flex-col min-h-screen">
        <Header withSearchBar={true} />
        <NavigationBar active="/test-cases" />
        <Main path={props.url.pathname} page={props.data.page} />
        <Footer />
      </div>
    </>
  );
}

function Main(props: { path: string; page: Page }) {
  return (
    <div class="flex-1">
      <div class="mx-auto max-w-screen-lg px-4 flex gap-6">
        <DesktopSidebar pageSlug={props.page.slug} path={props.path} />
        <Content page={props.page} />
      </div>
    </div>
  );
}

function DesktopSidebar(props: { path: string; pageSlug: string }) {
  return (
    <nav class="w-[16rem] flex-shrink-0 hidden md:block py-8 pr-4 border(r-2 gray-100)">
      <Search />
      <Sidebar routes={tcManifest} openPath={props.pageSlug} />
    </nav>
  );
}

function Content(props: { page: Page }) {
  const html = gfm.render(props.page.markdown);
  return (
    <main class="py-8 overflow-hidden">
      <div
        class="mt-6 markdown-body"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <ForwardBackButtons slug={props.page.slug} />
    </main>
  );
}

const button = "p-2 bg-gray-100 w-full border(1 gray-200) grid";

function ForwardBackButtons(props: { slug: string }) {
  const slugs = sortBy(Object.keys(toc), (it) => it);
  const currentIndex = slugs.findIndex((slug) => slug === props.slug);
  const previousSlug = slugs[currentIndex - 1];
  const nextSlug = slugs[currentIndex + 1];
  const previous = toc[previousSlug];
  const next = toc[nextSlug];
  const previousFolder = removeFromLast(previous?.slug, "/");
  const nextFolder = removeFromLast(next?.slug, "/");

  const upper = "text(sm gray-600)";
  const category = "font-normal";
  const lower = "text-gray-900 font-medium";

  return (
    <div class="mt-8 flex flex(col md:row) gap-4">
      {previous && (
        <a href={`/test-cases/${previous.slug}`} class={`${button} text-left`}>
          <span class={upper}>{"←"} Previous</span>
          <span class={lower}>
            <span class={category}>
              {previous.slug ? `${folders[previousFolder]}: ` : ""}
            </span>
            {previous.name}
          </span>
        </a>
      )}
      {next && (
        <a href={`/test-cases/${next.slug}`} class={`${button} text-right`}>
          <span class={upper}>Next {"→"}</span>
          <span class={lower}>
            <span class={category}>
              {next.slug ? `${folders[nextFolder]}: ` : ""}
            </span>
            {next.name}
          </span>
        </a>
      )}
    </div>
  );
}
