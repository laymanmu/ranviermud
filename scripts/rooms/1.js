const CommandUtil = require('../../src/command_util')
  .CommandUtil;
const l10nFile = __dirname + '/../../l10n/scripts/rooms/1.js.yml';
const l10n = require('../../src/l10n')(l10nFile);
const examiner = require('../../src/examine').examine;

exports.listeners = {

  examine: l10n => {
    return (args, player, players) => {
      //TODO: Now, this would be a good case for an ES6 map.
      // For example, all of the beer ones could be an array mapped to the single function.
      const config = {
        poi: {
          vats:     found.bind(null, 'BEER'),
          vat:      found.bind(null, 'BEER'),
          taps:     found.bind(null, 'BEER'),
          hoses:    found.bind(null, 'BEER'),
          bar:      found.bind(null, 'BEER'),
          beer:     found.bind(null, 'BEER'),

          lanterns: found.bind(null, 'LIGHTS'),
          lights:   found.bind(null, 'LIGHTS')
        }
      };

      return examiner(args, player, players, config);

      function found(what) {
        player.sayL10n(l10n, what);
        players.eachIf(
          p => CommandUtil.inSameRoom(player, p),
          p => { p.sayL10n(l10n, what + '_OTHER', player.getName()) });
      }

    };
  },
};