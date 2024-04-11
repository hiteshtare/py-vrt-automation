const basicConfig = require("./basicConfig");
// Get user defined scenario json
const scenarioJSON = require("../data/scenarios.json");
const viewports = [];



let testScenarios = [];

scenarioJSON.map((s) => {
  const obj = {
    cookiePath: "../../test/engine_scripts/cookies.json",
    readyEvent: "",
    readySelector: "",
    delay:  basicConfig.delayInMS,
    requireSameDimensions: false,
    hideSelectors: [],
    removeSelectors: [],
    hoverSelector: "",
    clickSelector: "",
    postInteractionWait: 0,
    selectors: [],
    selectorExpansion: true,
    expect: 0,
    misMatchThreshold: 0.1,
  };
  testScenarios.push({ ...obj, ...s }); // merging url,obj
});

basicConfig.viewports.map(viewport => {
  if (viewport === "iPhone") {
    pushViewport(viewport, 375, 667);
  }
  // if (viewport === "tablet") {
  //   pushViewport(viewport, 1024, 768);
  // }
  if (viewport === "desktop") {
    pushViewport(viewport, 1366, 768);
  }
});

function pushViewport(viewport, width, height) {
    viewports.push({
      name: viewport,
      width,
      height,
    });
  }

module.exports = {
  id: basicConfig.projectId,
  viewports,
  scenarios: testScenarios,
  onBeforeScript: "../../test/engine_scripts/onBeforeScript.js",
  onReadyScript: "../../test/engine_scripts/onReadyScript.js",
  paths: {
    bitmaps_reference: "backstop_data/bitmaps_reference",
    bitmaps_test: "backstop_data/bitmaps_test",
    html_report: "backstop_data/html_report",
  },
  report: ["json"],
  engine: "puppeteer",
  engineOptions: {
    args: ["--no-sandbox"],
    headless: "new"
  },
  asyncCaptureLimit: 5,
  asyncCompareLimit: 50,
  puppeteerOffscreenCaptureFix: true
};