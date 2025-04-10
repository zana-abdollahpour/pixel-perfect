import { EpicStackLogo, logos } from "@/assets/logos";

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
      <div className="grid place-items-center gap-12 sm:gap-16 xl:max-w-7xl xl:grid-cols-[auto_1fr] xl:gap-x-24 xl:gap-y-4">
        <div
          className={clsx(
            "flex max-w-md flex-col items-center text-center xl:text-left",
            "xl:col-start-2 xl:row-span-2 xl:row-start-3 xl:grid xl:max-w-none xl:grid-cols-[auto_1fr] xl:grid-rows-subgrid xl:gap-4",
          )}
        >
          <EpicStackLogo
            className={clsx(
              "size-20",
              // Animation
              "animate-slide-top",
              "xl:animate-slide-left xl:[animation-delay:0.5s]",
            )}
          />
          <h1
            className={clsx(
              "sm:text-4.5xl lg:text-5.5xl mt-6 text-4xl font-medium md:mt-8 md:text-5xl xl:mt-0",
              // Animation
              "animate-slide-top [animation-delay:0.3s]",
              "xl:animate-slide-left xl:[animation-delay:0.8s]",
            )}
          >
            The <span className="text-highlight">Epic</span> Stack
          </h1>
          <p
            className={clsx(
              "mt-4 text-slate-600 sm:text-lg md:mt-6 md:text-xl xl:mt-0",
              "xl:col-span-2",
              // Animation
              "animate-slide-top [animation-delay:0.8s]",
              "xl:animate-slide-left xl:[animation-delay:1.3s]",
            )}
          >
            Check the{" "}
            <a
              className="focus:ring-highlight text-black underline hover:no-underline focus:ring-2 focus:outline-hidden"
              href="#"
            >
              Getting Started
            </a>{" "}
            guide file for how to get your project off the ground!
          </p>
        </div>
        <ul className="flex max-w-3xl flex-wrap justify-center gap-2 sm:gap-4 xl:row-span-6 xl:grid xl:grid-flow-col xl:grid-cols-5 xl:grid-rows-subgrid">
          {logos.map((logo, i) => (
            <li
              key={logo.href}
              style={{ "--loop-index": i } as React.CSSProperties}
              className={clsx(
                columnClasses[logo.column],
                rowClasses[logo.row],
                "animate-fade-in motion-safe:animate-roll-reveal",
                "motion-safe:[animation-delay:calc(0.07s*var(--loop-index))]",
              )}
            >
              <a
                href={logo.href}
                className="bg-highlight/[7%] hover:bg-highlight/10 focus:ring-highlight grid size-20 place-items-center rounded-2xl p-4 transition hover:-rotate-6 focus:ring-2 focus:ring-offset-2 focus:outline-hidden sm:size-24"
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
