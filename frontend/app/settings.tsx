"use client";

export default function SettingsPage() {
  return (
    <div className="max-w-2xl mx-auto mt-10 p-8">
      <h1 className="text-3xl font-bold mb-8">MEV Protection Settings</h1>
      <div className="p-6 border rounded-2xl">
        <p className="mb-4">Configure your MEV protection preferences.</p>
        <button className="w-full bg-purple-600 text-white py-3 rounded-2xl">Save Settings</button>
      </div>
    </div>
  );
}