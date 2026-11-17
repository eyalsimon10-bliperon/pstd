#!/usr/bin/env node
/**
 * Generate a high-res QR PNG for the live landing URL.
 * Usage: node scripts/generate-qr.mjs https://your-domain.example
 */
import { writeFileSync } from 'node:fs'
import { createRequire } from 'node:module'

const url = process.argv[2]
if (!url) {
  console.error('Usage: node scripts/generate-qr.mjs <url>')
  process.exit(1)
}

// Prefer python QR already used in CI; this is a stub pointer for local regen after Vercel deploy.
console.log(`Regenerate QR with:\n  python3 -c "import qrcode; from PIL import Image; ... pointing to ${url}"`)
console.log('Or re-run the agent after the durable Vercel URL is known.')
writeFileSync('public/images/pstd-landing-qr.url.txt', url + '\n')
console.log('Wrote public/images/pstd-landing-qr.url.txt')
