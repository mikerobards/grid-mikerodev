export default function ProjectsPage() {
  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-semibold text-cyan-300">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1,2,3,4].map((i) => (
          <div key={i} className="group relative overflow-hidden rounded-lg border border-cyan-500/30 bg-black/40 p-5">
            <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-cyan-500/20 group-hover:ring-cyan-400/40 transition-all" />
            <div className="h-32 mb-3 rounded bg-gradient-to-tr from-cyan-900/30 via-slate-900 to-black border border-cyan-500/20" />
            <h3 className="text-cyan-200 font-medium">Project {i}</h3>
            <p className="text-sm text-zinc-400">Coming soon.</p>
          </div>
        ))}
      </div>
    </section>
  );
}
