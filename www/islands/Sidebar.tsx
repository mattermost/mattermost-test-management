import { useState } from "preact/hooks";
import { removeFromLast } from "../utils/utils.ts";

interface RouteManifest {
  name: string;
  file?: string;
  heading?: boolean;
  routes?: RouteManifest[];
}

function getFilesFromRoutes(routes: RouteManifest[]): string[] {
  return routes.flatMap((r) => {
    if (r.routes) {
      return getFilesFromRoutes(r.routes);
    }

    if (r.file) {
      return removeFromLast(r.file.toLowerCase(), ".");
    }

    return "";
  });
}

function SidebarSection(
  props: { manifest: RouteManifest; level: number; openPath: string },
) {
  const { manifest, level, openPath } = props;
  let isCurrentlyOpen = false;
  if (manifest.file) {
    isCurrentlyOpen = removeFromLast(manifest.file.toLowerCase(), ".") ===
      openPath.toLowerCase();
  }
  if (manifest.routes) {
    isCurrentlyOpen = getFilesFromRoutes(manifest.routes).includes(
      openPath.toLowerCase(),
    );
  }

  const [open, setOpen] = useState(isCurrentlyOpen);

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    setOpen(!open);
  };

  if (manifest.file) {
    return (
      <ul>
        <li>
          {open && <div>* {manifest.name}</div>}
          {!open && (
            <a
              href={`/test-cases/${
                removeFromLast(manifest.file, ".").toLowerCase()
              }`}
              class="text(blue-600 hover:blue-500)"
            >
              * {manifest.name}
            </a>
          )}
        </li>
      </ul>
    );
  }

  return (
    <>
      <div
        class={`text(gray-900 hover:gray-600) font-bold`}
      >
        <a href="#" onClick={handleClick}>
          {open ? "- " : "+ "} {manifest.name}
        </a>
      </div>
      <div
        class={`${open ? "block" : "hidden"} pl-4 border-l-2 border-gray-400`}
      >
        <ul>
          {manifest.routes && manifest.routes.map((m) => {
            return (
              <SidebarSection
                openPath={openPath}
                manifest={m}
                level={level + 4}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default function Sidebar(
  props: { routes: RouteManifest[]; openPath: string },
) {
  return (
    <>
      {props.routes.map((r) => (
        <SidebarSection openPath={props.openPath} manifest={r} level={0} />
      ))}
    </>
  );
}
