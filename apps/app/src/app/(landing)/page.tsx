import type { NextPage } from "next";
import Link from "next/link";
import { buttonVariants, cn } from "ui";

const Page: NextPage = () => {
  return (
    <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <Link
          className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
          href="#"
          target="_blank"
        >
          Follow along on Twitter
        </Link>
        <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
          An example app built using Next.js 13 server components.
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          I&apos;m building a web app with Next.js 13 and open sourcing
          everything. Follow along as we figure this out together.
        </p>
        <div className="space-x-4">
          <Link className={cn(buttonVariants({ size: "lg" }))} href="/login">
            Get Started
          </Link>
          <Link
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            href="#"
            rel="noreferrer"
            target="_blank"
          >
            GitHub
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Page;
