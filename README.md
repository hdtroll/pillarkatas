# Pillar Technology Pencil Durability Kata

## Technology used
OS - Rasbian

Language - JavaScript

Frameworks - NodeJS v10.16.3, Mocha v6.2.0, Chai v 4.2.0

## Installing language/frameworks

To install the latest version of NodeJS on Rasbian it needs to be downloaded and installed manually, once downloaded and extracted/decompressed the files will need to be copied to your /usr/local/ directory once installed you'll be able to install Mocha and Chai globally

download the latest v10 NodeJs

`sudo curl -sL https://deb.nodesource/setup_10.x | bash - apt-get install -y nodejs`

extract it

`tar -xJf node-v10.16.3-linux-armv7l.tar.xz`

go into the extracted directory that was created

`cd node-v10.16.3-linux-armv7l/`

copy all folders and files to your /usr/local/ directory

`sudo cp -R * /usr/local/`

install mocha and chai

`sudo npm install mocha -g
sudo npm install chai -g`

It's likely you'll need to also install chai also to the directory where your code will be running I had some problems with installing here and the following workaround enabled me to successfull install it. You'll also need to have a package.json file for it to install there. Modify the package-lock.json file and then rename it to package.json. However a more elegant solution may be to install chai with one of the following commands 'npm install --save-dev chai' or 'npm install --save chai'

`vi package-lock.json `

after the first dependencies object add in '    "chai": "^4.2.0",'

`mv package-lock.json package.json`

now install chai to the local directory

`sudo npm install chai`

You should now be ready to run unit tests through mocha with chai for Javascript files

## How to run Tests

All tests are established in test/pencil_tests.js run them with the following command for the location where you pulled the files to:

`mocha tests/pencil_tests.js`

## Tests Location

tests/pencil_tests.js

## Source Location

pencil_class.js
