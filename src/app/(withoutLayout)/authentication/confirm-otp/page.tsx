"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../../../../components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function ConfirmOtp({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <>
      <div className="flex min-h-screen flex-col lg:flex-row">
        <div className="flex h-40 flex-col items-center justify-center p-4 sm:bg-muted lg:h-auto lg:w-1/2">
          <Image src="/logo.svg" width={200} height={80} alt="asaman" />
          <h2 className="mt-2 text-center text-lg font-semibold text-gray-700">
            School Activity and Event Management System
          </h2>
        </div>

        <div className="flex flex-1 items-center justify-center p-6 lg:p-12">
          <div className="w-full max-w-md space-y-6">
            <div className="text-center">
              <h1 className="text-2xl font-semibold"> Update password</h1>
              <p className="text-sm text-muted-foreground">
                Enter the email address associated with your account and we'll
                send you a link to reset your password.
              </p>
            </div>

            <form className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>

              <Button type="submit" className="w-full">
                Reset password
              </Button>
            </form>

            <div className="text-center text-sm">
              <Link href="/" className="text-blue-600 hover:underline">
                Back to login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
