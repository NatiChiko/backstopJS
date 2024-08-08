module.exports = async (page, scenario, vp) => {
  const clickSelector = scenario.clickSelector;
  if(clickSelector)
  await page.click(scenario.clickSelector);
  await page.waitForTimeout(500); 
};
