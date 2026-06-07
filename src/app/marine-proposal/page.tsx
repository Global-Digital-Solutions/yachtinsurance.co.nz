import type { Metadata } from 'next';
import MarineProposalForm from './MarineProposalForm';

export const metadata: Metadata = {
  title: 'Marine Insurance Proposal Form | Yacht Insurance NZ',
  description: 'Complete your marine insurance proposal. All sections required for a full underwriting submission.',
  robots: { index: false, follow: false }, // hidden — not for public indexing
};

export default function MarineProposalPage() {
  return <MarineProposalForm />;
}
