// scripts/generateFlags.ts (ESM-compatible)

import path from 'path';
import { fileURLToPath } from 'url';
import axios from 'axios';
import fs from 'fs';

// Fix for __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define the output file path
const outputPath = path.join(__dirname, '../data/flags.json');

async function fetchFlags() {
    try {
        const res = await axios.get('https://restcountries.com/v3.1/all');
        const simplified = res.data.map((c: any) => ({
            name: c.name.common,
            cca2: c.cca2,
            flag: c.flags.svg,
        }));
        fs.writeFileSync(outputPath, JSON.stringify(simplified, null, 2));
        console.log(`✅ Flags saved to: ${outputPath}`);
    } catch (err: unknown) {
        if (err instanceof Error) {
            console.error('❌ Failed to fetch flags:', err.message);
        } else {
            console.error('❌ Failed to fetch flags: Unknown error');
        }
    }
}

fetchFlags();
