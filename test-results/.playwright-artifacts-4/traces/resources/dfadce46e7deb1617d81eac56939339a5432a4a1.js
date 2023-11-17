"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[1636],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=a.createContext({}),p=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},c=function(t){var e=p(t.components);return a.createElement(l.Provider,{value:e},t.children)},d="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},f=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,l=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),d=p(n),f=r,u=d["".concat(l,".").concat(f)]||d[f]||m[f]||o;return n?a.createElement(u,s(s({ref:e},c),{},{components:n})):a.createElement(u,s({ref:e},c))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,s=new Array(o);s[0]=f;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i[d]="string"==typeof t?t:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6203:function(t,e,n){n.r(e),n.d(e,{assets:function(){return g},contentTitle:function(){return f},default:function(){return b},frontMatter:function(){return m},metadata:function(){return u},toc:function(){return h}});var a=n(3905),r=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(t,e,n)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,d=(t,e)=>{for(var n in e||(e={}))l.call(e,n)&&c(t,n,e[n]);if(i)for(var n of i(e))p.call(e,n)&&c(t,n,e[n]);return t};const m={id:"test-configuration",title:"Test configuration"},f=void 0,u={unversionedId:"test-configuration",id:"version-stable/test-configuration",title:"Test configuration",description:"Introduction",source:"@site/versioned_docs/version-stable/test-configuration.mdx",sourceDirName:".",slug:"/test-configuration",permalink:"/docs/test-configuration",draft:!1,tags:[],version:"stable",frontMatter:{id:"test-configuration",title:"Test configuration"},sidebar:"docs",previous:{title:"Canary releases",permalink:"/docs/canary-releases"},next:{title:"Test use options",permalink:"/docs/test-use-options"}},g={},h=[{value:"Introduction",id:"introduction",level:2},{value:"Basic Configuration",id:"basic-configuration",level:2},{value:"Filtering Tests",id:"filtering-tests",level:2},{value:"Advanced Configuration",id:"advanced-configuration",level:2},{value:"Expect Options",id:"expect-options",level:2},{value:"Add custom matchers using expect.extend",id:"add-custom-matchers-using-expectextend",level:3},{value:"Combine custom matchers from multiple modules",id:"combine-custom-matchers-from-multiple-modules",level:3}],k={toc:h};function b(t){var e,n=t,{components:r}=n,c=((t,e)=>{var n={};for(var a in t)l.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&i)for(var a of i(t))e.indexOf(a)<0&&p.call(t,a)&&(n[a]=t[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(e=d(d({},k),c),o(e,s({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("h2",d({},{id:"introduction"}),"Introduction"),(0,a.kt)("p",null,"Playwright has many options to configure how your tests are run. You can specify these options in the configuration file. Note that test runner options are ",(0,a.kt)("strong",{parentName:"p"},"top-level"),", do not put them into the ",(0,a.kt)("inlineCode",{parentName:"p"},"use")," section."),(0,a.kt)("h2",d({},{id:"basic-configuration"}),"Basic Configuration"),(0,a.kt)("p",null,"Here are some of the most common configuration options."),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-js"}),"import { defineConfig, devices } from '@playwright/test';\n\nexport default defineConfig({\n  // Look for test files in the \"tests\" directory, relative to this configuration file.\n  testDir: 'tests',\n\n  // Run all tests in parallel.\n  fullyParallel: true,\n\n  // Fail the build on CI if you accidentally left test.only in the source code.\n  forbidOnly: !!process.env.CI,\n\n  // Retry on CI only.\n  retries: process.env.CI ? 2 : 0,\n\n  // Opt out of parallel tests on CI.\n  workers: process.env.CI ? 1 : undefined,\n\n  // Reporter to use\n  reporter: 'html',\n\n  use: {\n    // Base URL to use in actions like `await page.goto('/')`.\n    baseURL: 'http://127.0.0.1:3000',\n\n    // Collect trace when retrying the failed test.\n    trace: 'on-first-retry',\n  },\n  // Configure projects for major browsers.\n  projects: [\n    {\n      name: 'chromium',\n      use: { ...devices['Desktop Chrome'] },\n    },\n  ],\n  // Run your local dev server before starting the tests.\n  webServer: {\n    command: 'npm run start',\n    url: 'http://127.0.0.1:3000',\n    reuseExistingServer: !process.env.CI,\n  },\n});\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:"left"}),"Option"),(0,a.kt)("th",d({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),(0,a.kt)("a",d({parentName:"td"},{href:"/docs/api/class-testconfig#test-config-forbid-only"}),"testConfig.forbidOnly")),(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),"Whether to exit with an error if any tests are marked as ",(0,a.kt)("inlineCode",{parentName:"td"},"test.only"),". Useful on CI.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),(0,a.kt)("a",d({parentName:"td"},{href:"/docs/api/class-testconfig#test-config-fully-parallel"}),"testConfig.fullyParallel")),(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),"have all tests in all files to run in parallel. See ",(0,a.kt)("a",d({parentName:"td"},{href:"./test-parallel"}),"/Parallelism and sharding")," for more details.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),(0,a.kt)("a",d({parentName:"td"},{href:"/docs/api/class-testconfig#test-config-projects"}),"testConfig.projects")),(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),"Run tests in multiple configurations or on multiple browsers")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),(0,a.kt)("a",d({parentName:"td"},{href:"/docs/api/class-testconfig#test-config-reporter"}),"testConfig.reporter")),(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),"Reporter to use. See ",(0,a.kt)("a",d({parentName:"td"},{href:"/docs/test-reporters"}),"Test Reporters")," to learn more about which reporters are available.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),(0,a.kt)("a",d({parentName:"td"},{href:"/docs/api/class-testconfig#test-config-retries"}),"testConfig.retries")),(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),"The maximum number of retry attempts per test. See ",(0,a.kt)("a",d({parentName:"td"},{href:"/docs/test-retries"}),"Test Retries")," to learn more about retries.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),(0,a.kt)("a",d({parentName:"td"},{href:"/docs/api/class-testconfig#test-config-test-dir"}),"testConfig.testDir")),(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),"Directory with the test files.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),(0,a.kt)("a",d({parentName:"td"},{href:"/docs/api/class-testconfig#test-config-use"}),"testConfig.use")),(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),"Options with ",(0,a.kt)("inlineCode",{parentName:"td"},"use{}"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),(0,a.kt)("a",d({parentName:"td"},{href:"/docs/api/class-testconfig#test-config-web-server"}),"testConfig.webServer")),(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),"To launch a server during the tests, use the ",(0,a.kt)("inlineCode",{parentName:"td"},"webServer")," option")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),(0,a.kt)("a",d({parentName:"td"},{href:"/docs/api/class-testconfig#test-config-workers"}),"testConfig.workers")),(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),"The maximum number of concurrent worker processes to use for parallelizing tests. Can also be set as percentage of logical CPU cores, e.g. ",(0,a.kt)("inlineCode",{parentName:"td"},"'50%'."),". See ",(0,a.kt)("a",d({parentName:"td"},{href:"./test-parallel"}),"/Parallelism and sharding")," for more details.")))),(0,a.kt)("h2",d({},{id:"filtering-tests"}),"Filtering Tests"),(0,a.kt)("p",null,"Filter tests by glob patterns or regular expressions."),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-js",metastring:'title="playwright.config.ts"',title:'"playwright.config.ts"'}),"import { defineConfig } from '@playwright/test';\n\nexport default defineConfig({\n  // Glob patterns or regular expressions to ignore test files.\n  testIgnore: '*test-assets',\n\n  // Glob patterns or regular expressions that match test files.\n  testMatch: '*todo-tests/*.spec.ts',\n});\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:"left"}),"Option"),(0,a.kt)("th",d({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),(0,a.kt)("a",d({parentName:"td"},{href:"/docs/api/class-testconfig#test-config-test-ignore"}),"testConfig.testIgnore")),(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),"Glob patterns or regular expressions that should be ignored when looking for the test files. For example, ",(0,a.kt)("inlineCode",{parentName:"td"},"'*test-assets'"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),(0,a.kt)("a",d({parentName:"td"},{href:"/docs/api/class-testconfig#test-config-test-match"}),"testConfig.testMatch")),(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),"Glob patterns or regular expressions that match test files. For example, ",(0,a.kt)("inlineCode",{parentName:"td"},"'*todo-tests/*.spec.ts'"),". By default, Playwright runs ",(0,a.kt)("code",null,".*(test","|","spec)",".","(js","|","ts","|","mjs)")," files.")))),(0,a.kt)("h2",d({},{id:"advanced-configuration"}),"Advanced Configuration"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-js",metastring:'title="playwright.config.ts"',title:'"playwright.config.ts"'}),"import { defineConfig } from '@playwright/test';\n\nexport default defineConfig({\n  // Folder for test artifacts such as screenshots, videos, traces, etc.\n  outputDir: 'test-results',\n\n  // path to the global setup files.\n  globalSetup: require.resolve('./global-setup'),\n\n  // path to the global teardown files.\n  globalTeardown: require.resolve('./global-teardown'),\n\n  // Each test is given 30 seconds.\n  timeout: 30000,\n\n});\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:"left"}),"Option"),(0,a.kt)("th",d({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),(0,a.kt)("a",d({parentName:"td"},{href:"/docs/api/class-testconfig#test-config-global-setup"}),"testConfig.globalSetup")),(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),"Path to the global setup file. This file will be required and run before all the tests. It must export a single function.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),(0,a.kt)("a",d({parentName:"td"},{href:"/docs/api/class-testconfig#test-config-global-teardown"}),"testConfig.globalTeardown")),(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),"Path to the global teardown file. This file will be required and run after all the tests. It must export a single function.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),(0,a.kt)("a",d({parentName:"td"},{href:"/docs/api/class-testconfig#test-config-output-dir"}),"testConfig.outputDir")),(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),"Folder for test artifacts such as screenshots, videos, traces, etc.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),(0,a.kt)("a",d({parentName:"td"},{href:"/docs/api/class-testconfig#test-config-timeout"}),"testConfig.timeout")),(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),"Playwright enforces a ",(0,a.kt)("a",d({parentName:"td"},{href:"/docs/test-timeouts"}),"timeout")," for each test, 30 seconds by default. Time spent by the test function, fixtures, beforeEach and afterEach hooks is included in the test timeout.")))),(0,a.kt)("h2",d({},{id:"expect-options"}),"Expect Options"),(0,a.kt)("p",null,"Configuration for the expect assertion library."),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-js",metastring:'title="playwright.config.ts"',title:'"playwright.config.ts"'}),"import { defineConfig } from '@playwright/test';\n\nexport default defineConfig({\n  expect: {\n    // Maximum time expect() should wait for the condition to be met.\n    timeout: 5000,\n\n    toHaveScreenshot: {\n      // An acceptable amount of pixels that could be different, unset by default.\n      maxDiffPixels: 10,\n    },\n\n    toMatchSnapshot: {\n      // An acceptable ratio of pixels that are different to the\n      // total amount of pixels, between 0 and 1.\n      maxDiffPixelRatio: 0.1,\n    },\n  },\n\n});\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:"left"}),"Option"),(0,a.kt)("th",d({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),(0,a.kt)("a",d({parentName:"td"},{href:"/docs/api/class-testconfig#test-config-expect"}),"testConfig.expect")),(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),(0,a.kt)("a",d({parentName:"td"},{href:"/docs/test-assertions"}),"Web first assertions")," like ",(0,a.kt)("inlineCode",{parentName:"td"},"expect(locator).toHaveText()")," have a separate timeout of 5 seconds by default. This is the maximum time the ",(0,a.kt)("inlineCode",{parentName:"td"},"expect()")," should wait for the condition to be met. Learn more about ",(0,a.kt)("a",d({parentName:"td"},{href:"/docs/test-timeouts"}),"test and expect timeouts")," and how to set them for a single test.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),(0,a.kt)("a",d({parentName:"td"},{href:"/docs/api/class-pageassertions#page-assertions-to-have-screenshot-1"}),"expect(page).toHaveScreenshot()")),(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),"Configuration for the ",(0,a.kt)("inlineCode",{parentName:"td"},"expect(locator).toHaveScreeshot()")," method.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),(0,a.kt)("a",d({parentName:"td"},{href:"/docs/api/class-snapshotassertions#snapshot-assertions-to-match-snapshot-1"}),"expect(value).toMatchSnapshot()")),(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),"Configuration for the ",(0,a.kt)("inlineCode",{parentName:"td"},"expect(locator).toMatchSnapshot()")," method.")))),(0,a.kt)("h3",d({},{id:"add-custom-matchers-using-expectextend"}),"Add custom matchers using expect.extend"),(0,a.kt)("p",null,"You can extend Playwright assertions by providing custom matchers. These matchers will be available on the ",(0,a.kt)("inlineCode",{parentName:"p"},"expect")," object."),(0,a.kt)("p",null,"In this example we add a custom ",(0,a.kt)("inlineCode",{parentName:"p"},"toHaveAmount")," function. Custom matcher should return a ",(0,a.kt)("inlineCode",{parentName:"p"},"message")," callback and a ",(0,a.kt)("inlineCode",{parentName:"p"},"pass")," flag indicating whether the assertion passed."),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-js",metastring:'title="fixtures.ts"',title:'"fixtures.ts"'}),"import { expect as baseExpect } from '@playwright/test';\nimport type { Page, Locator } from '@playwright/test';\n\nexport { test } from '@playwright/test';\n\nexport const expect = baseExpect.extend({\n  async toHaveAmount(locator: Locator, expected: number, options?: { timeout?: number }) {\n    let pass: boolean;\n    let matcherResult: any;\n    try {\n      await baseExpect(locator).toHaveAttribute('data-amount', String(expected), options);\n      pass = true;\n    } catch (e: any) {\n      matcherResult = e.matcherResult;\n      pass = false;\n    }\n\n    const message = pass\n      ? () => this.utils.matcherHint('toHaveAmount', undefined, undefined, { isNot: this.isNot }) +\n          '\\n\\n' +\n          `Locator: ${locator}\\n`,\n          `Expected: ${this.isNot ? 'not' : ''}${this.utils.printExpected(expected)}\\n` +\n          (matcherResult ? `Received: ${this.utils.printReceived(matcherResult.actual)}` : '')\n      : () =>  this.utils.matcherHint('toHaveAmount', undefined, undefined, expectOptions) +\n          '\\n\\n' +\n          `Locator: ${locator}\\n`,\n          `Expected: ${this.utils.printExpected(expected)}\\n` +\n          (matcherResult ? `Received: ${this.utils.printReceived(matcherResult.actual)}` : '');\n\n    return {\n      message,\n      pass,\n      name: 'toHaveAmount',\n      expected,\n      actual: matcherResult?.actual,\n    };\n  },\n});\n")),(0,a.kt)("p",null,"Now we can use ",(0,a.kt)("inlineCode",{parentName:"p"},"toHaveAmount")," in the test."),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-js",metastring:'title="example.spec.ts"',title:'"example.spec.ts"'}),"import { test, expect } from './fixtures';\n\ntest('amount', async () => {\n  await expect(page.locator('.cart')).toHaveAmount(4);\n});\n")),(0,a.kt)("admonition",d({},{type:"note"}),(0,a.kt)("p",{parentName:"admonition"},"Do not confuse Playwright's ",(0,a.kt)("inlineCode",{parentName:"p"},"expect")," with the ",(0,a.kt)("a",d({parentName:"p"},{href:"https://jestjs.io/docs/expect"}),(0,a.kt)("inlineCode",{parentName:"a"},"expect")," library"),". The latter is not fully integrated with Playwright test runner, so make sure to use Playwright's own ",(0,a.kt)("inlineCode",{parentName:"p"},"expect"),".")),(0,a.kt)("h3",d({},{id:"combine-custom-matchers-from-multiple-modules"}),"Combine custom matchers from multiple modules"),(0,a.kt)("p",null,"You can combine custom matchers from multiple files or modules."),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-js",metastring:'title="fixtures.ts"',title:'"fixtures.ts"'}),"import { mergeTests, mergeExpects } from '@playwright/test';\nimport { test as dbTest, expect as dbExpect } from 'database-test-utils';\nimport { test as a11yTest, expect as a11yExpect } from 'a11y-test-utils';\n\nexport const expect = mergeExpects(dbExpect, a11yExpect);\nexport const test = mergeTests(dbTest, a11yTest);\n")),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-js",metastring:'title="test.spec.ts"',title:'"test.spec.ts"'}),"import { test, expect } from './fixtures';\n\ntest('passes', async ({ database }) => {\n  await expect(database).toHaveDatabaseUser('admin');\n});\n")))}b.isMDXComponent=!0}}]);