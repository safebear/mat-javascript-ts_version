
// import * as path from "path";
import { browser, Config } from "protractor";
// import { Reporter } from "../support/reporter";
// const jsonReports = process.cwd() + "/reports/json";

export const config: Config = {

    seleniumAddress: "http://127.0.0.1:4444/wd/hub",

    SELENIUM_PROMISE_MANAGER: false, // needed if async/await is used anywhere in the spec - may no longer be needed?

    baseUrl: "http://localhost:8080/",

    // capabilities: {
    //     browserName: "chrome",
    // },

    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),

    specs: [
      "../test_ts/features/*.feature",
    ],

    onPrepare: () => {
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
        // Reporter.createDirectory(jsonReports);
    },

    cucumberOpts: {
        compiler: "ts:ts-node/register",
        // format: "json:./reports/json/cucumber_report.json",
        // require: ["../../typeScript/stepdefinitions/*.js", "../../typeScript/support/*.js"],
        // strict: true,
        // tags: "@CucumberScenario or @ProtractorScenario or @TypeScriptScenario or @OutlineScenario",
        format: "json:.tmp/results.json",
        profile: false,
        require: "../typeScript/features/step_definitions/*.steps.js",
        tags: false,
        "no-source": true,
    },

    plugins: [{
      options: {
        automaticallyGenerateReport: true,
        removeExistingJsonReportFile: true,
      },
      package: "protractor-multiple-cucumber-html-reporter-plugin",

    }],

    // onComplete: () => {
    //     Reporter.createHTMLReport();
    // },
};
