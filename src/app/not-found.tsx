import { Button } from "../components/ui/button";
import { Container } from "../components/ui/container";

export default function NotFound() {
  return (
    <Container className="min-h-[50vh] flex items-center justify-center">
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">404 - Page Not Found</h2>
        <p className="text-gray-600">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Button onClick={() => window.location.href = "/"}>
          Return Home
        </Button>
      </div>
    </Container>
  );
} 