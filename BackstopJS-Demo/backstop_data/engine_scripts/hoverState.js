module.exports = async (page, scenario, vp) => {
  const hoverSelector = scenario.hoverSelector;
  if (hoverSelector) {
    await page.hover(hoverSelector);
    await page.waitForTimeout(500);  
  }
};
