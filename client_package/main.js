// And yet again, this is all we need for a client package.
//jcmp.print("This message will appear in the Scripting.log in the 'logs' directory of your client");
var points = require("./config/poi.json");
points = JSON.parse(JSON.stringify(points));


// render points of interest
for(point in points){
    const poi = new POI(0, new Vector3f(parseFloat(points[point][x]), parseFloat(points[point][y]), parseFloat(points[point][z])));
}
