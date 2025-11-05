import React from "react";
import { TabKey } from "../App";
import clsx from "clsx";

export default function Sidebar({ activeTab, setActiveTab }:{ activeTab: TabKey; setActiveTab: (t: TabKey)=>void }){
  const items: { key: TabKey; label: string; icon: string }[] = [
    { key: "about", label: "About", icon: "fa-solid fa-circle-info" },
    { key: "product", label: "Studio Pro", icon: "fa-solid fa-cube" },
    { key: "imagine", label: "Imagine", icon: "fa-solid fa-wand-magic-sparkles" },
    { key: "mockup", label: "Mockup", icon: "fa-solid fa-shirt" },
  ];

  return (
    <aside className="w-72 bg-white border-r min-h-screen p-5">
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Easy AI Studio</h2>
        <div className="text-sm text-gray-500">Local Prototype</div>
      </div>

      <nav className="space-y-2">
        {items.map(it=>(
          <button key={it.key} onClick={()=>setActiveTab(it.key)}
            className={clsx("w-full text-left px-3 py-2 rounded-md flex items-center gap-3", {
              "bg-indigo-600 text-white": activeTab === it.key,
              "text-gray-700 hover:bg-gray-100": activeTab !== it.key,
            })}
          >
            <i className={it.icon}></i>
            <span>{it.label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-6 pt-4 border-t">
        <div className="text-xs text-gray-500">Quick tips</div>
        <ul className="mt-2 text-sm text-gray-600 space-y-1">
          <li>Use clear English prompts</li>
          <li>Upload high-quality product images</li>
        </ul>
      </div>
    </aside>
  );
}
