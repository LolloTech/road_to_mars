'use strict';

module.exports = {
    "root": true,
    'plugins': [],
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "env": {
        "es6": true,
        "node": true,
        "mocha": true,
    },
    "rules": {
        //
        //Possible Errors
        //
        // The following rules point out areas where you might have made mistakes.
        //
        // disallow or enforce trailing commas (recommended)
        "comma-dangle": [2, "never"],
        // disallow assignment in conditional expressions (recommended)
        "no-cond-assign": 2,
        // allow use of console (recommended for Node.js)
        "no-console": 1,
        // disallow use of constant expressions in conditions (recommended)
        "no-constant-condition": 2,
        // disallow control characters in regular expressions (recommended)
        "no-control-regex": 2,
        // disallow use of debugger (recommended)
        "no-debugger": 2,
        // disallow duplicate arguments in functions (recommended)
        "no-dupe-args": 2,
        // disallow duplicate keys when creating object literals (recommended)
        "no-dupe-keys": 2,
        // disallow a duplicate case label. (recommended)
        "no-duplicate-case": 2,
        // disallow empty block statements (recommended)
        "no-empty": 2,
        // disallow the use of empty character classes in regular expressions (recommended)
        "no-empty-character-class": 2,
        // disallow assigning to the exception in a catch block (recommended)
        "no-ex-assign": 2,
        // disallow double-negation boolean casts in a boolean context (recommended)
        "no-extra-boolean-cast": 2,
        // disallow unnecessary parentheses
        "no-extra-parens": 0,
        // disallow unnecessary semicolons (recommended) (fixable)
        "no-extra-semi": 2,
        // disallow overwriting functions written as function declarations (recommended)
        "no-func-assign": 2,
        // disallow function or variable declarations in nested blocks (recommended)
        "no-inner-declarations": 2,
        // disallow invalid regular expression strings in the RegExp constructor (recommended)
        "no-invalid-regexp": 2,
        // disallow irregular whitespace outside of strings and comments (recommended)
        "no-irregular-whitespace": 2,
        // disallow negation of the left operand of an in expression (recommended)
        "no-negated-in-lhs": 2,
        // disallow the use of object properties of the global object (Math and JSON) as functions (recommended)
        "no-obj-calls": 2,
        // disallow multiple spaces in a regular expression literal (recommended)
        "no-regex-spaces": 2,
        // disallow sparse arrays (recommended)
        "no-sparse-arrays": 2,
        // Avoid code that looks like two expressions but is actually one (recommended)
        "no-unexpected-multiline": 2,
        // disallow unreachable statements after a return, throw, continue, or break statement (recommended)
        "no-unreachable": 2,
        // disallow comparisons with the value NaN (recommended)
        "use-isnan": 2,
        // Ensure JSDoc comments are valid
        "valid-jsdoc": [1, {
            "requireReturnType": false,
            "requireReturn": false,
            "requireReturnDescription": false,
            "requireParamDescription": false,
            "prefer": {
                "returns": "return",
                "throw": "throws"
            },
            "preferType": {
                "String": "string",
                "int": "number",
                "integer": "number",
                "object": "Object",
                "test": "Test"
            }
        }],
        // Ensure that the results of typeof are compared against a valid string (recommended)
        "valid-typeof": 2,

        //
        // Best Practices
        //
        // These are rules designed to prevent you from making mistakes.
        // They either prescribe a better way of doing something or help you avoid footguns.
        //

        // Enforces getter/setter pairs in objects
        "accessor-pairs": 2,
        // Enforces return statements in callbacks of array's methods
        "array-callback-return": 2,
        // treat var statements as if they were block scoped
        "block-scoped-var": 2,
        // specify the maximum cyclomatic complexity allowed in a program
        "complexity": 0,
        // require return statements to either always or never specify values
        "consistent-return": 0,
        // specify curly brace conventions for all control statements
        "curly": 2,
        // require default case in switch statements
        "default-case": 2,
        // enforces consistent newlines before or after dots
        "dot-location": [2, "property"],
        // encourages use of dot notation whenever possible
        "dot-notation": 2,
        // require the use of === and !==
        "eqeqeq": 2,
        // make sure for-in loops have an if statement
        "guard-for-in": 2,
        // disallow the use of alert, confirm, and prompt
        "no-alert": 2,
        // disallow use of arguments.caller or arguments.callee
        "no-caller": 2,
        // disallow lexical declarations in case clauses (recommended)
        "no-case-declarations": 1,
        // disallow division operators explicitly at beginning of regular expression
        "no-div-regex": 2,
        // disallow else after a return in an if
        "no-else-return": 2,
        // disallow use of empty functions
        "no-empty-function": 2,
        // disallow use of empty destructuring patterns (recommended)
        "no-empty-pattern": 2,
        // disallow comparisons to null without a type-checking operator
        "no-eq-null": 2,
        // disallow use of eval()
        "no-eval": 2,
        // disallow adding to native types
        "no-extend-native": 2,
        // disallow unnecessary function binding
        "no-extra-bind": 2,
        // disallow unnecessary labels
        "no-extra-label": 2,
        // disallow fallthrough of case statements (recommended)
        "no-fallthrough": 2,
        // disallow the use of leading or trailing decimal points in numeric literals
        "no-floating-decimal": 2,
        // disallow the type conversions with shorter notations
        "no-implicit-coercion": 2,
        // disallow var and named functions in global scope
        "no-implicit-globals": 2,
        // disallow use of eval()-like methods
        "no-implied-eval": 2,
        // disallow this keywords outside of classes or class-like objects
        "no-invalid-this": 2,
        // disallow usage of __iterator__ property
        "no-iterator": 2,
        // disallow use of labeled statements
        "no-labels": 2,
        // disallow unnecessary nested blocks
        "no-lone-blocks": 2,
        // disallow creation of functions within loops
        "no-loop-func": 2,
        // disallow the use of magic numbers
        "no-magic-numbers": 0,
        // disallow use of multiple spaces (fixable)
        "no-multi-spaces": 2,
        // disallow use of multiline strings
        "no-multi-str": 2,
        // disallow reassignments of native objects
        "no-native-reassign": 2,
        // disallow use of the new operator when not part of an assignment or comparison
        "no-new": 2,
        // disallow use of new operator for Function object
        "no-new-func": 2,
        // disallows creating new instances of String,Number, and Boolean
        "no-new-wrappers": 2,
        // disallow use of octal literals (recommended)
        "no-octal": 2,
        // disallow use of octal escape sequences in string literals, such as var foo = "Copyright \251";
        "no-octal-escape": 2,
        // disallow reassignment of function parameters
        "no-param-reassign": 2,
        // disallow use of process.env
        "no-process-env": 0,
        // disallow usage of __proto__ property
        "no-proto": 2,
        // disallow declaring the same variable more than once (recommended)
        "no-redeclare": 2,
        // disallow use of assignment in return statement
        "no-return-assign": 2,
        // disallow use of javascript: urls.
        "no-script-url": 2,
        // disallow assignments where both sides are exactly the same (recommended)
        "no-self-assign": 2,
        // disallow comparisons where both sides are exactly the same
        "no-self-compare": 2,
        // disallow use of the comma operator
        "no-sequences": 2,
        // restrict what can be thrown as an exception
        "no-throw-literal": 2,
        // disallow unmodified conditions of loops
        "no-unmodified-loop-condition": 2,
        // disallow usage of expressions in statement position
        "no-unused-expressions": 2,
        // disallow unused labels (recommended)
        "no-unused-labels": 2,
        // disallow unnecessary .call() and .apply()
        "no-useless-call": 2,
        // disallow unnecessary concatenation of literals or template literals
        "no-useless-concat": 2,
        // disallow use of the void operator
        "no-void": 2,
        // disallow usage of configurable warning terms in comments - e.g. _T O D O or _F I X M E
        "no-warning-comments": 0,
        // disallow use of the with statement
        "no-with": 2,
        // require use of the second argument for parseInt()
        "radix": 2,
        // require declaration of all vars at the top of their containing scope
        "vars-on-top": 2,
        // require immediate function invocation to be wrapped in parentheses
        "wrap-iife": 2,
        // require or disallow Yoda conditions
        "yoda": 2,

        //
        // Strict Mode
        //
        // These rules relate to using strict mode.
        //
        // controls location of Use Strict Directives. 0: required by babel-eslint
        "strict": 0,

        //
        // Variables
        //
        // These rules have to do with variable declarations.
        //
        // enforce or disallow variable initializations at definition
        "init-declarations": 0,
        // disallow the catch clause parameter name being the same as a variable in the outer scope
        "no-catch-shadow": 2,
        // disallow deletion of variables (recommended)
        "no-delete-var": 2,
        // disallow labels that share a name with a variable
        "no-label-var": 2,
        // restrict usage of specified global variables
        "no-restricted-globals": 0,
        // disallow declaration of variables already declared in the outer scope
        "no-shadow": 2,
        // disallow shadowing of names such as arguments
        "no-shadow-restricted-names": 2,
        // disallow use of undeclared variables unless mentioned in a /*global */ block (recommended)
        "no-undef": 2,
        // disallow use of undefined when initializing variables
        "no-undef-init": 2,
        // disallow use of undefined variable
        "no-undefined": 0,
        // disallow declaration of variables that are not used in the code (recommended)
        "no-unused-vars": [2, {"argsIgnorePattern": "^_", "varsIgnorePattern": "^_"}],
// disallow use of variables before they are defined
        "no-use-before-define": 2,
        //
        // Node.js and CommonJS
        //
        // These rules are specific to JavaScript running on Node.js or using CommonJS in the browser.
        //
        // enforce return after a callback
        "callback-return": 2,
        // enforce require() on top-level module scope
        "global-require": 0,
        // enforce error handling in callbacks
        "handle-callback-err": 2,
        // disallow mixing regular variable and require declarations
        "no-mixed-requires": 2,
        // disallow use of new operator with the require function
        "no-new-require": 2,
        // disallow string concatenation with __dirname and __filename
        "no-path-concat": 2,
        // disallow process.exit()
        "no-process-exit": 0,
        // restrict usage of specified node imports
        "no-restricted-imports": 0,
        // restrict usage of specified node modules
        "no-restricted-modules": 0,
        // disallow use of synchronous methods
        "no-sync": 2,
        //
        // Stylistic Issues
        //
        // These rules are purely matters of style and are quite subjective.
        //
        // enforce spacing inside array brackets (fixable)
        "array-bracket-spacing": [2, "never"],
        // disallow or enforce spaces inside of single line blocks (fixable)
        "block-spacing": [2, "always"],
        // enforce one true brace style
        "brace-style": [1, "stroustrup"],
        // require camel case names
        "camelcase": [2, {properties: "never"}],
        // enforce spacing before and after comma (fixable)
        "comma-spacing": [2, {"before": false, "after": true}],
        // enforce one true comma style
        "comma-style": [2, "last"],
        // require or disallow padding inside computed properties (fixable)
        "computed-property-spacing": [2, "never"],
        // enforce consistent naming when capturing the current execution context
        "consistent-this": [2, "_this"],
        // enforce newline at the end of file, with no multiple empty lines (fixable)
        "eol-last": 2,
        // require function expressions to have a name
        "func-names": 0,
        // enforce use of function declarations or expressions
        "func-style": 0,
        // blacklist certain identifiers to prevent them being used
        "id-blacklist": 0,
        // this option enforces minimum and maximum identifier lengths (variable names, property names etc.)
        "id-length": 0,
        // require identifiers to match the provided regular expression
        "id-match": 0,
        // specify tab or space width for your code (fixable)
        "indent": [2, 4, {"SwitchCase": 1}],
        // specify whether double or single quotes should be used in JSX attributes (fixable)
        "jsx-quotes": [2, "prefer-double"],
        // enforce spacing between keys and values in object literal properties
        "key-spacing": [2, {"beforeColon": false, "afterColon": true}],
        // enforce spacing before and after keywords (fixable)
        "keyword-spacing": [2, {"before": true, "after": true}],
        // allow mixed 'LF' and 'CRLF' as linebreaks
        "linebreak-style": 0,
        "lines-around-comment": [2, {
            "beforeBlockComment": true,
            "afterBlockComment": false,
            "afterLineComment": false
        // enforce empty lines around comments
        }],
        // specify the maximum depth that blocks can be nested
        "max-depth": [2, 3],
        // specify the maximum length of a line in your program
        "max-len": [2, 150, 2],
        // specify the maximum depth callbacks can be nested
        "max-nested-callbacks": [2, 5],
        // limits the number of parameters that can be used in the function declaration
        "max-params": [2, 5],
        // specify the maximum number of statement allowed in a function
        "max-statements": 0,
        // require a capital letter for constructors
        "new-cap": [2, {"newIsCap": true, "capIsNew": false}],
        // disallow the omission of parentheses when invoking a constructor with no arguments
        "new-parens": 2,
        // require or disallow an empty newline after variable declarations
        "newline-after-var": [2, "always"],
        // enforce newline after each call when chaining the calls
        "newline-per-chained-call": 0,
        // disallow use of the Array constructor
        "no-array-constructor": 2,
        // disallow use of bitwise operators
        "no-bitwise": 0,
        // disallow use of the continue statement
        "no-continue": 2,
        // disallow comments inline after code
        "no-inline-comments": 1,
        // disallow if as the only statement in an else block
        "no-lonely-if": 2,
        // disallow mixed spaces and tabs for indentation (recommended)
        "no-mixed-spaces-and-tabs": 2,
        // disallow multiple empty lines
        "no-multiple-empty-lines": [2, {"max": 2}],
        // disallow negated conditions
        "no-negated-condition": 2,
        // disallow nested ternary expressions
        "no-nested-ternary": 2,
        // disallow the use of the Object constructor
        "no-new-object": 2,
        // disallow use of unary operators, ++ and --
        "no-plusplus": 0,
        // disallow use of certain syntax in code
        "no-restricted-syntax": [2, "WithStatement"],
        // disallow space between function identifier and application (fixable)
        "no-spaced-func": 2,
        // disallow the use of ternary operators
        "no-ternary": 0,
        // disallow trailing whitespace at the end of lines (fixable)
        "no-trailing-spaces": [2, {"skipBlankLines": true}],
        // allow dangling underscores in identifiers
        "no-underscore-dangle": 0,
        // allow the use of ternary operators when a simpler alternative exists
        "no-unneeded-ternary": 2,
        // disallow whitespace before properties
        "no-whitespace-before-property": 2,
        // require or disallow padding inside curly braces (fixable)
        "object-curly-spacing": [2, "never"],
        // require or disallow one variable declaration per function
        "one-var": [2, "never"],
        // require or disallow an newline around variable declarations
        "one-var-declaration-per-line": 2,
        // require assignment operator shorthand where possible or prohibit it entirely
        "operator-assignment": [2, "never"],
        // enforce operators to be placed before or after line breaks
        "operator-linebreak": [2, "after"],
        // allow padding within blocks
        "padded-blocks": 0,
        // require quotes around object literal property names
        "quote-props": [1, "as-needed"],
        // all allowed, specify whether backticks, double or single quotes should be used (fixable)
        "quotes": 0,
        // Require JSDoc comment
        "require-jsdoc": 0,
        // require or disallow use of semicolons instead of ASI (fixable)
        "semi": [2, "always"],
        // enforce spacing before and after semicolons (fixable)
        "semi-spacing": [2, {"before": false, "after": true}],
        // sort import declarations within module
        "sort-imports": 0,
        // sort variables within the same declaration block
        "sort-vars": 0,
        // require or disallow a space before blocks (fixable)
        "space-before-blocks": [2, "always"],
        // require or disallow a space before function opening parenthesis (fixable)
        "space-before-function-paren": [2, {"anonymous": "always", "named": "never"}],
        // require or disallow spaces inside parentheses (fixable)
        "space-in-parens": [2, "never"],
        // require spaces around operators (fixable)
        "space-infix-ops": 2,
        // require or disallow spaces before/after unary operators (fixable)
        "space-unary-ops": [2, {"words": true, "nonwords": false}],
        // require or disallow a space immediately following the // or /* in a comment
        "spaced-comment": [2, "always"],
        // require regex literals to be wrapped in parentheses
        "wrap-regex": 0,
        //
        // ECMAScript 6
        //
        // These rules are only relevant to ES6 environments and are off by default.
        //
        // require braces in arrow function body
        "arrow-body-style": [2, "as-needed"],
        // require parens in arrow function arguments
        // "arrow-parens": [2, "as-needed"],
        // require space before/after arrow function's arrow (fixable)
        "arrow-spacing": 2,
        // verify calls of super() in constructors (recommended)
        "constructor-super": 2,
        // enforce spacing around the * in generator functions (fixable)
        "generator-star-spacing": [2, {"before": false, "after": true}],
        // disallow modifying variables of class declarations (recommended)
        "no-class-assign": 2,
        // disallow arrow functions where they could be confused with comparisons
        "no-confusing-arrow": 0,
        // disallow modifying variables that are declared using const (recommended)
        "no-const-assign": 2,
        // disallow duplicate name in class members (recommended)
        "no-dupe-class-members": 2,
        // disallow use of the new operator with the Symbol object (recommended)
        "no-new-symbol": 2,
        // disallow use of this/super before calling super() in constructors (recommended)
        "no-this-before-super": 2,
        // disallow unnecessary constructor
        "no-useless-constructor": 2,
        // require let or const instead of var
        "no-var": 2,
        // require method and property shorthand syntax for object literals
        "object-shorthand": 2,
        // suggest using arrow functions as callbacks
        "prefer-arrow-callback": 2,
        // suggest using const declaration for variables that are never modified after declared
        "prefer-const": 2,
        // suggest using Reflect methods where applicable
        "prefer-reflect": 2,
        // suggest using the rest parameters instead of arguments
        "prefer-rest-params": 2,
        // suggest using the spread operator instead of .apply()
        "prefer-spread": 2,
        // suggest using template literals instead of strings concatenation
        "prefer-template": 2,
        // disallow generator functions that do not have yield
        "require-yield": 2,
        // enforce spacing around embedded expressions of template strings (fixable)
        "template-curly-spacing": 2,
        // enforce spacing around the * in yield* expressions (fixable)
        "yield-star-spacing": 2,
    },
    globals: {
        "DEFAULT_LANG" : "writable"
    }
};
