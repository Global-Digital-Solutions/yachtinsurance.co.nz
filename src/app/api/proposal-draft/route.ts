import { NextRequest, NextResponse } from 'next/server';
import { getSupabase } from '@/lib/supabase-server';

export async function POST(req: NextRequest) {
  try {
    const { proposalId, formData, stepReached } = await req.json();

    const payload = {
      email: formData.email || null,
      phone: formData.phone || null,
      first_name: formData.firstName || (formData.ownerName ? formData.ownerName.split(' ')[0] : null),
      last_name: formData.lastName || (formData.ownerName ? formData.ownerName.split(' ').slice(1).join(' ') : null),
      vessel_name: formData.vesselName || null,
      form_data: formData,
      step_reached: stepReached,
      // auto_submit_at = now + 20 min — used to identify abandoned forms
      auto_submit_at: new Date(Date.now() + 20 * 60 * 1000).toISOString(),
      updated_at: new Date().toISOString(),
    };

    const supabase = getSupabase();

    if (proposalId) {
      // UPDATE existing draft
      const { data, error } = await supabase
        .from('marine_proposals')
        .update(payload)
        .eq('id', proposalId)
        .select('id')
        .single();
      if (error) {
        console.error('Draft update error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
      }
      return NextResponse.json({ id: data.id });
    } else {
      // INSERT new draft
      const { data, error } = await supabase
        .from('marine_proposals')
        .insert({ ...payload, status: 'draft', source: 'yachtinsurance.co.nz', created_at: new Date().toISOString() })
        .select('id')
        .single();
      if (error) {
        console.error('Draft insert error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
      }
      return NextResponse.json({ id: data.id });
    }
  } catch (err) {
    console.error('proposal-draft route error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
