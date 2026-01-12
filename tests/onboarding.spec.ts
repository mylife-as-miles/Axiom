import { test, expect } from '@playwright/test';

test.describe('Onboarding Flow', () => {
  test('Complete onboarding flow', async ({ page }) => {
    // 1. Start at Login
    await page.goto('http://localhost:5173/login');

    // 2. Click Register
    await page.getByText('REGISTER').click();
    await expect(page).toHaveURL(/.*\/onboarding\/profile/);

    // 3. Fill Profile
    await page.fill('input[placeholder="ENTER_NAME"]', 'Operative Zero');
    await page.selectOption('select', 'Analyst');
    await page.click('button[type="submit"]');

    // 4. Verify Final Activation
    await expect(page).toHaveURL(/.*\/onboarding\/finalize/);
    await expect(page.getByText('100%')).toBeVisible();
    await expect(page.getByText('Identity: Operative Zero // Analyst')).toBeVisible();

    // 5. Test Persistence (Reload)
    await page.reload();
    await expect(page.getByText('Identity: Operative Zero // Analyst')).toBeVisible();

    // 6. Complete
    await page.click('text=Enter Command Center');
    await expect(page).toHaveURL(/.*\/app/);
  });
});
