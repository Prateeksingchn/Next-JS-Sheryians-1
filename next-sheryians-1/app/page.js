import Nav from "@/components/Nav";
import React from "react";

const page = () => {
  return (
    <div>
      <section class="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div class="container px-4 md:px-6">
          <div class="flex flex-col items-center space-y-4 text-center">
            <div class="flex flex-col items-center space-y-2">
              {/* <h1 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                The fastest way to build the Web
              </h1> */}
              <p class="mx-auto max-w-[700px] text-gray-500 md:text-2xl font-bold dark:text-gray-400">
                The platform for the future of the web. Sign up to be the first
                to experience it.
              </p>
            </div>
            <div class="w-full max-w-sm space-y-2">
              <form class="grid gap-2">
                <input
                  class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  type="email"
                  placeholder="Enter your email"
                />
                <input
                  class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Enter your name"
                />
                <button
                  class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                  type="submit"
                >
                  Sign Up
                </button>
              </form>
              <p class="text-xs text-gray-500 dark:text-gray-400">
                Sign up to get notified when we launch.
                <a class="underline underline-offset-2" href="#">
                  Terms &amp; Conditions
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
