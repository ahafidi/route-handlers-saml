import ProtectedComponent from "@/components/Protected"
import Link from "next/link"

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">
        Hello
      </h1>

      <Link href="/login" className="block text-emerald-700 hover:text-emerald-600">Login (SSO)</Link>

      <Link href="/protected" className="block text-orange-700 hover:text-orange-600"> -&gt; Protected Route</Link>

      <ProtectedComponent />
    </main>
  )
}
