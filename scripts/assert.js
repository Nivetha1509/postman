var assert = (function () {
    var _ = require('lodash');

    return {
        statusCode: function (expectedCode) {
            pm.test("Status code is expectedCode", function () {
                pm.response.to.have.status(expectedCode);
            });
        },

        jsonSchema: function (schema) {
            pm.test("Validate Json Schema", function () {
                pm.response.to.have.jsonSchema(schema);
            })
        },

        areEqual: function (assertiveName, expectedValue, foundValue) {
            pm.test(assertiveName, function () {
                pm.expect(foundValue).to.eql(expectedValue);
            })
        },

        failTest: function (exception) {
            pm.test("Test Fail: ", function () { throw new Error(exception.message) });
        },

        existInSubset: function (assertiveName, expectedValue, foundValue) {
            pm.test(assertiveName, function () {
                pm.expect(_.filter(expectedValue, foundValue)).to.not.be.empty
            })
        },

        isArray: function (assertiveName, expectedValue) {
            pm.test(assertiveName, () =>
                pm.expect(expectedValue).to.be.an('array').but.not.an('object'))
        },

        isObject: function (assertiveName, expectedValue) {
            pm.test(assertiveName, () =>
                pm.expect(expectedValue).to.be.an('object').but.not.an('array'))
        },

        exists: function (assertiveName, object, field) {
            pm.test(assertiveName, function () {
                pm.expect(object).to.have.property(field);
            });
        }
    }
})();

