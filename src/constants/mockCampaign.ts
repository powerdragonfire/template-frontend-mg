import type { Campaign } from "@/types/campaign";

export const mockCampaign: Campaign = {
  brand: "Skin Care Co.",
  campaignName: "Skin Care Co. Launch Campaign Q1",
  brandDescription: "Skin Care Co. is a skin company selling cosmetic creams.",
  totalBudget: 10000,
  requiredDeliverablesPerInfluencer: [{ type: "instagram_reel", minCount: 1 }],
};
