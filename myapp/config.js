const readEnvVariable = function(variableName, defaultValue){
    return process.config[variableName] || defaultValue;
};

const config = {
    MONGO_CONNSTRING: readEnvVariable('MONGO_CONNSTRING', 'mongodb://mongo/test')
};

module.exports = config;