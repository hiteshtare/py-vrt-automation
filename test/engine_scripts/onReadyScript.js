// onReady example (puppeteer engine)
const basicConfig = require("./../../test/basicConfig");
// tests/visual-tests/test/basicConfig.js
module.exports = async (page, scenario, vp) => {
  console.enableLogging();
  console.log(`Scenario ${scenario.sIndex + 1} > ${scenario.label} (${vp.label})`);
  // console.warn(`scenario.sIndex: ${scenario.sIndex} | vp.vIndex: ${vp.vIndex}`);

  // if (process.argv.length > 0) { 
  //   process.argv.forEach(function (val, index, array) {
  //     console.log(index + ': ' + val);
  //   });
  // }
  console.disableLogging();
  
  //Should be used if there is lazy loading on site, it may slow down the tests
 if ((scenario.sIndex == 2)) {
    console.enableLogging();
  }
}
