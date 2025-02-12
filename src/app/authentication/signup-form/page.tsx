import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function AuthenticationPage() {
  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      {/* Left Section - Logo */}
      <div className="flex w-full items-center justify-center sm:bg-muted p-4 lg:w-1/2">
        <Image src="/logo.svg" width={200} height={80} alt="asaman" />
      </div>

      {/* Right Section - Form */}
      <div className="flex flex-1 items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center">
            <h1 className="text-2xl font-semibold">Create an account</h1>
            <p className="text-sm text-muted-foreground">
              Enter your details below to create an account
            </p>
          </div>

          <form className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" type="text" placeholder="Enter name" required />
            </div>
            <div>
              <Label htmlFor="person-image">Person Image</Label>
              <Input id="person-image" type="file" required />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" required />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required />
            </div>
            <div>
              <Label htmlFor="school-name">School Name</Label>
              <Input id="school-name" type="text" placeholder="Enter school name" required />
            </div>
            <div>
              <Label htmlFor="school-image">School Image</Label>
              <Input id="school-image" type="file" required />
            </div>
            <div>
              <Label htmlFor="address">Address</Label>
              <Input id="address" type="text" placeholder="Enter address" required />
            </div>
            <div>
              <Label htmlFor="city">City</Label>
              <Input id="city" type="text" placeholder="Enter city" required />
            </div>
            <div>
              <Label htmlFor="province">Province</Label>
              <Input id="province" type="text" placeholder="Enter province" required />
            </div>
           
            <Button type="submit" className="w-full">
              Sign up
            </Button>
          </form>

          <div className="text-center text-sm">
          Already have an account?
            <Link
              href="/"
              className="text-blue-600 hover:underline"
            >
               &nbsp;Login
            </Link>
          </div>

          <p className="text-center text-xs text-muted-foreground">
            By clicking continue, you agree to our{" "}
            <Link href="#" className="text-blue-600 hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-blue-600 hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
