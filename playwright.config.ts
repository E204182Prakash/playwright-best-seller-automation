import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  timeout: 30000,

  fullyParallel: false,

  reporter: 'html',

  use: {
    headless: true,
    navigationTimeout: 30000,
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
    
    {
    name: 'firefox',
    use: { ...devices['Desktop Firefox'] },
    } 
  ],
});
