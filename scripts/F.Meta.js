F.create('Meta', {
	
	// Properties
	cookieName: 'foss_oenofoss_metadata',
	
	Data: {
		isLogged: false
	},
	
	// Constructor
	init: function() {
		this.loadMeta();
	},
	
	saveMeta: function() {
		if(this.Data.isLogged) {
			data = $.toJSON(this.Data);
			
			$.cookie(this.cookieName, data, { path: '/', expires: 365 })
		}
	},
	
	loadMeta: function() {
		var cookie		= $.cookie(this.cookieName);
		var cookieData	= $.evalJSON(cookie);
		
		if(cookieData != null) {
			this.Data = cookieData;
		}
	}
	
});