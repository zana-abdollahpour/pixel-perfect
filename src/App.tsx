import { EpicStackLogo, logos } from "@/logos/logos";

const columnClasses: Record<(typeof logos)[number]["column"], string> = {
  1: "xl:col-start-1",
  2: "xl:col-start-2",
  3: "xl:col-start-3",
  4: "xl:col-start-4",
  5: "xl:col-start-5",
};
const rowClasses: Record<(typeof logos)[number]["row"], string> = {
  1: "xl:row-start-1",
  2: "xl:row-start-2",
  3: "xl:row-start-3",
  4: "xl:row-start-4",
  5: "xl:row-start-5",
  6: "xl:row-start-6",
};

function clsx(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function App() {
  return (
    <div className="grid min-h-screen place-items-center px-4 py-16">
      <div className="grid place-items-center gap-12 sm:gap-16 xl:grid-cols-[auto_1fr] xl:gap-24">
        <div className="flex max-w-md flex-col items-center text-center xl:order-2 xl:items-start xl:text-left">
          <EpicStackLogo className="size-20" />
          <h1 className="mt-6 text-4xl font-medium sm:text-4.5xl md:mt-8 md:text-5xl lg:text-5.5xl">
            The <span className="text-highlight">Epic</span> Stack
          </h1>
          <p className="mt-4 text-slate-600 sm:text-lg md:mt-6 md:text-xl">
            Check the{" "}
            <a
              className="text-black underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-highlight"
              href="#"
            >
              Getting Started
            </a>{" "}
            guide file for how to get your project off the ground!
          </p>
        </div>
        <ul className="flex max-w-3xl flex-wrap justify-center gap-2 sm:gap-4 xl:grid xl:grid-flow-col xl:grid-cols-5 xl:grid-rows-6">
          {logos.map((logo) => (
            <li
              key={logo.href}
              className={clsx(columnClasses[logo.column], rowClasses[logo.row])}
            >
              <a
                href={logo.href}
                className="grid size-20 place-items-center rounded-2xl bg-highlight/[7%] p-4 transition hover:-rotate-6 hover:bg-highlight/10 focus:outline-none focus:ring-2 focus:ring-highlight focus:ring-offset-2 sm:size-24"
              >
                <img src={logo.src} alt={logo.alt} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
