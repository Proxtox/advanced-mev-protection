"use client";

export default function ProtectPage() {
  return (
    <div className="max-w-2xl mx-auto mt-10 p-8">
      <h1 className="text-3xl font-bold mb-8">MEV Protection</h1>
      <div className="p-6 border rounded-2xl">
        <p className="mb-4">Protect your transactions from MEV.</p>
        <button className="w-full bg-purple-600 text-white py-3 rounded-2xl">Protect Transaction</button>
      </div>
    </div>
  );
}