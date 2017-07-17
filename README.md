# cb-general
General React components for CandleBets projects

Preview: https://romancb.github.io/cb-general

<h2>The concept of creating components</h2>

* must have visual tests (storybook)
* must be self-contained (have logic + default style)
* default styles must be redefined
* should have unit tests if need

<h2>Using</h2>

install:
1. add to the package.json

for release new version:
1. npm run publish

use locally:
1. npm build
2. cd lib
4. npm link
5. create symlink to node_modules
6. in project folder run: npm link cb-general
7. if errors when build, install that dependencies into cb-general lib folder