var _ = require('underscore');
var parley = require('parley');

var Collection = module.exports = function(definition) {

	// Sync (depending on scheme)
	switch (definition.scheme) {
		case "drop"	: definition.sync = _.bind(definition.adapter.sync.drop, definition.adapter, definition); break;
		case "alter": definition.sync = _.bind(definition.adapter.sync.alter, definition.adapter, definition); break;
		default		: throw new Error('Invalid scheme in '+definition.identity+' model!');
	}
	
	_.extend(this, definition);

	this.create = function(values, cb) {
		this.adapter.create(this,values,cb);
	};
	this.find = function(criteria, cb) {

	};
	this.update = function(criteria, values, cb) {

	};
	this.destroy = function(criteria, cb) {

	};

	// Bind instance methods to collection
	_.bindAll(definition);
	_.bindAll(this);
};