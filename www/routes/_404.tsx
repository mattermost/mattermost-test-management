import Header from '../components/header.tsx';
import NavigationBar from '../components/navigation_bar.tsx';

export function ServerCodePage(
  props: { serverCode: number; codeDescription: string },
) {
  return (
    <>
      <Header />
      <NavigationBar />
      <section class="mt-4">
        <div class="w-full flex justify-center items-center flex-col bg-blue-300">
        </div>
        <div class="text-center">
          <h1 class="text(6xl) md:text(9xl) font-extrabold">
            {props.serverCode}
          </h1>

          <p class="p-4 text(2xl) md:text(3xl)">
            {props.codeDescription}
          </p>

          <p class="p-4">
            <a href="/" class="hover:underline">Back to the Homepage</a>
          </p>
        </div>
      </section>
    </>
  );
}

export default function PageNotFound() {
  return ServerCodePage({
    serverCode: 404,
    codeDescription: "Couldn't find what you're looking for.",
  });
}
