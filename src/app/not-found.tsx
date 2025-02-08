"use client";

import { buttonVariants } from "../components/ui/button";
import { Container } from "../components/ui/container";
import Link from "next/link";

export default function NotFound() {
  return (
    <Container className="min-h-[50vh] flex items-center justify-center">
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">404 - Page Not Found</h2>
        <p className="text-gray-600">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" className={buttonVariants({ variant: "default" })}>
          Return Home
        </Link>
      </div>
    </Container>
  );
} 