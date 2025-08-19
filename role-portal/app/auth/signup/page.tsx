"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignupPage() {
  const router = useRouter();
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");

  function handleCreateAccount() {
    if (!emailOrPhone || !password) {
      alert("Please enter Email/Phone and Password");
      return;
    }
    router.push("/role-select");
  }

  return (
    <div className="mx-auto max-w-md bg-white/50 dark:bg-black/20 rounded-lg p-6 shadow-sm">
      <h1 className="text-2xl font-bold text-center">Create your account</h1>
      <p className="text-center text-sm text-foreground/70 mt-1">By continuing, you agree to our <a className="underline" href="/terms">Terms</a>.</p>
      <div className="mt-6 space-y-3">
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
        <button onClick={handleCreateAccount} className="w-full px-4 py-2 rounded bg-foreground text-background">Create Account</button>
      </div>
    </div>
  );
}

