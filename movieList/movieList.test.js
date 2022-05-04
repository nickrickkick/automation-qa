const {Builder, Capabilities, By} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const { addMovie, deleteMovie, crossOff, crossGone } = require('./functions');

beforeEach(async () => {
    await driver.get('http://localhost:5500/movieList/index.html');
  });
  
  afterAll(async () => {
    await driver.sleep(1000);
    await driver.quit();
  });
  //this from the lab. using it for ref.
  it('should add new movie to list', async () => {
    await addMovie(driver);
  });

  it("should delete the new movie", async () => {
    await deleteMovie(driver);
  });

  it("should cross off the new movie", async () => {
    await crossOff(driver);
  });

  it("should cross gone the new movie", async () => {
    await crossGone(driver);
  });