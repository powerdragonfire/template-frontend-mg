interface Deliverable {
  type: string;
  count: number;
}

interface RequiredDeliverable {
  type: string;
  minCount: number;
}

interface Campaign {
  requiredDeliverablesPerInfluencer: RequiredDeliverable[];
}

interface Offer {
  deliverables: Deliverable[];
  price: number;
}

// offer.price <= influencer.maxBudget
const hasRequiredDeliverables = (offer: Offer, campaign: Campaign): boolean => {
  return campaign.requiredDeliverablesPerInfluencer.every(
    (req: RequiredDeliverable) => {
      const match = offer.deliverables.find(
        (d: Deliverable) => d.type === req.type
      );
      return match !== undefined && match.count >= req.minCount;
    }
  );
};

const MAX_ROUNDS = 5;
