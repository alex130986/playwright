// global-teardown.ts
import { execSync } from 'child_process';

export default async function () {
  try {
    execSync('pkill -f "remote-debugging-pipe" || true');
    console.log('✅ Every playwright browser process has been closed');
  } catch (e) {
    console.warn('⚠ Error when tryinf to close a browser:', e);
  }
}
