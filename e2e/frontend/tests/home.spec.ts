import { test, expect } from "@playwright/test";

test("home page displays main heading", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText(/Find your new.*best friend/)).toBeVisible();
});

test("home page displays adoption message", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText(/Adopt a pet,.*don't shop/)).toBeVisible();
});

test("clicking Dogs link navigates to animals page", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Dogs" }).click();
  await expect(page).toHaveURL("/animals");
  await expect(
    page.getByRole("heading", { name: "Our Animals", level: 2 }),
  ).toBeVisible();
});

test("clicking Adopt vs Foster link navigates to adopt vs foster page", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Adopt vs Foster" }).click();
  await expect(page).toHaveURL("/adopt-vs-foster");
  await expect(
    page.getByRole("heading", { name: "Adopt or Foster", level: 1 }),
  ).toBeVisible();
});

test("clicking Cats link navigates to animals page", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Cats" }).click();
  await expect(page).toHaveURL("/animals");
  await expect(
    page.getByRole("heading", { name: "Our Animals", level: 2 }),
  ).toBeVisible();
});
