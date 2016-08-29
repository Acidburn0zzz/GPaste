/*
 * This file is part of GPaste.
 *
 * Copyright (c) 2010-2016, Marc-Antoine Perennou <Marc-Antoine@Perennou.com>
 */
/* -*- mode: js2; js2-basic-offset: 4; indent-tabs-mode: nil -*- */

const Lang = imports.lang;
const Signals = imports.signals;

const St = imports.gi.St;

const GPastePageItem = new Lang.Class({
    Name: 'GPastePageItem',
    Extends: St.Button,

    _init: function(page) {
        this.actor = new St.Button({
            reactive: true,
            can_focus: true,
            track_hover: true,
            style_class: 'pager-button'
        });

        this.setPage(page);

        this.actor.connect('clicked', Lang.bind(this, function() {
            this.emit('switch', this._page);
        }));
    },

    setPage: function(page) {
        this._page = page;

        if (page > 0) {
            this.child = new St.Label({ text: '' + page });
            this.actor.show();
        } else {
            this.actor.hide();
        }
    }
});
Signals.addSignalMethods(GPastePageItem.prototype);
