import { NextResponse } from 'next/server';

const KEANE_BASE = 'https://admin.keanespecialty.com/api/quote';

// GET /api/keane-test
// Tests Keane API credentials and lookup table connectivity.
// Returns a JSON diagnostic so we can see exactly what the API returns.
// Remove or gate this route once the integration is confirmed working.
export async function GET() {
  const key = process.env.KEANE_API_KEY;
  const secret = process.env.KEANE_API_SECRET;

  const results: Record<string, unknown> = {
    env: {
      KEANE_API_KEY: key ? `set (${key.slice(0, 4)}…)` : 'MISSING',
      KEANE_API_SECRET: secret ? `set (${secret.slice(0, 4)}…)` : 'MISSING',
    },
  };

  if (!key || !secret) {
    return NextResponse.json({ ok: false, ...results });
  }

  const headers = {
    'X-API-KEY': key,
    'X-API-SECRET': secret,
    Accept: 'application/json',
  };

  // Test one lightweight lookup endpoint
  const endpoints = ['/vessel-types', '/countries', '/currencies'];

  for (const ep of endpoints) {
    try {
      const res = await fetch(`${KEANE_BASE}${ep}`, { headers });
      const text = await res.text();
      let parsed: unknown;
      try { parsed = JSON.parse(text); } catch { parsed = text.slice(0, 300); }
      results[ep] = { status: res.status, ok: res.ok, sample: Array.isArray(parsed) ? (parsed as unknown[]).slice(0, 3) : parsed };
    } catch (err) {
      results[ep] = { error: String(err) };
    }
  }

  // Test a minimal dummy POST to see the error shape
  try {
    const res = await fetch(`${KEANE_BASE}/save-quote-data`, {
      method: 'POST',
      headers: { ...headers, 'Content-Type': 'application/json' },
      body: JSON.stringify({ title_id: 1, first_name: 'Test', last_name: 'Test', email: 'test@test.com' }),
    });
    const text = await res.text();
    let parsed: unknown;
    try { parsed = JSON.parse(text); } catch { parsed = text.slice(0, 500); }
    results['/save-quote-data (minimal)'] = { status: res.status, ok: res.ok, response: parsed };
  } catch (err) {
    results['/save-quote-data (minimal)'] = { error: String(err) };
  }

  return NextResponse.json({ ok: true, ...results });
}
