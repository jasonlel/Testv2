model.Payments.trxLocalAmt.onGet = function() {	var prefs = ds.Preferences.all();	var ret = this.trxAmount;	switch(this.trxCurrency)	{		case("EUR"):		if(prefs[0].nzdeur!=0)		{			ret = Math.round(this.trxAmount / prefs[0].nzdeur);		}		break;				case("USD"):		if(prefs[0].nzdusd!=0)		{			ret = Math.round(this.trxAmount / prefs[0].nzdusd);		}		break;				case("AUD"):		if(prefs[0].nzdaud!=0)		{			ret = Math.round(this.trxAmount / prefs[0].nzdaud);		}		break;			}	return ret;};