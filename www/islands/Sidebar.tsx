import { useEffect, useState } from "preact/hooks";
import { removeFromLast } from "../utils/utils.ts";

interface RouteManifest {
  name: string;
  file: string;
  heading: boolean;
  routes: RouteManifest[];
}

export default function Sidebar(
  props: { routes: RouteManifest[]; level: number } = { routes: [], level: 0 },
) {
  const [open, setOpen] = useState(false);

  function handleClick() {
    console.log("handleClick");
    setOpen(!open);
  }

  return props.routes.map(({ name, file, routes }, index) => {
    if (routes) {
      return (
        <>
          <a
            class={`text(gray-900 hover:gray-600) font-bold`}
            onClick={handleClick}
          >
            {"> " + name}
          </a>
          <div
            class={`${open ? "visible" : "invisible"} pl-4 border-l-2 border-gray-400`}
          >
            <Sidebar
              key={name + routes.length.toString()}
              routes={routes}
              level={props.level + 4}
            />
          </div>
        </>
      );
    }

    return (
      <div key={file} class={`my-0.5`}>
        <a
          href={`/test-cases/${removeFromLast(file, ".").toLowerCase()}`}
          class="text(blue-600 hover:blue-500)"
        >
          {"* " + name}
        </a>
      </div>
    );
  });
}
