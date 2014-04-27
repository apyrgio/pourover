var collection;

var NameSort = PourOver.Sort.extend({fn: function(a,b){
	return a.title.localeCompare(b.title);
}});
var name_sort = new NameSort("title");

function assignJSON(data) {
	console.log(data);
	collection = new PourOver.Collection(data);
	collection.addSort(name_sort);
}

$.getJSON( "http://jsonplaceholder.typicode.com/posts", assignJSON);

function populateTable(json_array) {
	var items = [];
	$.each( json_array, function( key, val ) {
		items.push(val.userId + "   " + val.title);
		items.push("</br>");
	});
	$( "<ul/>", {
		"class": "my-new-list",
		html: items.join( "" )
	}).appendTo( "#table" );
}

function populatePlainTable() {
	populateTable(collection.items);
}

function sortByNameTable() {
	populateTable(collection.getSortedItems("title"));
}

//$(document).ready(function() {
	//$('#demo').html( '<table cellpadding="0" cellspacing="0" border="0" class="display" id="example"></table>' );
	//$('#example').dataTable( {
		//"aaData": [
			//[> Reduced data set <]
			//[ "Trident", "Internet Explorer 4.0", "Win 95+", 4, "X" ],
			//[ "Trident", "Internet Explorer 5.0", "Win 95+", 5, "C" ],
			//[ "Trident", "Internet Explorer 5.5", "Win 95+", 5.5, "A" ],
			//[ "Trident", "Internet Explorer 6.0", "Win 98+", 6, "A" ],
			//[ "Trident", "Internet Explorer 7.0", "Win XP SP2+", 7, "A" ],
			//[ "Gecko", "Firefox 1.5", "Win 98+ / OSX.2+", 1.8, "A" ],
			//[ "Gecko", "Firefox 2", "Win 98+ / OSX.2+", 1.8, "A" ],
			//[ "Gecko", "Firefox 3", "Win 2k+ / OSX.3+", 1.9, "A" ],
			//[ "Webkit", "Safari 1.2", "OSX.3", 125.5, "A" ],
			//[ "Webkit", "Safari 1.3", "OSX.3", 312.8, "A" ],
			//[ "Webkit", "Safari 2.0", "OSX.4+", 419.3, "A" ],
			//[ "Webkit", "Safari 3.0", "OSX.4+", 522.1, "A" ]
		//],
		//"aoColumns": [
			//{ "sTitle": "Engine" },
			//{ "sTitle": "Browser" },
			//{ "sTitle": "Platform" },
			//{ "sTitle": "Version", "sClass": "center" },
			//{ "sTitle": "Grade", "sClass": "center" }
		//]
	//} );   
//} );

function clearTable() {
	$("#table").html("");
}

