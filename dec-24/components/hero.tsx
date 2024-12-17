import MiskatonicLogo from "./miskatonic-logo";

export default function Header() {
  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="flex gap-8 justify-center items-center">
        <a
          href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
          target="_blank"
          rel="noreferrer"
        >
          <MiskatonicLogo />
        </a>
      </div>
      <p className="max-w-[700px] text-lg text-muted-foreground text-center">
            Stay informed about the latest discoveries, research, and events at the world's premier 
            institution for esoteric studies and forbidden knowledge.
      </p>
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
    </div>
  );
}
