import { removeFromLast } from "../utils/utils.ts";

interface RouteManifest {
  name: string;
  file: string;
  heading: boolean;
  routes: RouteManifest[];
}

export default function Sidebar(props: { routes: RouteManifest[] }) {
  return props.routes.map(({ name, file, routes }) => {
    if (routes) {
      return (
        <>
          <li class="text(gray-900 hover:gray-600) font-bold">{name}</li>
          <ol class="pl-4 list-decimal nested">
            <Sidebar
              key={name + routes.length.toString()}
              routes={routes}
            />
          </ol>
        </>
      );
    }

    return (
      <li key={file} class="my-0.5">
        <a
          href={`/test-cases/${removeFromLast(file, ".").toLowerCase()}`}
          class="text(blue-600 hover:blue-500)"
        >
          {name}
        </a>
      </li>
    );
  });
}
