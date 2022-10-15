import { useEffect, useRef, useState } from "preact/hooks";

function SearchResult(
  props: { name: string; id: number },
) {
  return (
    <div>
      <a class="block p-1 hover:bg-gray-200" href={`/test-case/${props.id}`}>
        {props.name}
      </a>
    </div>
  );
}

const useOutsideClick = (callback: () => void) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        ref?.current && event.target instanceof Node &&
        !ref.current.contains(event.target)
      ) {
        callback();
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [ref]);

  return ref;
};

export default function Search() {
  const [results, setResults] = useState<{ id: number; name: string }[]>([]);
  const [closed, setClosed] = useState(false);

  const ref = useOutsideClick(() => setClosed(true));

  const autocomplete = async (e: Event) => {
    if (e.target instanceof HTMLInputElement) {
      const results = await fetch(`/search?q=${e.target.value}`)
        .then((r) => r.json());

      setResults(results.data.hits.hits.map((h) => h._source));
    }
  };

  return (
    <form class="mb-4">
      <input
        onClick={() => setClosed(false)}
        onKeyUp={autocomplete}
        class="border p-2"
        type="text"
        placeholder="Search..."
      />
      {results.length > 0 && !closed &&
        (
          <div ref={ref} class="border p-4 absolute bg-white">
            {results.map((r) => <SearchResult name={r.name} id={r.id} />)}
          </div>
        )}
    </form>
  );
}
