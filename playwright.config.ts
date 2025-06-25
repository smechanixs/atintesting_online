import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  retries: 0,
  reporter: 'html',

  use: {
    baseURL: 'http://localhost:3003',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
    },

    {
      name: 'firefox',
      use: {
        browserName: 'firefox',
      },
    },
  ]
});
