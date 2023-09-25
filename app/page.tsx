import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import TypewriterTitle from "@/components/typewriter-title"

export default function Home() {
  return (
    <div className="grainy min-h-screen bg-gradient-to-r from-rose-100 to-teal-100">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-center text-7xl font-semibold">
          AI <span className="font-bold text-green-600">note taking</span>{" "}
          assistant.
        </h1>

        <h2 className="mt-4 text-center text-3xl font-semibold text-slate-700">
          <TypewriterTitle />
        </h2>

        <div className="mt-8 flex justify-center">
          <Link href="/dashboard">
            <Button className="bg-green-600">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" strokeWidth={3} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
