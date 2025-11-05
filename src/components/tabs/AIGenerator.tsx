import React, { useState } from "react";

export default function AIGenerator({ setProcessing }:{ setProcessing?: (v:boolean)=>void }){
  const [prompt, setPrompt] = useState("");
  const [negative, setNegative] = useState("");
  const [resultUrl, setResultUrl] = useState<string|null>(null);

  async function generateMock(){
    if(setProcessing) setProcessing(true);
    await new Promise(res=>setTimeout(res, 900));
    // mock placeholder
    setResultUrl("https://placehold.co/800x600?text=AI+Generated");
    if(setProcessing) setProcessing(false);
  }

  return (
    <section className="bg-white p-6 rounded-xl shadow-sm">
      <h2 className="text-lg font-semibold mb-4">AI Image Generator</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Describe the image</label>
        <textarea rows={5} value={prompt} onChange={(e)=>setPrompt(e.target.value)} className="w-full border rounded p-2" placeholder="e.g., A photorealistic astronaut on Mars"></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Negative prompt (optional)</label>
        <textarea rows={2} value={negative} onChange={(e)=>setNegative(e.target.value)} className="w-full border rounded p-2" placeholder="e.g., blurry, text"></textarea>
      </div>
      <div className="flex gap-3">
        <button onClick={generateMock} className="px-4 py-2 bg-indigo-600 text-white rounded">Generate Image</button>
        <button onClick={()=>{ if(resultUrl){ const a=document.createElement('a'); a.href=resultUrl; a.download='ai.png'; a.click(); } }} className="px-4 py-2 border rounded">Download</button>
      </div>

      <div className="mt-6 border rounded p-4 min-h-[280px] flex items-center justify-center">
        {resultUrl ? <img src={resultUrl} alt="ai" className="max-h-96 rounded" /> : <div className="text-gray-400">No generated image yet</div>}
      </div>
    </section>
  );
}
