'use strict';

const CompositeDisposable = require('atom').CompositeDisposable;
// const autocompleteProvider = require('./autocomplete/provider');
// const hyperclickProvider = require('./hyperclick/provider');

module.exports = {
    subscriptions: null,

    activate(state) {
        // autocompleteProvider.onActivate();

        this.subscriptions = new CompositeDisposable();

        return Promise.resolve()
            .then(() => {
                return require('atom-package-deps').install('language-radi');
            })
            .catch((e) => {
                console.log(e);
            });
    },

    deactivate() {
        this.subscriptions.dispose();
    },

    // getAutocompleteProvider() {
    //     return autocompleteProvider;
    // },

    // getHyperclickProvider() {
    //     return hyperclickProvider;
    // }
};
