
$('#map_canvas').gmap({'callback': function() {
    var self = this; // we can't use "this" inside the click function (that refers to the marker object in this example)

        self.addMarker({'position': '57.7973333,12.0502107', 'bounds': true}).click(function() {
            self.openInfoWindow({'content': 'Hello World'}, this);
        });

    }});
