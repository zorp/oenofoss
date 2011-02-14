F.create('Pip',{
	
	// Properties
	cookieName: 'foss_oenofoss_pipdata',
	isCalculated: false,
	
	// Constructor
	init: function() {},
	
	
	// Methods
	setGeneValue: function(n, v) {
		var page = new F.Page();
		this.Generic[this.Data.product][page.currency][n] = parseFloat(v);
		return true;
	},
	
	setFossValue: function(n, v) {
		var page = new F.Page();
		this.Foss[this.Data.product][page.currency][n] = parseFloat(v);
		return true;
	},
	
	
	saveData: function() {
		if(this.isCalculated) {
			var data = {
				isCalculated: this.isCalculated,
				product: this.Data.product,
				Generic: {
					wineScan: this.Generic.wineScan,
					wineScanBasic: this.Generic.wineScanBasic,
					oenofoss: this.Generic.oenofoss
				},
				Results: this.Data.results
			};
			
			var json = $.toJSON(data);
			
			$.cookie(this.cookieName, json, { path: '/', expires: 365 })
		}
	},
	
	
	loadData: function() {
		var cookie		= $.cookie(this.cookieName);
		var cookieData	= $.evalJSON(cookie);
		
		if(cookieData != null) {
			this.Generic.wineScan 		= cookieData.Generic.wineScan;
			this.Generic.wineScanBasic	= cookieData.Generic.wineScanBasic;
			this.Generic.oenofoss		= cookieData.Generic.oenofoss;
			this.Data.results			= cookieData.Results;
			this.Data.product			= cookieData.product;
			this.isCalculated			= cookieData.isCalculated;
			
			var page = new F.Page();
			
			page.setProduct(this.Data.product);
			
			$('#samplesPrDay_pre').attr('value', this.Data.results.samplesPrDay);
			$('#productionVolumePrYear option[value='+this.Data.product+']').attr('selected', 'selected');
		}
		
	},
	
	
	Calculate: function(v) {
		
		this.isCalculated = true;
		
		this.CalTotalSamples(v.samplesPrDay, v.testingDaysPrYear);
		this.CalTotalAnnualCost(v.totalMaterialCost, v.wineSampleCost);
		this.CalTotalLabourCost(v.timeSpend, v.hourWage);
		this.CalTotalAnalysisCost();
		this.CalAnnualCostSavings(v.totalAnalysisCost);
		this.CalPaybackTime(v.productCostPrice);
		
		this.saveData();
		
		return this.Data.results;
		
	},
	
	CalTotalSamples: function(a,b) {
		
		this.Data.results.samplesPrDay			= a;
		this.Data.results.testingDaysPrYear		= b;
		this.Data.results.totalSamplesPrYear	= a*b
		
		return this.Data.results.totalSamplesPrYear;
		
	},
	
	CalTotalAnnualCost: function(a,b) {
		
		var totalSamplesPrYear 			= this.Data.results.totalSamplesPrYear;
		
		if(totalSamplesPrYear <= 0) {
			return false;
		}
		
		this.Data.results.totalMaterialCost		= a;
		this.Data.results.wineSampleCost		= b;
		this.Data.results.totalAnnualCost		= (a+b)*totalSamplesPrYear
		
		return this.Data.totalAnnualCost;
		
	},
	
	CalTotalLabourCost: function(a,b) {
		
		var totalSamplesPrYear 			= this.Data.results.totalSamplesPrYear;
		
		if(totalSamplesPrYear <= 0) {
			return false;
		}
		
		this.Data.results.timeSpend 			= a;
		this.Data.results.hourWage 				= b;
		this.Data.results.totalLabourCost		= totalSamplesPrYear*(a/60)*b
		
		return this.Data.results.totalLabourCost;
		
	},
	
	CalTotalAnalysisCost: function() {
		
		var totalAnnualCost 			= this.Data.results.totalAnnualCost;
		var totalLabourCost 			= this.Data.results.totalLabourCost;
		
		if(totalAnnualCost <= 0) {
			return false;
		}
		
		if(totalLabourCost <= 0) {
			return false;
		}
		
		this.Data.results.totalAnalysisCost		= totalLabourCost+totalAnnualCost;
		
		return this.Data.results.totalAnalysisCost
		
	},
	
	CalAnnualCostSavings: function(a) {
		
		var totalAnalysisCost 			= this.Data.results.totalAnalysisCost;
		
		if(totalAnalysisCost <= 0) {
			return false;
		}
		
		this.Data.results.annualCostSavings		= totalAnalysisCost-a;
		
		return this.Data.results.annualCostSavings;
		
	},
	
	CalPaybackTime: function(a) {
		
		var annualCostSavings 			= this.Data.results.annualCostSavings;
		
		if(annualCostSavings <= 0) {
			return false;
		}
		
		this.Data.results.paybackTime			= a/annualCostSavings;
		
		return this.Data.results.paybackTime;
		
		
	}
	
});