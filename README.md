# visual-ai-hackerthon

The repo is created according to the requirement of [Applitools Visual AI Rockstar Hackathon 2019](https://applitools.com/hackathon) . It aims to compare the traditional e2e test with visual AI testing. 

E2E framework: [webdriverIO 5](https://github.com/webdriverio/webdriverio)
Test runner: [wdio test runner](https://github.com/webdriverio/webdriverio)
Visual regression: [applitools service from wdio[(https://webdriver.io/docs/applitools-service.html)

## Setup
run `npm install` to install all packages

## Test
To test in traditional way: run `npm run test`

To test visually with applitools: run `npm run visualtest`


## Note
Applitools service currently doesn't support all the applitool eye config setup except for viewport, so to run the visual test in batch, or to take full screen screenshot. You'll have to edit the `index.js` file in side of `/node-module/@applitools`. The following code needs to be added at the end of the `beforeSession(config)` function

```  beforeSession(config) {

    ....
    
    applitoolsConfig.batch && this.eyes.setBatch(applitoolsConfig.batch)
    applitoolsConfig.appName && this.eyes.setAppName(applitoolsConfig.appName)
    applitoolsConfig.fullPageScreenshot && this.eyes.setForceFullPageScreenshot(applitoolsConfig.fullPageScreenshot);
    applitoolsConfig.stitchMode && this.eyes.setStitchMode(applitoolsConfig.stitchMode);

  }
```
