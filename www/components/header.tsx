import Title from "./title.tsx";

export default function Header() {
  return (
    <div class="bg-gray-300">
      <header class="mx-auto max-w-screen-lg flex gap-3 justify-between">
        <div class="p-4 flex">
          <Logo />
          <div>
            <Title />
          </div>
        </div>
        <label
          for="docs_sidebar"
          class="px-4 py-4 md:hidden border(l-2 gray-200) flex items-center hover:bg-gray-100"
        >
          <svg
            class="h-6 w-6"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            >
            </path>
          </svg>
        </label>
      </header>
    </div>
  );
}

function Logo() {
  return (
    <a href="/" class="flex mr-3 items-center">
      <img
        src="/logo.svg"
        alt="Fresh logo"
        width={40}
        height={40}
      />
    </a>
  );
}
