/**
 * Module dependencies.
 */


import List from 'democracyos-list.js';
import debug from 'debug';
import template from './template.jade';
import View from '../view/view';

let log = debug('democracyos:admin-whitelist');

module.exports = AdminWhitelists;

/**
 * Creates `AdminUsers` view for admin
 */

export default class AdminWhitelists extends View {

  constructor(whitelists) {
    super(template, { whitelists: whitelists });
  }

  switchOn() {
    this.list = new List('whitelists-wrapper', { valueNames: ['whitelist-title'] });
  }

}