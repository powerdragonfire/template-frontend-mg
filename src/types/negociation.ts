// types of deliverables
export type MarketingSource = "tiktok" | "instagram_reel" | "instagram_post";

export interface Deliverable {
  type: MarketingSource;
  count: number;
}

interface RequiredDeliverable {
  type: MarketingSource;
  minCount: number;
}

interface Campaign {
  requiredDeliverablesPerInfluencer: RequiredDeliverable[];
}

export interface Offer {
  deliverables: Deliverable[];
  price: number;
}

type NegotiationStatus = "in_progress" | "accepted" | "rejected" | "failed";

type TurnRole = "brand" | "influencer";

type Turn = {
  role: TurnRole;
  message: string; // human-readable text
  offer?: Offer | null; // parsed/structured offer if present
};

export type NegotiationSession = {
  id: string; // UUID
  influencerId: number;
  status: NegotiationStatus;
  rounds: number;
  history: Turn[];
  agreedOffer?: Offer;
};
