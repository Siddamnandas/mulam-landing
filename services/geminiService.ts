import { GoogleGenAI } from "@google/genai";

// Initialize the client
// Note: In a real production app, you might want to handle this more robustly,
// but for this demo we assume process.env.API_KEY is present.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const MODEL_NAME = "gemini-2.5-flash";

export const generateMemorySpark = async (topic: string): Promise<string> => {
  if (!process.env.API_KEY) {
    return "Please configure your API_KEY in the environment variables to use this feature.";
  }

  try {
    const systemPrompt = "You are a friendly, warm reminiscence therapist for seniors. Your goal is to take a topic and generate a SINGLE, specific, sensory-rich question that helps them recall a happy memory. Keep it short, simple, and evocative. No fluff. Do not ask multiple questions.";
    
    const response = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: `Generate a reminiscence question about: ${topic}`,
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.7,
      }
    });

    return response.text || "Could you tell me a little more about that?";
  } catch (error) {
    console.error("Error generating spark:", error);
    return "My memory banks are a bit foggy right now. Try again in a moment!";
  }
};

export const polishStory = async (roughNotes: string): Promise<string> => {
  if (!process.env.API_KEY) {
    return "Please configure your API_KEY in the environment variables to use this feature.";
  }

  try {
    const systemPrompt = "You are a helpful editor assisting a senior in writing their life story. Take the user's rough, fragmented notes and rewrite them into a coherent, warm, and grammatically correct short paragraph (max 3-4 sentences). Keep the tone personal and simple (1st person). Do not add facts that aren't there, just smooth out the flow.";

    const response = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: `Rewrite this memory: ${roughNotes}`,
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.5,
      }
    });

    return response.text || "I couldn't quite catch that. Could you try saying it again?";
  } catch (error) {
    console.error("Error polishing story:", error);
    return "I'm having trouble connecting to the story engine. Please try again.";
  }
};