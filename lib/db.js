

exports.put = function (data) {

};

// Temporary stub function for retrieving persisted data.
// For now we hardcode the data to return.
exports.get = function (key, callback) {
	var data = {attacks: [ 
							{lat:38.0271706, lon:23.72199030000001, verbal:false, home_property:false, severity:0, description:'attack, details not confirmed, Cidiki Kaba, 36 year old Senegalese asylum seeker'},
			             	{lat:37.9556559, lon:23.69876350000004, verbal:false, home_property:false, severity:0, description:'attack on him and two of his friends, details not confirmed. Malak, 23 year old Egyptian migrant, and two of his friends'},
				            {lat:37.9964818, lon:23.72737929999994, verbal:true, home_property:false, severity:1, description: 'they asked her where she was from, then tried to take her daughter away and hit her on the head with a wooden stick. She fell bleeding and they ran away. No body around her helped. Her baby and daughter were fine. Anonymous, six months pregnant 20 year old woman from Somalia'},
				            {lat:38.0119201, lon:23.72798940000007, verbal:true, home_property:false, severity:1, description: 'A month long period of many attacks of immigrants in "revenge" for a Greek man who was killed on the 10th. The 12th was a particularly violent day. At least 25 people hospitalised from attacks.'}
			             ]};

 	if(callback)
 		callback(data);

 	return this;
}