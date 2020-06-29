# Introduction to NPM

npm (short for Node Package Manager) is a package manager for the JS programming language.
It is default package manager for the JS runtime environment Node.js. It consists of command
line client also called npm, and an online database of public and paid-for private packages,
called the npm registry. The registru is accessed via the client, and the available packages
can be browsed and searched via the npm website. The package manager and the refistry are 
managed by npm, Inc.

## Usage

npm can manage packages that are local dependencies of a particular project, as well as 
globally-installed JavaScript tools. When used as dependency manager for a local project,
npm can install, in one command, all the deoendencies of a project through the **package.json**
file. In the **package.js** file, each dependency can specify a range of valid versions using
the semantic versioning scheme, allowing developers to auto-update their packages while at the
same time avoiding unwanted breaking changes. npm also provides version-bumping tools for
developers to tag their packages with a particular version. npm also provides the **package-lock.json**
file which has the entry of the exact versuin used by the project after evaluating semantic versioning
in **package.json**.


## How to start Hello World Project

At the beginning we need to install npm, where first command is install manager and second is
review existence of the manager:
```bash
apt-get install node
apt-get install npm
npm -v
node -v
```
Lets relocate ourselves in our project directory and create there workfiles:
```bash 
touch index.html script.js style.css
```
After that we will initialize **package.json** file. To do so we need next command to execute:
```javascript
npm init
```
Fill all required fields. If you don't know what field represent, just click Enter it will
fill the field with default values. So if you named package.json as package and it's created
open it with your editor and replace:
```json
"test": "Something you define here."
```
into:
```json
"start": "lite-server"
```
Also at the end you need to add dependency:
```json
...
"License": "ISC",
"devDependencies": {
	"lite-server": "^2.5.4"
}
```
So at the end we have folder full of files:
- index.html
- script.js
- style.css
- package.json

What we miss? Here we miss our index.html. So even if we will successfuly run our server
it won't show nothing what we expected. To see anything we need modify index.html file.
At example below nested template of our html file:

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta http-equiv="X-UA-Comparible" content="ie=edge">
		<title> JS Beginning </title>
		<link rel="stylesheet" href="style.css">
		<script type="text/javascript" src="script.js" defer></script>
	</head>
	<body>
		<h1>Hello world</h1>
	</body>
</html>

So everything closely done. Now we need to assembly all packages for our project. Do to so,
just write:
```bash
npm install
```
in root directory of the project. Now we add packages to our project:
- node\_modules
- package-lock.json
So npm install look into our package.json where he saw devDependencies, which is lite-server
^2.5.4. And it pull all necessary files to run the lite-server and it actually install that.
So if you see **node_module** folder it indicate that install should be okay.

Install light-server locally and save it to your development environment by running:
```bash
npm install lite-server --save-dev
```
in your terminal.
Run:
```bash
npm run start
```
in your terminal to start the server. Your browser will open at localhost:3000.

