import Container from "@/src/components/Container";

export default function Loading() {
  return (
    <Container>
      <main className="min-h-screen flex justify-center items-center min-w-full">
        <span className="loading loading-ring loading-lg  text-primary"></span>
      </main>
    </Container>
  );
}
