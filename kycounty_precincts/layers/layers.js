var wms_layers = [];

var format_Precincts_0 = new ol.format.GeoJSON();
var features_Precincts_0 = format_Precincts_0.readFeatures(json_Precincts_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Precincts_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Precincts_0.addFeatures(features_Precincts_0);
var lyr_Precincts_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Precincts_0, 
                style: style_Precincts_0,
                interactive: true,
                title: '<img src="styles/legend/Precincts_0.png" /> Precincts'
            });
var format_County_1 = new ol.format.GeoJSON();
var features_County_1 = format_County_1.readFeatures(json_County_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_County_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_County_1.addFeatures(features_County_1);
var lyr_County_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_County_1, 
                style: style_County_1,
                interactive: true,
                title: '<img src="styles/legend/County_1.png" /> County'
            });

lyr_Precincts_0.setVisible(true);lyr_County_1.setVisible(true);
var layersList = [lyr_Precincts_0,lyr_County_1];
lyr_Precincts_0.set('fieldAliases', {'county': 'county', 'precinct_code': 'precinct_code', 'precinct_name': 'precinct_name', 'dnc_precinct_id': 'dnc_precinct_id', 'van_precinct_id': 'van_precinct_id', });
lyr_County_1.set('fieldAliases', {'county_fips_code': 'county_fips_code', 'county_name': 'county_name', });
lyr_Precincts_0.set('fieldImages', {'county': 'TextEdit', 'precinct_code': 'TextEdit', 'precinct_name': 'TextEdit', 'dnc_precinct_id': 'Range', 'van_precinct_id': 'Range', });
lyr_County_1.set('fieldImages', {'county_fips_code': 'Range', 'county_name': 'TextEdit', });
lyr_Precincts_0.set('fieldLabels', {'county': 'no label', 'precinct_code': 'no label', 'precinct_name': 'no label', 'dnc_precinct_id': 'no label', 'van_precinct_id': 'no label', });
lyr_County_1.set('fieldLabels', {'county_fips_code': 'no label', 'county_name': 'no label', });
lyr_County_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});