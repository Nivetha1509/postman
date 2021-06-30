var assert = (function () {
    var _ = require('lodash');

    return {
        statusCode: function (expectedCode) {
            pm.test("Status code is expectedCode", function () {
                pm.response.to.have.status(expectedCode);
            });
        },

        areEqual: function (assertiveName, expectedValue, foundValue) {
            pm.test(assertiveName, function () {
                pm.expect(foundValue).to.eql(expectedValue);
            })
        },

        failTest: function (exception) {
            pm.test("Test Fail: ", function () { throw new Error(exception.message) });
        },

        exists: function (assertiveName, object, field) {
            pm.test(assertiveName, function () {
                pm.expect(object).to.have.property(field);
            });
        }
    }
})();

