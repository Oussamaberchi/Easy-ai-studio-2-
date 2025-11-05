import React, { useState, ChangeEvent } from "react";

export default function ProductStudio({ setProcessing }:{ setProcessing?: (v:boolean)=>void }){
  const [productFile, setProductFile] = useState<File|null>(null);
  const [productPreview, setProductPreview] = useState<string|null>(null);
  const [refFile, setRefFile] = useState<File|null>(null);
  const [refPreview, setRefPreview] = useState<string|null>(null);
  const [prompt, setPrompt] = useState("");
  const [negative, setNegative] = useState("");
  const [resultUrl, setResultUrl] = useState<string|null>(null);

  function handleFileChange(e: ChangeEvent<HTMLInputElement>, setterFile: any, setterPreview: any){
    const f = e.target.files && e.target.files[0];
    if(!f) return;
    setterFile(f);
    const reader = new FileReader();
    reader.onload = () => setterPreview(reader.result as string);
    reader.readAsDataURL(f);
  }

  function clearFile(setterFile: any, setterPreview: any){
    setterFile(null);
    setterPreview(null);
  }

  async function generateMock(){
    if(setProcessing) setProcessing(true);
    // Mock generation: for now just combine previews or show placeholder
    await new Promise(res=>setTimeout(res, 1000));
    if(productPreview) setResultUrl(productPreview);
    else if(refPreview) setResultUrl(refPreview);
    else setResultUrl("https://placehold.co/600x400?text=Generated+Image");
    if(setProcessing) setProcessing(false);
  }

  return (
    <section className="bg-white p-6 rounded-xl shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Product Studio (Composite Engine)</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">1. Product Image</label>
            <div className="border rounded-lg p-3">
              <input type="file" accept="image/*" onChange={(e)=>handleFileChange(e, setProductFile, setProductPreview)} />
              {productPreview && <img src={productPreview} alt="product" className="mt-3 max-h-64 rounded" />}
              {productPreview && <button className="mt-2 text-sm text-red-500" onClick={()=>clearFile(setProductFile, setProductPreview)}>Clear</button>}
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">2. Reference Image (optional)</label>
            <div className="border rounded-lg p-3">
              <input type="file" accept="image/*" onChange={(e)=>handleFileChange(e, setRefFile, setRefPreview)} />
              {refPreview && <img src={refPreview} alt="ref" className="mt-3 max-h-64 rounded" />}
              {refPreview && <button className="mt-2 text-sm text-red-500" onClick={()=>clearFile(setRefFile, setRefPreview)}>Clear</button>}
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">3. Prompt</label>
            <textarea value={prompt} onChange={(e)=>setPrompt(e.target.value)} rows={3} className="w-full border rounded p-2" placeholder="e.g., Bright studio shot of the product on white background"></textarea>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Negative Prompt (optional)</label>
            <textarea value={negative} onChange={(e)=>setNegative(e.target.value)} rows={2} className="w-full border rounded p-2" placeholder="e.g., text, watermark, low quality"></textarea>
          </div>

          <div className="flex gap-3">
            <button onClick={generateMock} className="px-4 py-2 bg-indigo-600 text-white rounded">Generate</button>
            <button onClick={()=>{ if(resultUrl) { const a=document.createElement('a'); a.href=resultUrl; a.download='result.png'; a.click(); } }} className="px-4 py-2 border rounded">Download</button>
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-2">Result</h3>
          <div className="border rounded p-4 min-h-[260px] flex items-center justify-center">
            {resultUrl ? <img src={resultUrl} alt="result" className="max-h-96 rounded" /> : <div className="text-gray-400">No result yet — click Generate</div>}
          </div>
        </div>
      </div>
    </section>
  );
}
