import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const analyzeDashboardData = async (
  salesData: any[],
  categoryData: any[]
): Promise<string> => {
  try {
    if (!process.env.API_KEY) {
      return "AI Analysis Unavailable: API Key not configured. Please utilize the dashboard charts for manual analysis.";
    }

    const prompt = `
      You are a Business Intelligence Expert AI. Analyze the following E-Commerce data JSON:
      
      Sales Trend (Actual vs Forecast): ${JSON.stringify(salesData)}
      Category Performance: ${JSON.stringify(categoryData)}

      Provide a concise executive summary (max 3 sentences) and 3 bullet-point actionable strategic recommendations to improve sales or inventory management.
      Keep the tone professional and data-driven.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "Unable to generate analysis at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error analyzing data. Please try again later.";
  }
};