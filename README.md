# Test framework for APIs using Postman and automation with Newman
This is a simple example of framework that helps you create tests for APIs. Tests are created in Postman and exported to run on any continuous integration server through Newman. The libs used in these tests are created in javascript.

- Note 1: the API which these tests are based on can be found in this [GitHub](https://github.com/estrategiahq/desafio-qa-engineer) repository.
- Note 2: this API is currently not functional. This project is just to demonstrate how tests are structured and executed.
- Note 3: I recommend using postman only for small projects. I had serious performance issues for maintenance and creation of new tests when I reached a total of five thousand requests.

## So where to start?

You can download [Postman](https://www.postman.com/downloads/) to see how the tests are structured. Also, is where you can maintain the tests and run them manually if you wish.
Just import these files:
 - globals.postman_globals.json
 - Challenge API Automation.postman_collection.json
 - Estrategia_educacional.postman_environment.json

Now to run Newman, ensure that you have Node.js >= v10. [Install Node.js via package manager](https://nodejs.org/en/download/package-manager/).

Newman is a powerful command-line collection runner for Postman. It allows you to run and test a Postman collection directly from the command-line. It is built with extensibility in mind so that you can easily integrate it with your continuous integration servers and build systems.
Newman maintains feature parity with Postman and allows you to run collections the way they are executed inside the collection runner in Postman.

### Installation
The easiest way to install Newman is using NPM. If you already have Node.js installed, go foward!

```console
$ npm install -g newman
```
This installs Newman globally on your system allowing you to run it from anywhere. If you want to install it locally, Just remove the `-g` flag.

### Using Newman CLI
The `newman run` command allows you to specify a collection to be run. You can easily export your Postman
Collection as a json file from the Postman App and run it using Newman.

```console
$ newman run examples/sample-collection.json
```
In the case of this project, it is necessary to specify not only the collection, but also which environment and the globals file, which contains the libs of assertions and other functions used in the tests.

```console
$ newman run ChallengeAPIAutomation.postman_collection.json -e Estrategia_educacional.postman_environment.json -g globals.postman_globals.json -k
```
* -k option disable SSL Certificate validations.
* * * 

### And that's all!!
