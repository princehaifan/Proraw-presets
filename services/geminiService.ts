
import { GoogleGenAI, Modality } from "@google/genai";
import type { GenerateContentResponse } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // This is a fallback for development. The build environment must have the API key.
  console.warn("API_KEY is not set in environment variables. Using a placeholder which will likely fail.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY || "YOUR_API_KEY" });

const fileToGenerativePart = (base64Data: string, mimeType: string) => {
  return {
    inlineData: {
      data: base64Data,
      mimeType,
    },
  };
};

export const applyPreset = async (base64ImageData: string, mimeType: string, prompt: string): Promise<string> => {
  try {
    const imagePart = fileToGenerativePart(base64ImageData, mimeType);
    const textPart = { text: prompt };

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image-preview',
      contents: {
        parts: [
          imagePart,
          textPart,
          { text: "Important: Only return the edited image. Do not include any text, commentary, or any other content in your response." }
        ],
      },
      config: {
        // The response must include both modalities
        responseModalities: [Modality.IMAGE, Modality.TEXT],
      },
    });

    // Find the image part in the response
    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        return part.inlineData.data;
      }
    }
    
    // Fallback if no image part is found
    throw new Error("AI did not return an edited image.");

  } catch (error) {
    console.error("Error applying preset with Gemini:", error);
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
    throw new Error(`Failed to apply AI preset. ${errorMessage}`);
  }
};
