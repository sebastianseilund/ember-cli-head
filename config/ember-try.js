/*jshint node:true*/
module.exports = {
  scenarios: [
    {
      name: 'default',
      dependencies: { }
    },
    {
      name: 'ember 2.9.0-beta.5',
      dependencies: {
        'ember': '2.9.0-beta.5'
      }
    },
    {
      name: 'ember 2.9.0',
      dependencies: {
        'ember': '2.9.0'
      }
    },
    {
      name: 'ember 2.10.0-beta.1',
      dependencies: {
        'ember': '2.10.0-beta.1'
      }
    },
    {
      name: 'ember-release',
      dependencies: {
        'ember': 'components/ember#release'
      },
      resolutions: {
        'ember': 'release'
      }
    },
    {
      name: 'ember-beta',
      dependencies: {
        'ember': 'components/ember#beta'
      },
      resolutions: {
        'ember': 'beta'
      }
    },
    {
      name: 'ember-canary',
      dependencies: {
        'ember': 'components/ember#canary'
      },
      resolutions: {
        'ember': 'canary'
      }
    }
  ]
};
