import Link from "next/link";
import Nav from "@/components/Nav";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main id="main" className="mx-auto max-w-[1500px] px-6 pb-24 pt-40 md:px-10">
        <p className="font-hand text-3xl text-burnt">404</p>
        <h1 className="mt-2 text-[clamp(3rem,10vw,9rem)] font-extrabold leading-[0.9] tracking-[-0.05em]">
          Nothing here.
        </h1>
        <p className="mt-6 max-w-md text-xl text-muted">
          That page doesn&apos;t exist, or it moved. The work is on the home page.
        </p>
        <Link href="/#work" className="u-link mt-8 inline-block text-lg font-semibold">
          Back to my work →
        </Link>
      </main>
    </>
  );
}
