const {Builder, Capabilities, By} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    await driver.get('http://localhost:5500/movieList/index.html');
  });
  
  afterAll(async () => {
    await driver.sleep(1000);
    await driver.quit();
  });

  