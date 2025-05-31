import {test} from '../fixtures/test-options';
import { expect } from '@playwright/test';


test.describe('Header Redirections', () => {
  test('Verify "Rooms" section navigation', async ({ page, roomsPage }) => {

  await expect(page).toHaveURL('/#rooms');
  });
});