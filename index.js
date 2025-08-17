#!/usr/bin/env node

const { execSync } = require('child_process');

try {
    // Pass all arguments to the original package
    const args = process.argv.slice(2).join(' ');

    // Run the core package directly
    console.log('Forwarding to @dialectlabs/create-blink-scaffold...');
    execSync(`npx @dialectlabs/create-blink-scaffold@2.0.0 ${args}`, {
        stdio: 'inherit'
    });
} catch (error) {
    // The error will already be displayed due to stdio: 'inherit'
    process.exit(error.status || 1);
}
