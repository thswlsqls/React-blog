if (process.env.NODE_DEV === 'production'){
    module.exports = required('./prod');
} else {
    module.exports = require('./dev');
}

