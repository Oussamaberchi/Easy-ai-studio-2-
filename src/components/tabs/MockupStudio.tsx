import React, { useState, ChangeEvent } from "react";

export default function MockupStudio({ setProcessing }:{ setProcessing?: (v:boolean)=>void }){
  const [designFile, setDesignFile] = useState<File|null>(null);
  const [designPreview, setDesignPreview] = useState<string|null>(null);
  const [productFile, setProductFile] = useState<File|null>(null);
  const [productPreview, setProductPreview] = useState<string|null>(null);
  const [resultUrl, setResultUrl] = useState<string|null>(null);

  function handleFileChange(e: ChangeEvent<HTMLInputElement>, setterFile:any, setterPreview:any){
    const f = e.target.files && e.target.files[0];
    if(!f) return;
    setterFile(f);
    const reader = new FileReader();
    reader.onload = ()=>setterPreview(reader.result as string);
    reader.readAsDataURL(f);
  }

  function clearFile(setterFile:any, setterPreview:any){
    setterFile(null); setterPreview(null);
  }

  async function generateMock(){
    if(setProcessing) setProcessing(true);
    await new Promise(res=>setTimeout(res, 900));
    // simple mock: show product if exists else design
    if(productPreview) setResultUrl(productPreview);
    else if(designPreview) setResultUrl(designPreview);
    else setResultUrl("https://placehold.co/600x400?text=Mockup+Result");
    if(setProcessing) setProcessing(false);
  }

  return (
    <section className="bg-white p-6 rounded-xl shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Mockup Studio</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">1. Upload Logo / Design (PNG recommended)</label>
            <input type="file" accept="image/*" onChange={(e)=>handleFileChange(e, setDesignFile, setDesignPreview)} />
            {designPreview && <img src={designPreview} alt="design" className="mt-3 max-h-48 rounded" />}
            {designPreview && <button className="mt-2 text-sm text-red-500" onClick={()=>clearFile(setDesignFile,setDesignPreview)}>Clear</button>}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">2. Upload Product Image</label>
            <input type="file" accept="image/*" onChange={(e)=>handleFileChange(e, setProductFile, setProductPreview)} />
            {productPreview && <img src={productPreview} alt="product" className="mt-3 max-h-48 rounded" />}
            {productPreview && <button className="mt-2 text-sm text-red-500" onClick={()=>clearFile(setProductFile,setProductPreview)}>Clear</button>}
          </div>

          <div className="flex gap-3">
            <button onClick={generateMock} className="px-4 py-2 bg-indigo-600 text-white rounded">Generate Mockup</button>
            <button onClick={()=>{ if(resultUrl){ const a=document.createElement('a'); a.href=resultUrl; a.download='mockup.png'; a.click(); } }} className="px-4 py-2 border rounded">Download</button>
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
