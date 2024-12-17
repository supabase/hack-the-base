"use client";

import { useState, useEffect } from 'react';
import { signUpAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { SmtpMessage } from "../smtp-message";
import HCaptcha from '@hcaptcha/react-hcaptcha';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setIsEmailValid(value.endsWith('@miskatonicuniversity.us'));
  };

  return (
    <>
      <form className="flex flex-col min-w-64 max-w-64 mx-auto">
        <h1 className="text-2xl font-medium">Sign up</h1>
        <p className="text-sm text text-foreground">
          Already have an account?{" "}
          <Link className="text-primary font-medium underline" href="/sign-in">
            Sign in
          </Link>
        </p>
        <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
          <Label htmlFor="email">Email</Label>
          <Input
            name="email"
            placeholder="you@miskatonicuniversity.us"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            name="password"
            placeholder="Your password"
            minLength={6}
            required
          />
          <HCaptcha
            sitekey="10a4e33c-3e66-49ae-926c-918809e0cdb2"
          />
          <SubmitButton formAction={signUpAction} pendingText="Signing up..." disabled={!isEmailValid}>
            Sign up
          </SubmitButton>
        </div>
      </form>
      <SmtpMessage />
    </>
  );
}
