// Generated by CoffeeScript 1.8.0
var CozyInstance, Task, async;

async = require('async');

Task = require('../models/tasky');

CozyInstance = require('../models/cozy_instance');

module.exports.main = function(req, res) {
  return async.parallel([
    function(callback) {
      return Task.allNotArchived(function(err, tasks) {
        if (err != null) {
          return callback(err);
        } else {
          return callback(null, tasks);
        }
      });
    }, function(callback) {
      return Task.allArchived(function(err, tasks) {
        if (err != null) {
          return callback(err);
        } else {
          return callback(null, tasks);
        }
      });
    }, function(callback) {
      return CozyInstance.getLocale(function(err, locale) {
        if (err != null) {
          return callback(err);
        } else {
          return callback(null, locale);
        }
      });
    }
  ], function(err, results) {
    var archivedTasks, locale, tasks;
    if (err != null) {
      return res.send({
        error: 'Server error occurred while retrieving data',
        stack: err.stack
      });
    } else {
      tasks = results[0], archivedTasks = results[1], locale = results[2];
      return res.render('index.jade', {
        imports: "window.locale = \"" + locale + "\";\nwindow.tasks = " + (JSON.stringify(tasks)) + ";\nwindow.archivedTasks = " + (JSON.stringify(archivedTasks)) + ";"
      });
    }
  });
};
