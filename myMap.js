var map;
function loadMapScenario() {
    map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
        credentials: 'AikCEUj_rGAWu8x2XBM0lIgs25BcQN7AVFa7vTvQbpsVSMbcdTZB_7XgZJlR0t6g'
    });
    add_pokemon_layer();
}

// 1. Define pokemon data format, create mock pokemon data
map_items = [
    {
      "pokemon_id" : 12,
      "expire" : 1234567,
      "longitude" : -73.9800345,
      "latitude" : 40.7596651,
    }
]

// 2. Create pokemon image on map
function get_pokemon_layer_from_map_items(map_items) {
    var layer = new Microsoft.Maps.Layer();
    var pushpins = []
    for (var i in map_items) {
      var map_item = map_items[i];
      var pushpin = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(map_item["latitude"], map_item["longitude"]), 
                                               { icon: 'https://www.bingmapsportal.com/Content/images/poi_custom.png' });
      pushpins.add(pushpin)
    }
    layer.add(pushpins);
    return layer;
}
function add_pokemon_layer() {
    var pokemon_layer = get_pokemon_layer_from_map_items(map_items)
    map.layers.insert(pokemon_layer);
}


// 3. Add pokemon counter down refresh.

// 4. Connect with REST API
