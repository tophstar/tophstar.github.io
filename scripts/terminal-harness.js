var terminalHarness = (function () {
        /**
         * Instance of the VideoRX Player
         * @type {[type]}
         */
        terminal = null,

        /**
         * Build the VideoRX Player
         * @return {[type]} [description]
         */
        buildTerminal = function () {
            // Need to cache bust..
            require.config({
                baseUrl: '',
                paths: {
                    "terminal": "scripts/terminal.js?cachebust=" + (new Date()).getTime()
                }
            });

            require(["terminal"], function (Terminal) {
                var terminalOptions = {
                    target: "#terminal-element"
                };

                terminal = Terminal(terminalOptions);

            });
        }

    return {
        /**
         * Player constructor
         *
         * @return {[type]} [description]
         */
        construct: function () {
            buildTerminal();
        },
    };
})();

$(document).ready(terminalHarness.construct);