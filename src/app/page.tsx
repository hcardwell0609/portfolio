import Navbar from "@/components/layout/Navbar";
import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <>
      <Navbar />

      <Header />

    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold">Hunter Cardwell</h1>
      <p className="mt-4 text-lg">
        Full-Stack Developer building business applications, APIs, automation systems, and backend tools.
      </p>
    </main>
    </>
  );
}