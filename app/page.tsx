import { Routes } from "@/models";
import Link from "next/link";
import Script from "next/script";
import { Suspense, lazy } from "react";

const Card = lazy(()=> import("@/components/card/Card"))

function App() {
  return (
    <Suspense fallback={<>Loading</>}>
      <Script strategy="beforeInteractive" src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.3.6/axios.min.js" />
      <h1>Welcome to Rick and Morthy app</h1>
      <h2>Que quieres hacer?</h2>
      <div style={{ display: "flex", gap: "10px" }}>
        <Link href={Routes.HOME}>Home</Link>
        <Link href={Routes.CHARACTER}>Character</Link>
        <Link href={Routes.LOCATIONS}>Locations</Link>
      </div>
    </Suspense>
  );
}

export default App;