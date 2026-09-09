import { useState } from "react";
export default function App(){
  const [email,setEmail]=useState(""); const [count,setCount]=useState(128);
  function join(){ if(!email.includes("@")) return alert("Enter email"); setCount(c=>c+1); setEmail(""); }
  return (
    <main className="bg-[#fdfcfa] min-h-screen text-[#1a1a1a]">
      <div className="mx-auto max-w-md px-6 py-16 text-center">
        <h1 className="text-3xl font-light">waitlist-kit</h1>
        <p className="mt-2 text-[#5a5754]">Collect your first 1000 — {count} already joined.</p>
        <div className="mt-6 flex gap-2">
          <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@example.com" className="flex-1 rounded-xl border border-[#ebe7e0] px-3 py-2 text-sm" />
          <button onClick={join} className="rounded-xl bg-[#1a1a1a] px-4 py-2 text-sm text-white">Join</button>
        </div>
        <p className="mt-3 text-xs text-[#9a9590]">Resend-ready API at /api/waitlist</p>
      </div>
    </main>
  );
}
