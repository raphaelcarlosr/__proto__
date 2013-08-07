test( "strictEqual test", function() {
	var obj = {a:1, b:2, c:3}, values = Object.values(obj);
  	strictEqual( [1, 2, 3], values, "var obj = {a:1, b:2, c:3}, values = Object.values(obj); //return [1, 2, 3]" );
});