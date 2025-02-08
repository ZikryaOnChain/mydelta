"use client";

import { useEffect } from "react";
import { Button } from "../components/ui/button";
import { Container } from "../components/ui/container";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <Container className="min-h-[50vh] flex items-center justify-center">
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">
          Something went wrong!
        </h2>
        <p className="text-gray-600">
          We apologize for the inconvenience. Please try again.
        </p>
        <div className="space-x-4">
          <Button onClick={reset}>Try again</Button>
          <Button variant="outline" onClick={() => window.location.href = "/"}>
            Go home
          </Button>
        </div>
      </div>
    </Container>
  );
}
