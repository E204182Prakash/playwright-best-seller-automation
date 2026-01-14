# Playwright Automation
This project demonstrates automation testing of eBay using Playwright and TypeScript.  
I follows the Page Object Model(POM) for maintainability and clarity.

## Setup
npm install

## Run Tests
npx playwright test

## Prerequisites
- Node.js >= 18
- Playwright
- TypeScript

## Notes
Tests assume that search results load normally on eBay.
For live automation, eBay may block headless scripts.
Due to bot protection limitations on eBay, business rule validations are demonstrated using
a mocked product page while maintaining one live navigation test to validate real site interaction.

## Test Coverage
Automated:
- Wallet search functionality (#01)
- Maximum related products validation (#04)
- Price range business rule validation (#06)

Manual Only:
- Out-of-stock validation (#08)
- Sponsored product exclusion (#11)
- Cross browser compatibility (#14)
- UI alignment and responsiveness (#13)
- API failure handling (#10)

Reason: These scenarios require backend control, complex environment setup









