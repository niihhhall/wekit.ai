import { GoogleGenAI, Type } from "@google/genai";
import { Platform } from '../types';

const getAi = () => {
  if (!process.env.API_KEY) {
    console.warn("API_KEY is missing from environment variables.");
    return null;
  }
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

export const generateBonusHook = async (platform: Platform, context: string): Promise<string[]> => {
  const ai = getAi();
  if (!ai) return ["Error: API Key missing. Check configuration."];

  const model = "gemini-3-flash-preview";
  
  const prompt = `
    You are a senior social media strategist for an Indian EdTech product called 'We-KIT'.
    The product is a career discovery platform launching on Valentine's Day.
    Target audience: Indian students (13-25) and parents.
    
    Context: The user needs alternative hooks for a ${platform} post about: "${context}".
    
    Constraints:
    - Voice: Calm, confident, empathetic, non-salesy.
    - No hypey AI jargon.
    - Optimize for ${platform} (e.g., short & punchy for Twitter, professional for LinkedIn).
    - Return exactly 2 distinct alternative hooks.
  `;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            hooks: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          }
        }
      }
    });

    const jsonText = response.text || "{}";
    const data = JSON.parse(jsonText);
    return data.hooks || ["Could not generate hooks."];

  } catch (error) {
    console.error("Gemini API Error:", error);
    return ["Failed to generate hooks. Please try again."];
  }
};
