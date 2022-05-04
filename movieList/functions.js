const { By } = require('selenium-webdriver');

const addMovie = async (driver) => {
    const addMovieInput = await driver.findElement(By.xpath('//input'));
  
    addMovieInput.sendKeys('Back to the future');
  
    const addMovieButton = await driver.findElement(By.xpath('//button'));
  
    addMovieButton.click();
  
    await driver.sleep(1000);
  
    const movie = await driver.findElement(By.xpath('//li'));
  
    const isDisplayed = movie.isDisplayed();
  
    expect(isDisplayed).toBeTruthy();
};

const deleteMovie = async (driver) => {
    const addMovieInput = await driver.findElement(By.xpath('//input'));
  
    addMovieInput.sendKeys('Hellboy');
  
    const addMovieButton = await driver.findElement(By.xpath('//button'));
  
    addMovieButton.click();
  
    await driver.sleep(1000);
  
    const movieXButton = await driver.findElement(By.xpath(`//li/button`))

    movieXButton.click();

    await driver.sleep(1000);   

    const movieDeleteText = await driver.findElement(By.xpath(`//aside`))
  
    const isDisplayed = movieDeleteText.isDisplayed();

  
    expect(isDisplayed).toBeTruthy();
};
const crossOff = async (driver) => {
    const addMovieInput = await driver.findElement(By.xpath('//input'));
  
    addMovieInput.sendKeys('cars');
  
    const addMovieButton = await driver.findElement(By.xpath('//button'));
  
    addMovieButton.click();
  
    await driver.sleep(1000);
  
    const movieCrossOff = await driver.findElement(By.xpath(`//li/span`))

    movieCrossOff.click();

    await driver.sleep(2000);   

    const movieCrossOffText = await driver.findElement(By.xpath(`//aside`))
  
    const isDisplayed = movieCrossOffText.isDisplayed();

  
    expect(isDisplayed).toBeTruthy();
};
const crossGone = async (driver) => {
    const addMovieInput = await driver.findElement(By.xpath('//input'));
  
    addMovieInput.sendKeys('sonic 2');
  
    const addMovieButton = await driver.findElement(By.xpath('//button'));

    addMovieButton.click();
  
    await driver.sleep(1000);
  
    const movieCrossGone = await driver.findElement(By.xpath(`//li/span`))

    movieCrossGone.click();

    await driver.sleep(1000);

    movieCrossGone.click();

    await driver.sleep(2000);   

    const movieCrossGoneText = await driver.findElement(By.xpath(`//aside`))
  
    const isDisplayed = movieCrossGoneText.isDisplayed();

  
    expect(isDisplayed).toBeTruthy();
};

module.exports = { addMovie, deleteMovie, crossOff, crossGone };