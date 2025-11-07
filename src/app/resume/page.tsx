import Link from "next/link";

export const metadata = {
  title: "Resume — The Grid of MikeroDev",
  description: "Download the resume of mikerodev.",
};

export default function ResumePage() {
  const resumePath = "/resume.pdf";
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-semibold text-cyan-300">Resume</h1>
      <p className="text-zinc-300">You can view or download my resume using the links below.</p>
      <div className="flex gap-4">
        <Link
          href={resumePath}
          target="_blank"
          className="rounded-md border border-cyan-500/50 bg-cyan-500/10 px-4 py-2 text-cyan-100 hover:bg-cyan-500/20"
        >
          View Resume (PDF)
        </Link>
        <a
          href={resumePath}
          download
          className="rounded-md border border-cyan-500/30 px-4 py-2 text-cyan-200 hover:border-cyan-400/60"
        >
          Download PDF
        </a>
      </div>
      <p className="text-xs text-zinc-500">Place a file named <code>resume.pdf</code> in the <code>public/</code> folder to enable the links.</p>
    </section>
  );
}
