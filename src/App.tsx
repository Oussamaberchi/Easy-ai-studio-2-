import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import About from "./components/tabs/About";
import ProductStudio from "./components/tabs/ProductStudio";
import AIGenerator from "./components/tabs/AIGenerator";
import MockupStudio from "./components/tabs/MockupStudio";
import clsx from "clsx";

export type TabKey = "about" | "product" | "imagine" | "mockup";

export default function App(){
  const [activeTab, setActiveTab] = useState<TabKey>("about");
  const [processing, setProcessing] = useState(false);

  return (
    <div className="min-h-screen flex">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className={clsx("flex-1 p-6 transition-colors", {"opacity-60": processing})}>
        <div className="max-w-6xl mx-auto">
          {activeTab === "about" && <About />}
          {activeTab === "product" && <ProductStudio setProcessing={setProcessing} />}
          {activeTab === "imagine" && <AIGenerator setProcessing={setProcessing} />}
          {activeTab === "mockup" && <MockupStudio setProcessing={setProcessing} />}
        </div>
      </main>
    </div>
  );
}
