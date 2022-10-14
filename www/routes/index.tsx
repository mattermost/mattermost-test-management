import { Head } from "$fresh/runtime.ts";

import Header from "../components/header.tsx";
import Footer from "../components/footer.tsx";
import NavigationBar from "../components/navigation_bar.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Test Management</title>
      </Head>
      <div class="flex flex-col min-h-screen">
        <Header />
        <NavigationBar active="/" />
        <div class="p-4 mx-auto max-w-screen-md">
          <p class="my-6">
            Welcome to Mattermost's Test Management portal! We're excited to
            have you join our community!
          </p>
          <p class="my-6">
            This app was developed so that writing of tests and the maintenance
            thereof could be opened to the broader community thereby enhancing
            openness and collaboration.
          </p>
          <p class="my-6">
            On this page, you'll find links to resources that will help you set
            up your local environment as well as easily get started with
            contributing to our suite of tests.
          </p>
          <p class="my-6">
            If you need help or have any questions, please post in the{" "}
            <a
              class="hover:underline text(blue-600 hover:blue-500)"
              href="https://community.mattermost.com/core/channels/test-plans"
              target="_blank"
            >
              QA: Test Management
            </a>{" "}
            channel on our{" "}
            <a
              class="hover:underline text(blue-600 hover:blue-500)"
              href="https://community.mattermost.com/signup_user_complete/?id=codoy5s743rq5mk18i7u5ksz7e"
              target="_blank"
            >
              Contributor's Team
            </a>{" "}
            and we'll be happy to help.
          </p>
        </div>
        <Footer />
      </div>
    </>
  );
}
