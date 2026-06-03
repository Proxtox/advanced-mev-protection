"use client";

export default function ReportsPage() {
  return (
    <div className="max-w-2xl mx-auto mt-10 p-8">
      <h1 className="text-3xl font-bold mb-8">MEV Reports</h1>
      <div className="p-6 border rounded-2xl">
        <p className="mb-4">Generate and view MEV protection reports.</p>
        <button className="w-full bg-purple-600 text-white py-3 rounded-2xl">Generate Report</button>
      </div>
    </div>
  );
}