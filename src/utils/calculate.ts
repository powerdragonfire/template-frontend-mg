import { mockCampaign } from "@/types/campaign";
import type { NegotiationSession, Offer } from "@/types/negociation";

export let totalCommittedSpend = 0; // shared for the whole app

export const checkDeal = (
  session: NegotiationSession,
  offer: Offer
): boolean => {
  const newTotal = totalCommittedSpend + offer.price;

  if (newTotal > mockCampaign.totalBudget) {
    // cannot accept – would exceed campaign budget
    session.status = "failed";
    session.history.push({
      role: "brand",
      message: `We’d love to work together, but this would exceed our campaign budget of £${mockCampaign.totalBudget}.`,
      offer: offer,
    });
    return false;
  }

  // accept and commit spend
  totalCommittedSpend = newTotal;
  session.status = "accepted";
  session.agreedOffer = offer;
  session.history.push({
    role: "brand",
    message: `Great – we can confirm £${offer.price} for ${JSON.stringify(
      offer.deliverables
    )}.`,
    offer,
  });

  return true;
};
