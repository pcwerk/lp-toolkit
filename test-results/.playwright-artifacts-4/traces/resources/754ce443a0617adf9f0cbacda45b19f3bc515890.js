"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6299],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,g=d["".concat(l,".").concat(h)]||d[h]||c[h]||o;return n?r.createElement(g,s(s({ref:t},p),{},{components:n})):r.createElement(g,s({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3122:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return h},default:function(){return w},frontMatter:function(){return c},metadata:function(){return g},toc:function(){return f}});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&p(e,n,t[n]);if(i)for(var n of i(t))u.call(t,n)&&p(e,n,t[n]);return e};const c={id:"running-tests",title:"Running and debugging tests"},h=void 0,g={unversionedId:"running-tests",id:"version-stable/running-tests",title:"Running and debugging tests",description:"Introduction",source:"@site/versioned_docs/version-stable/running-tests.mdx",sourceDirName:".",slug:"/running-tests",permalink:"/docs/running-tests",draft:!1,tags:[],version:"stable",frontMatter:{id:"running-tests",title:"Running and debugging tests"},sidebar:"docs",previous:{title:"Generating tests",permalink:"/docs/codegen-intro"},next:{title:"Trace viewer",permalink:"/docs/trace-viewer-intro"}},m={},f=[{value:"Introduction",id:"introduction",level:2},{value:"Running tests",id:"running-tests",level:2},{value:"Command line",id:"command-line",level:3},{value:"Run tests in UI mode",id:"run-tests-in-ui-mode",level:3},{value:"Run tests in headed mode",id:"run-tests-in-headed-mode",level:3},{value:"Run tests on different browsers",id:"run-tests-on-different-browsers",level:3},{value:"Run specific tests",id:"run-specific-tests",level:3},{value:"Run tests in VS Code",id:"run-tests-in-vs-code",level:3},{value:"Debugging tests",id:"debugging-tests",level:2},{value:"Debug tests in UI mode",id:"debug-tests-in-ui-mode",level:3},{value:"Debug tests with the Playwright Inspector",id:"debug-tests-with-the-playwright-inspector",level:3},{value:"Test reports",id:"test-reports",level:2},{value:"What&#39;s next",id:"whats-next",level:2}],b={toc:f};function w(e){var t,n=e,{components:a}=n,p=((e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=d(d({},b),p),o(t,s({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h2",d({},{id:"introduction"}),"Introduction"),(0,r.kt)("p",null,"With Playwright you can run a single test, a set of tests or all tests. Tests can be run on one browser or multiple browsers by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--project")," flag. Tests are run in parallel by default and are run in a headless manner meaning no browser window will be opened while running the tests and results will be seen in the terminal. However you can run tests in headed mode by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--headed")," CLI argument or you can run your tests in ",(0,r.kt)("a",d({parentName:"p"},{href:"/docs/test-ui-mode"}),"UI mode"),", by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--ui")," flag, and see a full trace of your tests complete with watch mode, time travel debugging and more."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"You will learn")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"/docs/running-tests#command-line"}),"How to run tests from the command line")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"/docs/running-tests#debugging-tests"}),"How to debug tests")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"/docs/running-tests#test-reports"}),"How to open the HTML test reporter"))),(0,r.kt)("h2",d({},{id:"running-tests"}),"Running tests"),(0,r.kt)("h3",d({},{id:"command-line"}),"Command line"),(0,r.kt)("p",null,"You can run your tests with the ",(0,r.kt)("inlineCode",{parentName:"p"},"playwright test")," command. This will run your tests on all browsers as configured in the ",(0,r.kt)("inlineCode",{parentName:"p"},"playwright.config")," file. Tests run in headless mode by default meaning no browser window will be opened while running the tests and results will be seen in the terminal."),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"npx playwright test\n")),(0,r.kt)("p",null,(0,r.kt)("img",d({parentName:"p"},{src:"https://github.com/microsoft/playwright/assets/13063165/981c1b2b-dc7e-4b85-b241-272b44da6628",alt:"tests running in command line"}))),(0,r.kt)("h3",d({},{id:"run-tests-in-ui-mode"}),"Run tests in UI mode"),(0,r.kt)("p",null,"We highly recommend running your tests with ",(0,r.kt)("a",d({parentName:"p"},{href:"/docs/test-ui-mode"}),"UI Mode")," for a better developer experience where you can easily walk through each step of the test and visually see what was happening before, during, and after each step. UI mode also comes with many other features such as the locator picker, watch mode and more."),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"npx playwright test --ui\n")),(0,r.kt)("p",null,(0,r.kt)("img",d({parentName:"p"},{src:"https://github.com/microsoft/playwright/assets/13063165/c5b501cc-4f5d-485a-87cc-66044c651786",alt:"UI Mode"}))),(0,r.kt)("p",null,"Check out or ",(0,r.kt)("a",d({parentName:"p"},{href:"/docs/test-ui-mode"}),"detailed guide on UI Mode")," to learn more about it's features."),(0,r.kt)("h3",d({},{id:"run-tests-in-headed-mode"}),"Run tests in headed mode"),(0,r.kt)("p",null,"To run your tests in headed mode use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--headed")," flag. This will give you the ability to visually see, how Playwright interacts with the website."),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"npx playwright test --headed\n")),(0,r.kt)("h3",d({},{id:"run-tests-on-different-browsers"}),"Run tests on different browsers"),(0,r.kt)("p",null,"To specify which browser you would like to run your tests on use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--project")," flag followed by the name of the browser."),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"npx playwright test --project webkit\n")),(0,r.kt)("p",null,"To specify multiple browsers to run your tests on use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--project")," flag multiple times followed by the name of each browser."),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"npx playwright test --project webkit --project firefox\n")),(0,r.kt)("h3",d({},{id:"run-specific-tests"}),"Run specific tests"),(0,r.kt)("p",null,"To run a single test file pass in the name of the test file that you want to run."),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"npx playwright test landing-page.spec.ts\n")),(0,r.kt)("p",null,"To run a set of test files from different directories pass in the names of the directories that you want to run the tests in."),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"npx playwright test tests/todo-page/ tests/landing-page/\n")),(0,r.kt)("p",null,"To run files that have ",(0,r.kt)("inlineCode",{parentName:"p"},"landing")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"login")," in the file name simply pass in these keywords to the CLI."),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"npx playwright test landing login\n")),(0,r.kt)("p",null,"To run a test with a specific title use the ",(0,r.kt)("inlineCode",{parentName:"p"},"-g")," flag followed by the title of the test."),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),'npx playwright test -g "add a todo item"\n')),(0,r.kt)("h3",d({},{id:"run-tests-in-vs-code"}),"Run tests in VS Code"),(0,r.kt)("p",null,"Tests can be run right from VS Code using the ",(0,r.kt)("a",d({parentName:"p"},{href:"https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright"}),"VS Code extension"),". Once installed you can simply click the green triangle next to the test you want to run or run all tests from the testing sidebar. Check out our ",(0,r.kt)("a",d({parentName:"p"},{href:"/docs/getting-started-vscode#running-tests"}),"Getting Started with VS Code")," guide for more details."),(0,r.kt)("p",null,(0,r.kt)("img",d({parentName:"p"},{src:"https://github.com/microsoft/playwright/assets/13063165/47726e70-683b-4bd5-94de-7d03dd45c30f",alt:"Playwright VS Code extension"}))),(0,r.kt)("h2",d({},{id:"debugging-tests"}),"Debugging tests"),(0,r.kt)("p",null,"Since Playwright runs in Node.js, you can debug it with your debugger of choice e.g. using ",(0,r.kt)("inlineCode",{parentName:"p"},"console.log")," or inside your IDE or directly in VS Code with the ",(0,r.kt)("a",d({parentName:"p"},{href:"/docs/getting-started-vscode"}),"VS Code Extension"),". Playwright comes with ",(0,r.kt)("a",d({parentName:"p"},{href:"/docs/test-ui-mode"}),"UI Mode"),", where you can easily walk through each step of the test, see logs, errors, network requests, inspect the DOM snapshot and more. You can also use the ",(0,r.kt)("a",d({parentName:"p"},{href:"/docs/debug#playwright-inspector"}),"Playwright Inspector")," which allows you to step through Playwright API calls, see their debug logs and explore ",(0,r.kt)("a",d({parentName:"p"},{href:"/docs/locators"}),"locators"),"."),(0,r.kt)("h3",d({},{id:"debug-tests-in-ui-mode"}),"Debug tests in UI mode"),(0,r.kt)("p",null,"We highly recommend debugging your tests with ",(0,r.kt)("a",d({parentName:"p"},{href:"/docs/test-ui-mode"}),"UI Mode")," for a better developer experience where you can easily walk through each step of the test and visually see what was happening before, during, and after each step. UI mode also comes with many other features such as the locator picker, watch mode and more."),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"npx playwright test --ui\n")),(0,r.kt)("p",null,(0,r.kt)("img",d({parentName:"p"},{src:"https://github.com/microsoft/playwright/assets/13063165/ffca2fd1-5349-41fb-ade9-ace143bb2c58",alt:"showing errors in ui mode"}))),(0,r.kt)("p",null,"While debugging you can use the Pick Locator button to select an element on the page and see the locator that Playwright would use to find that element. You an also edit the locator in the locator playground and see it highlighting live on the Browser window. Use the Copy Locator button to copy the locator to your clipboard and then paste it into you test."),(0,r.kt)("p",null,(0,r.kt)("img",d({parentName:"p"},{src:"https://github.com/microsoft/playwright/assets/13063165/9e7eeb84-bd26-4010-8614-75e24b56c716",alt:"pick locator in ui mode"}))),(0,r.kt)("p",null,"Check out or ",(0,r.kt)("a",d({parentName:"p"},{href:"/docs/test-ui-mode"}),"detailed guide on UI Mode")," to learn more about it's features."),(0,r.kt)("h3",d({},{id:"debug-tests-with-the-playwright-inspector"}),"Debug tests with the Playwright Inspector"),(0,r.kt)("p",null,"To debug all tests run the Playwright test command followed by the ",(0,r.kt)("inlineCode",{parentName:"p"},"--debug")," flag."),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"npx playwright test --debug\n")),(0,r.kt)("p",null,(0,r.kt)("img",d({parentName:"p"},{src:"https://github.com/microsoft/playwright/assets/13063165/6b3b3caa-d258-4cb8-aa05-cd407f501626",alt:"Debugging Tests with the Playwright inspector"}))),(0,r.kt)("p",null,"This command will open up a Browser window as well as the Playwright Inspector. You can use the step over button at the top of the inspector to step through your test. Or press the play button to run your test from start to finish. Once the test has finished the browser window will close."),(0,r.kt)("p",null,"To debug one test file run the Playwright test command with the name of the test file that you want to debug followed by the ",(0,r.kt)("inlineCode",{parentName:"p"},"--debug")," flag."),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"npx playwright test example.spec.ts --debug\n")),(0,r.kt)("p",null,"To debug a specific test from the line number where the ",(0,r.kt)("inlineCode",{parentName:"p"},"test(..")," is defined add a colon followed by the line number at the end of the test file name, followed by the ",(0,r.kt)("inlineCode",{parentName:"p"},"--debug")," flag."),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"npx playwright test example.spec.ts:10 --debug\n")),(0,r.kt)("p",null,"While debugging you can use the Pick Locator button to select an element on the page and see the locator that Playwright would use to find that element. You an also edit the locator and see it highlighting live on the Browser window. Use the Copy Locator button to copy the locator to your clipboard and then paste it into you test."),(0,r.kt)("p",null,(0,r.kt)("img",d({parentName:"p"},{src:"https://github.com/microsoft/playwright/assets/13063165/013d5edb-583e-423a-bb53-9f57bab7f3e1",alt:"Locator picker in the Playwright Inspector"}))),(0,r.kt)("p",null,"Check out our ",(0,r.kt)("a",d({parentName:"p"},{href:"/docs/debug"}),"debugging guide")," to learn more about debugging with the ",(0,r.kt)("a",d({parentName:"p"},{href:"/docs/debug#vs-code-debugger"}),"VS Code debugger"),", UI Mode and the ",(0,r.kt)("a",d({parentName:"p"},{href:"/docs/debug#playwright-inspector"}),"Playwright Inspector")," as well as debugging with ",(0,r.kt)("a",d({parentName:"p"},{href:"/docs/debug#browser-developer-tools"}),"Browser Developer tools"),"."),(0,r.kt)("h2",d({},{id:"test-reports"}),"Test reports"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",d({parentName:"p"},{href:"/docs/test-reporters#html-reporter"}),"HTML Reporter")," shows you a full report of your tests allowing you to filter the report by browsers, passed tests, failed tests, skipped tests and flaky tests. By default, the HTML report is opened automatically if some of the tests failed, otherwise you can open it with the following command."),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"npx playwright show-report\n")),(0,r.kt)("p",null,(0,r.kt)("img",d({parentName:"p"},{src:"https://github.com/microsoft/playwright/assets/13063165/c5f60e56-fb75-4a2d-a4b6-054b8c5d69c1",alt:"HTML Report"}))),(0,r.kt)("p",null,"You can filter and search for tests as well as click on each test to see the tests errors and explore each step of the test."),(0,r.kt)("p",null,(0,r.kt)("img",d({parentName:"p"},{src:"https://github.com/microsoft/playwright/assets/13063165/f36ada14-4701-4534-a3be-ed22c2b16cf5",alt:"HTML Reporter detail view"}))),(0,r.kt)("h2",d({},{id:"whats-next"}),"What's next"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"/docs/codegen-intro"}),"Generate tests with Codegen")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"/docs/trace-viewer-intro"}),"See a trace of your tests")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"/docs/test-ui-mode"}),"Explore all the features of UI Mode")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"/docs/ci-intro"}),"Run your tests on CI with GitHub Actions"))))}w.isMDXComponent=!0}}]);