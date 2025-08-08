#!/usr/bin/env node

/**
 * Generate Neon Emoji Placeholder Assets
 * Creates high-resolution PNG placeholders with solid colors
 * These can be replaced with actual neon-style emoji designs
 */

const fs = require('fs');
const path = require('path');

// Canvas-like functionality for generating colored squares
// In production, you'd use actual image generation libraries
const generateNeonPlaceholder = (name, color, size = 128) => {
  // SVG placeholder that can be converted to PNG
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
      <feMerge> 
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <radialGradient id="neonGrad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" style="stop-color:${color};stop-opacity:1" />
      <stop offset="70%" style="stop-color:${color};stop-opacity:0.8" />
      <stop offset="100%" style="stop-color:${color};stop-opacity:0.4" />
    </radialGradient>
  </defs>
  
  <!-- Glow background -->
  <circle cx="${size/2}" cy="${size/2}" r="${size/2 - 4}" fill="url(#neonGrad)" opacity="0.3"/>
  
  <!-- Main shape -->
  <circle cx="${size/2}" cy="${size/2}" r="${size/3}" fill="${color}" filter="url(#glow)" opacity="0.9"/>
  
  <!-- Bright center -->
  <circle cx="${size/2}" cy="${size/2}" r="${size/6}" fill="white" opacity="0.6"/>
  
  <!-- Text overlay -->
  <text x="${size/2}" y="${size/2 + 4}" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="${size/8}" font-weight="bold">${name.slice(0, 2).toUpperCase()}</text>
</svg>`;

  return svg;
};

// Emoji definitions with names, colors, and categories
const emojiDefinitions = [
  // CTA & Navigation
  { name: 'mobile-phone-neon', color: '#00ffff', category: 'cta' },
  { name: 'rocket-neon', color: '#ff00ff', category: 'cta' },
  { name: 'briefcase-neon', color: '#39ff14', category: 'navigation' },
  { name: 'star-neon', color: '#ffd700', category: 'navigation' },
  { name: 'free-tag-neon', color: '#00ff80', category: 'cta' },
  { name: 'trial-clock-neon', color: '#ff6b00', category: 'cta' },

  // Metrics & Performance
  { name: 'checkmark-neon', color: '#00ff00', category: 'metrics' },
  { name: 'target-neon', color: '#ff0080', category: 'metrics' },
  { name: 'chart-up-neon', color: '#0080ff', category: 'metrics' },
  { name: 'growth-arrow-neon', color: '#80ff00', category: 'metrics' },
  { name: 'success-circle-neon', color: '#00ff40', category: 'metrics' },
  { name: 'trophy-neon', color: '#ffaa00', category: 'metrics' },

  // Technology & Features
  { name: 'lightning-neon', color: '#ffff00', category: 'tech' },
  { name: 'gear-neon', color: '#8080ff', category: 'tech' },
  { name: 'ai-brain-neon', color: '#ff4080', category: 'tech' },
  { name: 'diamond-neon', color: '#40ffff', category: 'tech' },
  { name: 'shield-neon', color: '#4080ff', category: 'tech' },
  { name: 'lock-secure-neon', color: '#ff8040', category: 'tech' },

  // Business & Money
  { name: 'money-bag-neon', color: '#00ff20', category: 'business' },
  { name: 'dollar-sign-neon', color: '#20ff00', category: 'business' },
  { name: 'coins-neon', color: '#ffaa40', category: 'business' },
  { name: 'profit-graph-neon', color: '#40aaff', category: 'business' },
  { name: 'investment-chart-neon', color: '#aa40ff', category: 'business' },

  // Users & Community
  { name: 'users-group-neon', color: '#ff4040', category: 'users' },
  { name: 'person-neon', color: '#4040ff', category: 'users' },
  { name: 'handshake-neon', color: '#40ff40', category: 'users' },
  { name: 'network-nodes-neon', color: '#ff40aa', category: 'users' },

  // Actions & Controls
  { name: 'play-button-neon', color: '#00aa00', category: 'actions' },
  { name: 'pause-button-neon', color: '#aa0000', category: 'actions' },
  { name: 'search-magnify-neon', color: '#0000aa', category: 'actions' },
  { name: 'download-neon', color: '#aa00aa', category: 'actions' },
  { name: 'upload-neon', color: '#aaaa00', category: 'actions' },
  { name: 'settings-neon', color: '#00aaaa', category: 'actions' },

  // Status & Feedback
  { name: 'fire-flame-neon', color: '#ff2020', category: 'status' },
  { name: 'trending-up-neon', color: '#20ff20', category: 'status' },
  { name: 'hot-pepper-neon', color: '#ff8020', category: 'status' },
  { name: 'new-badge-neon', color: '#2080ff', category: 'status' },
  { name: 'verified-badge-neon', color: '#8020ff', category: 'status' },

  // Location & Geography
  { name: 'south-africa-flag-neon', color: '#ffaa20', category: 'location' },
  { name: 'location-pin-neon', color: '#ff2080', category: 'location' },
  { name: 'globe-neon', color: '#2080ff', category: 'location' },

  // Time & Schedule
  { name: 'clock-time-neon', color: '#ff80aa', category: 'time' },
  { name: 'calendar-neon', color: '#80aaff', category: 'time' },
  { name: 'timer-neon', color: '#aaff80', category: 'time' },
  { name: 'hourglass-neon', color: '#ffaa80', category: 'time' },

  // Communication
  { name: 'email-neon', color: '#8080aa', category: 'communication' },
  { name: 'phone-neon', color: '#aa8080', category: 'communication' },
  { name: 'message-bubble-neon', color: '#80aa80', category: 'communication' },
  { name: 'notification-bell-neon', color: '#aa80aa', category: 'communication' },

  // Default fallback
  { name: 'default-neon', color: '#ffffff', category: 'default' }
];

// Create the assets directory
const assetsDir = path.join(__dirname, '..', 'src', 'assets', 'neon-emojis');

if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

// Generate all emoji assets
console.log('🚀 Generating neon emoji assets...');

emojiDefinitions.forEach((emoji, index) => {
  const svg = generateNeonPlaceholder(emoji.name, emoji.color, 128);
  const filePath = path.join(assetsDir, `${emoji.name}.svg`);
  
  fs.writeFileSync(filePath, svg);
  console.log(`✅ Generated: ${emoji.name}.svg (${emoji.color})`);
});

// Create a manifest file for easy reference
const manifest = {
  version: '1.0.0',
  generated: new Date().toISOString(),
  totalAssets: emojiDefinitions.length,
  categories: [...new Set(emojiDefinitions.map(e => e.category))],
  assets: emojiDefinitions.map(emoji => ({
    name: emoji.name,
    file: `${emoji.name}.svg`,
    color: emoji.color,
    category: emoji.category,
    usage: `<NeonEmoji type="${emoji.name.replace('-neon', '')}" />`
  }))
};

fs.writeFileSync(
  path.join(assetsDir, 'manifest.json'), 
  JSON.stringify(manifest, null, 2)
);

// Create README for asset usage
const readme = `# Neon Emoji Assets

Generated on: ${new Date().toLocaleString()}

## Usage

Import the NeonEmoji component and use with type prop:

\`\`\`jsx
import NeonEmoji from '../components/NeonEmoji';

// Basic usage
<NeonEmoji type="rocket" size={32} />

// With customization
<NeonEmoji 
  type="mobile" 
  size={48} 
  color="cyan" 
  intensity="high" 
  glow={true}
  onClick={handleClick}
/>
\`\`\`

## Available Types

${emojiDefinitions.map(emoji => `- \`${emoji.name.replace('-neon', '')}\` - ${emoji.category}`).join('\n')}

## Color Options

- cyan (#00ffff)
- magenta (#ff00ff)
- lime (#39ff14)
- orange (#ff6b00)
- multi (rainbow effect)

## Intensity Levels

- low - subtle glow
- medium - balanced glow (default)
- high - intense glow

## Notes

These are SVG placeholders. For production, replace with:
1. High-resolution PNG files (1080p-2160p)
2. Actual neon-style designs
3. Proper emoji illustrations
4. Optimized file sizes with WebP/AVIF support
`;

fs.writeFileSync(path.join(assetsDir, 'README.md'), readme);

console.log(`\n🎉 Successfully generated ${emojiDefinitions.length} neon emoji assets!`);
console.log(`📁 Assets location: ${assetsDir}`);
console.log(`📋 Manifest: manifest.json`);
console.log(`📖 Usage guide: README.md`);
console.log('\n💡 Next steps:');
console.log('1. Run the script: node scripts/generate-neon-emojis.js');
console.log('2. Replace Unicode emojis with <NeonEmoji type="name" />');
console.log('3. Replace SVGs with actual PNG designs for production');
