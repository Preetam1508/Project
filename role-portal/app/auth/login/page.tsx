"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");

  function handleMockAuth() {
    if (!emailOrPhone || !password) {
      alert("Please enter Email/Phone and Password");
      return;
    }
    router.push("/role-select");
  }

  function handleSocial(provider: "google" | "whatsapp") {
    alert(`Mock: Continue with ${provider}`);
    router.push("/role-select");
  }

  return (
    <div className="mx-auto max-w-md bg-white/50 dark:bg-black/20 rounded-lg p-6 shadow-sm">
      <h1 className="text-2xl font-bold text-center">Welcome to our Company</h1>
      <p className="text-center text-sm text-foreground/70 mt-1">By continuing, you agree to our <a className="underline" href="/terms">Terms</a>.</p>

      <div className="mt-6 space-y-3">
        <button onClick={() => handleSocial("google")} className="w-full border rounded-md py-2 text-sm hover:bg-foreground hover:text-background transition">Continue with Google</button>
        <button onClick={() => handleSocial("whatsapp")} className="w-full border rounded-md py-2 text-sm hover:bg-foreground hover:text-background transition">Continue with WhatsApp</button>
      </div>

      <div className="my-6 flex items-center gap-3 text-xs text-foreground/60">
        <div className="h-px bg-foreground/20 flex-1" />
        OR
        <div className="h-px bg-foreground/20 flex-1" />
      </div>

      <div className="space-y-3">
        <input
          value={emailOrPhone}
          onChange={(e) => setEmailOrPhone(e.target.value)}
          placeholder="Email ID / Phone Number"
          className="w-full border rounded-md px-3 py-2 text-sm bg-transparent"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full border rounded-md px-3 py-2 text-sm bg-transparent"
        />
        <div className="flex items-center justify-between text-sm">
          <button onClick={handleMockAuth} className="px-4 py-2 rounded bg-foreground text-background">Sign In</button>
          <a href="#" className="underline">Forgot Password</a>
        </div>
        <div className="text-center text-sm">
          New here? <a href="/auth/signup" className="underline">Create New Account</a>
        </div>
      </div>
    </div>
  );
}

