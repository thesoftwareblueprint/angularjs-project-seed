/**
 * Created by walter on 2/17/14.
 */
module.exports = {
    dev: {
        options: {
            script: './server/server.js'
        }
    },
    prod: {
        options: {
            script: './server/server.js',
            node_env: 'production'
        }
    },
    test: {
        options: {
            script: './server/server.js'
        }
    }
};