'use strict';

module.exports = {
    recurseDepth: 10,
    source: {
        // array of paths to files to generate documentation for
        include: [
            "config",
            "ow",
            "third_party/apps",
            "third_party/drivers",
            "libs",
            "webserver/ow_webserver.js",
            "webserver/handlers",
            "webserver/routers",
            "openware.js"
        ],
        // array of paths to exclude
        exclude: [
            "index.js",
            "data",
            "node_modules",
            "doc",
            "test",
            "third_party/drivers/_**/*.js",
            "webserver/data",
            "webserver/public/libs",
            "third_party/drivers/_*.*",
            "third_party/drivers/com.cogenspa.openware.drivers.driver_autrosafe/decompress"
        ],
        includePattern: ".+\\.js(doc|x)?$",
        excludePattern: "(^|\\/|\\\\)_"
    },
    plugins: [
        "plugins/markdown",
        "plugins/summarize"
    ],
    sourceType: "module",
    tags: {
        allowUnknownTags: true,
        dictionaries: ["jsdoc", "closure"]
    },
    templates: {
        cleverLinks: true,
        monospaceLinks: true,
        useLongnameInNav: false,
        showInheritedInNav: true,
        default: {
            outputSourceFiles: true
        },
        systemName: "Openware Code Documentation",
        footer: "",
        copyright: "Copyright © 2012-2015 Cogen s.p.a.",
        navType: "vertical",
        theme: "cerulean",
        linenums: true,
        collapseSymbols: true,
        inverseNav: true
    },
    opts: {
        encoding: "utf8",
        destination: "./doc/jsdoc/",
        recurse: true,
        private: true,
        readme: "./README.md",
        package: "./package.json"
    }
};
