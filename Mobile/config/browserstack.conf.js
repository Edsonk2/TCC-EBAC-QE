import "dotenv/config";
import { generalConf } from "./general.conf.js";

export const browserstackConf = {
  ...generalConf,

  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,

  hostname: "hub-cloud.browserstack.com",
  port: 443,
  baseUrl: "wd/hub",

  services: [
    [
      "browserstack",
      {
        browserstackLocal: false,
      },
    ],
  ],

  capabilities: [
    {
      platformName: "iOS",
      "appium:deviceName": "iPhone 15",
      "appium:platformVersion": "17",
      "appium:automationName": "XCUITest",
      "appium:app": "bs://APP_ID",
      "appium:autoAcceptAlerts": true,
      "bstack:options": {
        projectName: "EBAC Store Mobile Tests",
        buildName: "github-actions-ios",
        sessionName: "iOS Checkout",
        deviceOrientation: "portrait",
      },
    },
  ],
};
