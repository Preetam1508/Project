"use client";

import { useRouter } from "next/navigation";

const roles = [
  { key: "admin", label: "Admin" },
  { key: "worker", label: "Worker" },
  { key: "registered-user", label: "Registered User" },
  { key: "non-registered-user", label: "Non-Registered User" },
];

export default function RoleSelectPage() {
  const router = useRouter();

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Select your role</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {roles.map((r) => (
          <button
            key={r.key}
            onClick={() => router.push(`/profiles/${r.key}`)}
            className="border rounded-lg p-6 text-left hover:bg-foreground hover:text-background transition"
          >
            <div className="text-lg font-semibold">{r.label}</div>
            <div className="text-sm opacity-70 mt-1">Fill out the multi-step profile form for {r.label}.</div>
          </button>
        ))}
      </div>
    </div>
  );
}

