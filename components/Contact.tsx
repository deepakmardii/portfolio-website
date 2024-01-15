import { SiGooglemaps } from "react-icons/si";

export const Contact: React.FC = () => {
  return (
    <div className="mx-auto flex flex-col items-center justify-center gap-20 px-2 pb-16 pt-36 sm:px-8 lg:flex-row lg:py-20">
      <article className="grid max-w-2xl flex-1 gap-10 text-center">
        <h1 className="text-4xl font-extrabold uppercase tracking-widest">
          Contact
        </h1>

        <p className="max-w-lg text-sm leading-8 tracking-wider text-neutral-400">
          Whether you&apos;re interested in networking, or career advice, or
          want to have a casual conversation, I look forward to communicating
          with you and learning from our interactions!
          <br />
          <span className="underline opacity-30">PS: Forms comming soon!!</span>
        </p>

        <div className="grid gap-10 text-sm">
          <div className="grid gap-2">
            <h2 className="text-lg font-bold tracking-widest">Address</h2>
            <p className="flex items-center justify-center tracking-wider text-neutral-400">
              <SiGooglemaps />
              &nbsp; Earth
            </p>
          </div>
          <div className="grid gap-2">
            <h2 className="text-lg font-bold tracking-widest">Email</h2>
            <p className="tracking-wider text-neutral-400">
              <a
                href="mailto:deepakmardi22@gmail.com"
                className="underline-offset-2 hover:underline"
              >
                deepakmardi22@gmail.com
              </a>
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};
