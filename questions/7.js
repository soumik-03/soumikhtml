function sort_by_string_length(arr) {
	for (var i = 0; i < arr.length; i++) {
		for (var j = i + 1; j < arr.length; j++) {
			if (arr[i].length > arr[j].length) {
				var m = arr[i];
				arr[i] = arr[j];
				arr[j] = m;
			}
		}
	}
	return arr;
}
var arr = ["xyz","acd","aa","bb","zzz","", "a","b"];
console.log("Original array: "+ arr+"\n");
console.log(sort_by_string_length(["xyz","acd","aa","bb","zzz","", "a","b"]));