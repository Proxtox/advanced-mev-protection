"use client";

import { useState } from 'react';

export default function MEVProtection() {
  const [tx, setTx] = useState('');

  const handleProtect = () => {
    alert(`Protecting transaction: ${tx} (demo)`);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-8 border rounded-3xl">
      <h1 className="text-3xl font-bold mb-8 text-center">Advanced MEV Protection</h1>

      <div className="space-y-4">
        <input type="text" value={tx} onChange={(e) => setTx(e.target.value)} className="w-full p-4 border rounded-2xl" placeholder="Transaction Data" />
        <button onClick={handleProtect} className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-2xl text-lg font-semibold">
          Protect Transaction
        </button>
      </div>
    </div>
  );
}