export interface Deliverable {
  type: string;
  minCount: number;
}

export interface Campaign {
  brand: string;
  campaignName: string;
  brandDescription: string;
  totalBudget: number;
  requiredDeliverablesPerInfluencer: Deliverable[];
}

export const mockCampaign: Campaign = {
  brand: "Skin Care Co.",
  campaignName: "Skin Care Co. Launch Campaign Q1",
  brandDescription: "Skin Care Co. is a skin company selling cosmetic creams.",
  totalBudget: 10000,
  requiredDeliverablesPerInfluencer: [{ type: "instagram_reel", minCount: 1 }],
};
