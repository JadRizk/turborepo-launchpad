import type { NextPage } from "next";
import Link from "next/link";
import { buttonVariants, cn } from "ui";

const Page: NextPage = () => {
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            A turbo app built using Next.js 14 server components and shadcn.
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            I&apos;m building a web app with Next.js 14 and open sourcing
            everything.
          </p>
          <Link className={cn(buttonVariants({ size: "lg" }))} href="/login">
            Get Started
          </Link>
        </div>
      </section>
      <section className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Coming Soon
          </h2>
        </div>
      </section>
    </>
  );
};

export default Page;
