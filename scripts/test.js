var test = (function () {
    var _ = require('lodash');

    return {
        setBody: function (body) {
            postman.setEnvironmentVariable("ENV_BODY",JSON.stringify(body))
        },

        getBody: function () {
            return JSON.parse(postman.getEnvironmentVariable("ENV_BODY"))
        },

        clearBody: function () {
            pm.environment.unset("ENV_BODY")
        },

        parseVariableToJson: function (envVariableName) {
            return JSON.parse(postman.getEnvironmentVariable(envVariableName));
        },

        setEnvVar: function(key, value){
            postman.setEnvironmentVariable(key, value)
        },

        getEnvVar: function(key){
            return postman.getEnvironmentVariable(key)
        }
    }
})();
