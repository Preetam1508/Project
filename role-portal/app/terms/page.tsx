"use client";

import { useState } from "react";

export default function TermsPage() {
  const [agreed, setAgreed] = useState(false);
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Terms & Conditions</h1>
      <div className="prose max-w-none text-sm leading-6">
        <p>These sample terms outline acceptable use, privacy, and other conditions for using the portal. Replace with your company policy.</p>
        <ul>
          <li>Do not share your credentials.</li>
          <li>Provide accurate information.</li>
          <li>All actions are logged for security.</li>
        </ul>
      </div>
      <label className="flex items-center gap-2 text-sm">
        <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} />
        I agree to the Terms and Conditions
      </label>
      <button disabled={!agreed} className="px-4 py-2 rounded bg-foreground text-background disabled:opacity-50">Continue</button>
    </div>
  );
}

