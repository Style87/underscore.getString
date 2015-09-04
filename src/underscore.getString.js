_.mixin({
	getString: function (id, data) {
		data = data || {};
		var compiled = _.template($('#s-'+id).text());
		return compiled(data);
	}
});