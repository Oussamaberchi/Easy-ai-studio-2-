# Easy AI Studio (Local Prototype)

This is a Vite + React + TypeScript prototype for your Easy AI Studio UI.
It includes:
- Sidebar + tabs
- Product Studio (upload product & reference)
- AI Image Generator (mock)
- Mockup Studio (upload design & product)
- Tailwind CSS for styling

## How to run locally

1. Make sure Node.js (v18+) and npm are installed.
2. In project folder run:
   ```bash
   npm install
   npm run dev
   ```
3. Open the dev URL shown by Vite (usually http://localhost:5173).

## Notes
- The "Generate" buttons are currently mocked — they show previews or placeholder images.
- Next step: connect `@google/genai` (or another image model) to actually generate images.
