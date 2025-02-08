import { Container } from "../components/ui/container";

export default function Loading() {
  return (
    <Container className="min-h-[50vh] flex items-center justify-center">
      <div className="flex items-center space-x-4">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
        <span className="text-lg text-gray-700">Loading...</span>
      </div>
    </Container>
  );
}
