"use client";

import { useParams, useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { Button, Input, Section, Select } from "@/components/ui";

type RoleKey = "admin" | "worker" | "registered-user" | "non-registered-user";

export default function RoleProfilePage() {
  const params = useParams<{ role: RoleKey }>();
  const router = useRouter();
  const role = params.role;

  const [step, setStep] = useState(1);
  const [otpSent, setOtpSent] = useState<{ email?: boolean; phone?: boolean }>({});
  const [otpValue, setOtpValue] = useState("");

  const roleTitle = useMemo(() => {
    const map: Record<RoleKey, string> = {
      "admin": "Admin",
      "worker": "Worker",
      "registered-user": "Registered User",
      "non-registered-user": "Non-Registered User",
    };
    return map[role];
  }, [role]);

  function handleNext() {
    setStep((s) => s + 1);
  }

  function handleBack() {
    setStep((s) => Math.max(1, s - 1));
  }

  function sendOtp(type: "email" | "phone") {
    setOtpSent((prev) => ({ ...prev, [type]: true }));
    alert(`Mock: OTP sent to ${type}`);
  }

  function verifyOtp() {
    if (otpValue.trim().length < 4) {
      alert("Enter the 4+ digit OTP");
      return;
    }
    alert("OTP verified (mock)");
    router.push("/terms");
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">{roleTitle} Profile</h1>

      {role === "admin" && (
        <>
          {step === 1 && (
            <Section title="Step 1 – Profile Details">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input label="Username" />
                <Input label="Password" type="password" />
                <Input label="Name" />
                <Input label="Email ID" type="email" />
                <Input label="Phone Number" />
              </div>
              <div className="mt-4 flex justify-end gap-2">
                <Button onClick={handleNext}>Continue</Button>
              </div>
            </Section>
          )}
          {step === 2 && (
            <Section title="Step 2 – OTP Verification">
              <div className="space-y-3">
                <div className="flex gap-2">
                  <Button variant="secondary" onClick={() => sendOtp("email")}>{otpSent.email ? "Resend OTP to Email" : "Send OTP to Email"}</Button>
                  <Button variant="secondary" onClick={() => sendOtp("phone")}>{otpSent.phone ? "Resend OTP to Phone" : "Send OTP to Phone"}</Button>
                </div>
                <Input label="Enter OTP" value={otpValue} onChange={(e) => setOtpValue(e.target.value)} />
                <div className="flex justify-between">
                  <Button variant="secondary" onClick={handleBack}>Back</Button>
                  <Button onClick={verifyOtp}>Verify</Button>
                </div>
              </div>
            </Section>
          )}
        </>
      )}

      {role === "registered-user" && (
        <>
          {step === 1 && (
            <Section title="Step 1 – Personal Details">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input label="Username" />
                <Input label="Password" type="password" />
                <Input label="Name" />
                <Input label="Age" type="number" />
                <Input label="Email ID" type="email" />
                <Input label="Address" />
                <Input label="Aadhaar Number" />
                <Input label="Phone Number" />
                <Input label="Number of Workers" type="number" />
              </div>
              <div className="mt-4 flex justify-end gap-2">
                <Button onClick={handleNext}>Continue</Button>
              </div>
            </Section>
          )}
          {step === 2 && (
            <Section title="Step 2 – Company Details">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input label="Registered Company Name / ID" />
                <Input label="Type of Company" />
                <Input label="GST Number" />
                <Input label="Number of Directors" type="number" />
                <Input label="MOA / AOA / GST / PAN documents (links)" />
              </div>
              <div className="mt-4 flex justify-between gap-2">
                <Button variant="secondary" onClick={handleBack}>Back</Button>
                <Button onClick={handleNext}>Continue</Button>
              </div>
            </Section>
          )}
          {step === 3 && (
            <Section title="Step 3 – OTP Verification">
              <div className="space-y-3">
                <div className="flex gap-2">
                  <Button variant="secondary" onClick={() => sendOtp("email")}>{otpSent.email ? "Resend OTP to Email" : "Send OTP to Email"}</Button>
                  <Button variant="secondary" onClick={() => sendOtp("phone")}>{otpSent.phone ? "Resend OTP to Phone" : "Send OTP to Phone"}</Button>
                </div>
                <Input label="Enter OTP" value={otpValue} onChange={(e) => setOtpValue(e.target.value)} />
                <div className="flex justify-between">
                  <Button variant="secondary" onClick={handleBack}>Back</Button>
                  <Button onClick={verifyOtp}>Verify</Button>
                </div>
              </div>
            </Section>
          )}
        </>
      )}

      {role === "non-registered-user" && (
        <>
          {step === 1 && (
            <Section title="Step 1 – Profile Details">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input label="Username" />
                <Input label="Password" type="password" />
                <Input label="Name" />
                <Input label="Age" type="number" />
                <Input label="Email ID" type="email" />
                <Select label="Gender" defaultValue="">
                  <option value="" disabled>Choose</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </Select>
                <Input label="Address" />
                <Input label="Aadhaar Number" />
                <Input label="Phone Number" />
                <Select label="Number of Workers" defaultValue="">
                  <option value="" disabled>Choose</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </Select>
              </div>
              <div className="mt-4 flex justify-end gap-2">
                <Button onClick={handleNext}>Continue</Button>
              </div>
            </Section>
          )}
          {step === 2 && (
            <Section title="Step 2 – OTP Verification">
              <div className="space-y-3">
                <div className="flex gap-2">
                  <Button variant="secondary" onClick={() => sendOtp("email")}>{otpSent.email ? "Resend OTP to Email" : "Send OTP to Email"}</Button>
                  <Button variant="secondary" onClick={() => sendOtp("phone")}>{otpSent.phone ? "Resend OTP to Phone" : "Send OTP to Phone"}</Button>
                </div>
                <Input label="Enter OTP" value={otpValue} onChange={(e) => setOtpValue(e.target.value)} />
                <div className="flex justify-between">
                  <Button variant="secondary" onClick={handleBack}>Back</Button>
                  <Button onClick={verifyOtp}>Verify</Button>
                </div>
              </div>
            </Section>
          )}
        </>
      )}

      {role === "worker" && (
        <>
          {step === 1 && (
            <Section title="Step 1 – Profile Details">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input label="Username" />
                <Input label="Password" type="password" />
                <Input label="Name" />
                <Input label="Age" type="number" />
                <Input label="Email ID" type="email" />
                <Select label="Gender" defaultValue="">
                  <option value="" disabled>Choose</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </Select>
                <Input label="Height" />
                <Input label="Weight" />
                <Input label="Address" />
                <Input label="Aadhaar Number" />
                <Input label="Phone Number" />
                <Select label="Work Experience" defaultValue="">
                  <option value="" disabled>Choose</option>
                  <option>1 year</option>
                  <option>2 years</option>
                  <option>3 years</option>
                  <option>More than 3 years</option>
                </Select>
                <Input label="Field of Work (specify)" />
                <Input label="Profile Photo URL" />
              </div>
              <div className="mt-4 flex justify-end gap-2">
                <Button onClick={handleNext}>Continue</Button>
              </div>
            </Section>
          )}
          {step === 2 && (
            <Section title="Step 2 – OTP Verification">
              <div className="space-y-3">
                <div className="flex gap-2">
                  <Button variant="secondary" onClick={() => sendOtp("email")}>{otpSent.email ? "Resend OTP to Email" : "Send OTP to Email"}</Button>
                  <Button variant="secondary" onClick={() => sendOtp("phone")}>{otpSent.phone ? "Resend OTP to Phone" : "Send OTP to Phone"}</Button>
                </div>
                <Input label="Enter OTP" value={otpValue} onChange={(e) => setOtpValue(e.target.value)} />
                <div className="flex justify-between">
                  <Button variant="secondary" onClick={handleBack}>Back</Button>
                  <Button onClick={verifyOtp}>Verify</Button>
                </div>
              </div>
            </Section>
          )}
        </>
      )}
    </div>
  );
}

