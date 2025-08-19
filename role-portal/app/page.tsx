export default function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Welcome to our Company</h1>
      <p className="text-foreground/70">Use the links above to login, select a role, and complete your profile.</p>
      <div className="flex gap-3">
        <a href="/auth/login" className="px-4 py-2 rounded bg-foreground text-background text-sm">Login / Sign Up</a>
        <a href="/role-select" className="px-4 py-2 rounded border border-black/[.08] dark:border-white/[.145] text-sm">Role Selection</a>
        <a href="/terms" className="px-4 py-2 rounded border border-black/[.08] dark:border-white/[.145] text-sm">Terms & Conditions</a>
      </div>
    </div>
  );
}
