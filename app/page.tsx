import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className=" text-black mb-6 text-6xl font-bold">
              A better way to track your job application.
            </h1>
            <p className="text-muted-foreground mb-10 text-xl">
              Capture, organize, and track your job applications in one place.
            </p>
            <div className="flex flex-col items-center gap-4">
              <Link href="/sign-up">
                <Button
                  size="lg"
                  className="h-12 px-8 text-lg font-medium"
                >
                  Start for free <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <p className="text-sm text-muted-foreground">
                Free forever. No credit card required
              </p>
            </div>
          </div>
        </section>
        {/* Hero Images Section with Tabs */}
        <section className="border-t bg-white py-16">
          <div className="container mx-auto px-4">
            {/* Tabs */}
            <div className="mx-auto max-w-6xl">
              <div className="flex mb-8 justify-center gap-2">
                <Button>Organize Applications</Button>
                <Button>Get Hired</Button>
                <Button>Manage Boards</Button>
              </div>
              <div className="relative mx-auto max-w-5xl overflow-hidden rounded-lg border border-gray-200 shadow-xl">
                <Image
                  src="/hero-images/hero1.png"
                  alt="Organize Applications"
                  width={1200}
                  height={800}
                />
                <Image
                  src="/hero-images/hero2.png"
                  alt="Get Hired"
                  width={1200}
                  height={800}
                />
                <Image
                  src="/hero-images/hero3.png"
                  alt="Manage Boards"
                  width={1200}
                  height={800}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
