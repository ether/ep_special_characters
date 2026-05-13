import {expect, test} from '@playwright/test';
import {getPadBody, goToNewPad} from 'ep_etherpad-lite/tests/frontend-new/helper/padHelper';

const expectedSpecialCharacterCount = (0x2FF - 0x20) + 1;

test.beforeEach(async ({page}) => {
  await goToNewPad(page);
});

test.describe('ep_special_characters', () => {
  test('pad loads with plugin installed', async ({page}) => {
    const padBody = await getPadBody(page);
    await expect(padBody).toBeVisible();
  });

  test('special characters are populated lazily on first modal open', async ({page}) => {
    await expect(page.locator('.specialChars .specialChar')).toHaveCount(0);

    await page.locator('.insertSpecialCharacter').first().click();
    await expect(page.locator('#specialCharactersModal')).toHaveClass(/popup-show/);
    await expect(page.locator('.specialChars .specialChar')).toHaveCount(expectedSpecialCharacterCount);
  });

  test('clicking a special character inserts it without page errors', async ({page}) => {
    const pageErrors: Error[] = [];
    page.on('pageerror', (error) => pageErrors.push(error));
    const padBody = await getPadBody(page);
    await padBody.click();

    await page.locator('.insertSpecialCharacter').first().click();
    await page.locator('.specialChars .specialChar', {hasText: 'Æ'}).first().click();

    await expect(padBody).toContainText('Æ');
    expect(pageErrors).toEqual([]);
  });
});
