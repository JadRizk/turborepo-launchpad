import type { NextPage } from "next";
import Link from "next/link";
import { buttonVariants, cn, Skeleton } from "ui";

const Page: NextPage = () => {
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
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
      <section className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Coming Soon
          </h2>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          {Array.from({ length: 6 }).map((_, idx) => (
            <div
              className="relative overflow-hidden rounded-lg border bg-background p-2"
              key={`feature-${idx}`}
            >
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <Skeleton className="w-[75px] h-[75px]" />
                <div className="space-y-2">
                  <Skeleton className="w-[250px] h-[10px] rounded-full" />
                  <Skeleton className="w-[150px] h-[10px] rounded-full" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Page;
