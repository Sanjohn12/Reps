var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatelliteHybrid_1 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_CartoDark_2 = new ol.layer.Tile({
            'title': 'Carto Dark',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
            })
        });

        var lyr_CartoLight_3 = new ol.layer.Tile({
            'title': 'Carto Light',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.pn'
            })
        });

        var lyr_EsriImagery_4 = new ol.layer.Tile({
            'title': 'Esri Imagery',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_EsriStreet_5 = new ol.layer.Tile({
            'title': 'Esri Street',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_EsriTopographic_6 = new ol.layer.Tile({
            'title': 'Esri Topographic',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var lyr_bathymetrycopy_7 = new ol.layer.Image({
        opacity: 1,
        
    title: 'bathymetry copy<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/bathymetrycopy_7.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8574084.804019, 324578.624582, 9540177.253744, 1209483.276790]
        })
    });
var lyr_bathymetry_8 = new ol.layer.Image({
        opacity: 1,
        
    title: 'bathymetry<br />\
    <img src="styles/legend/bathymetry_8_0.png" /> -4417<br />\
    <img src="styles/legend/bathymetry_8_1.png" /> -3546<br />\
    <img src="styles/legend/bathymetry_8_2.png" /> -2676<br />\
    <img src="styles/legend/bathymetry_8_3.png" /> -1805<br />\
    <img src="styles/legend/bathymetry_8_4.png" /> -934<br />\
    <img src="styles/legend/bathymetry_8_5.png" /> -63<br />\
    <img src="styles/legend/bathymetry_8_6.png" /> 807<br />\
    <img src="styles/legend/bathymetry_8_7.png" /> 1611<br />\
    <img src="styles/legend/bathymetry_8_8.png" /> 2281<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/bathymetry_8.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8574084.804019, 324578.624582, 9540177.253744, 1209483.276790]
        })
    });
var lyr_tree_cover_2000_puttalam_9 = new ol.layer.Image({
        opacity: 1,
        
    title: 'tree_cover_2000_puttalam<br />\
    <img src="styles/legend/tree_cover_2000_puttalam_9_0.png" /> 1<br />\
    <img src="styles/legend/tree_cover_2000_puttalam_9_1.png" /> 26<br />\
    <img src="styles/legend/tree_cover_2000_puttalam_9_2.png" /> 51<br />\
    <img src="styles/legend/tree_cover_2000_puttalam_9_3.png" /> 75<br />\
    <img src="styles/legend/tree_cover_2000_puttalam_9_4.png" /> 100<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/tree_cover_2000_puttalam_9.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8870200.000000, 810875.572296, 8950100.000000, 1032885.203584]
        })
    });
var lyr_tree_loss_year_puttalam_10 = new ol.layer.Image({
        opacity: 1,
        
    title: 'tree_loss_year_puttalam<br />\
    <img src="styles/legend/tree_loss_year_puttalam_10_0.png" /> 1<br />\
    <img src="styles/legend/tree_loss_year_puttalam_10_1.png" /> 2<br />\
    <img src="styles/legend/tree_loss_year_puttalam_10_2.png" /> 3<br />\
    <img src="styles/legend/tree_loss_year_puttalam_10_3.png" /> 4<br />\
    <img src="styles/legend/tree_loss_year_puttalam_10_4.png" /> 5<br />\
    <img src="styles/legend/tree_loss_year_puttalam_10_5.png" /> 6<br />\
    <img src="styles/legend/tree_loss_year_puttalam_10_6.png" /> 7<br />\
    <img src="styles/legend/tree_loss_year_puttalam_10_7.png" /> 8<br />\
    <img src="styles/legend/tree_loss_year_puttalam_10_8.png" /> 9<br />\
    <img src="styles/legend/tree_loss_year_puttalam_10_9.png" /> 10<br />\
    <img src="styles/legend/tree_loss_year_puttalam_10_10.png" /> 11<br />\
    <img src="styles/legend/tree_loss_year_puttalam_10_11.png" /> 12<br />\
    <img src="styles/legend/tree_loss_year_puttalam_10_12.png" /> 13<br />\
    <img src="styles/legend/tree_loss_year_puttalam_10_13.png" /> 14<br />\
    <img src="styles/legend/tree_loss_year_puttalam_10_14.png" /> 15<br />\
    <img src="styles/legend/tree_loss_year_puttalam_10_15.png" /> 16<br />\
    <img src="styles/legend/tree_loss_year_puttalam_10_16.png" /> 17<br />\
    <img src="styles/legend/tree_loss_year_puttalam_10_17.png" /> 18<br />\
    <img src="styles/legend/tree_loss_year_puttalam_10_18.png" /> 19<br />\
    <img src="styles/legend/tree_loss_year_puttalam_10_19.png" /> 20<br />\
    <img src="styles/legend/tree_loss_year_puttalam_10_20.png" /> 21<br />\
    <img src="styles/legend/tree_loss_year_puttalam_10_21.png" /> 22<br />\
    <img src="styles/legend/tree_loss_year_puttalam_10_22.png" /> 23<br />\
    <img src="styles/legend/tree_loss_year_puttalam_10_23.png" /> 24<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/tree_loss_year_puttalam_10.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8870200.000000, 810875.572296, 8950100.000000, 1032885.203584]
        })
    });
var lyr_MODIS_NDVI_2025_05_11 = new ol.layer.Image({
        opacity: 1,
        
    title: 'MODIS_NDVI_2025_05<br />\
    <img src="styles/legend/MODIS_NDVI_2025_05_11_0.png" /> -1520.0000<br />\
    <img src="styles/legend/MODIS_NDVI_2025_05_11_1.png" /> 1013.5000<br />\
    <img src="styles/legend/MODIS_NDVI_2025_05_11_2.png" /> 3547.0000<br />\
    <img src="styles/legend/MODIS_NDVI_2025_05_11_3.png" /> 6080.5000<br />\
    <img src="styles/legend/MODIS_NDVI_2025_05_11_4.png" /> 8614.0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/MODIS_NDVI_2025_05_11.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8870120.511586, 810853.679049, 8950255.556422, 1032931.764201]
        })
    });
var lyr_CHIRPS_Rainfall_May_2025_12 = new ol.layer.Image({
        opacity: 1,
        
    title: 'CHIRPS_Rainfall_May_2025<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_12_0.png" /> 0.3652<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_12_1.png" /> 3.9670<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_12_2.png" /> 7.5688<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_12_3.png" /> 11.1707<br />\
    <img src="styles/legend/CHIRPS_Rainfall_May_2025_12_4.png" /> 14.7725<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/CHIRPS_Rainfall_May_2025_12.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8870120.511586, 810853.679049, 8950255.556422, 1032931.764201]
        })
    });
var lyr_Soil_pH_Coastal_50__0to30cm_13 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Soil_pH_Coastal_50__0to30cm<br />\
    <img src="styles/legend/Soil_pH_Coastal_50__0to30cm_13_0.png" /> 4.9333<br />\
    <img src="styles/legend/Soil_pH_Coastal_50__0to30cm_13_1.png" /> 5.4500<br />\
    <img src="styles/legend/Soil_pH_Coastal_50__0to30cm_13_2.png" /> 5.9667<br />\
    <img src="styles/legend/Soil_pH_Coastal_50__0to30cm_13_3.png" /> 6.4833<br />\
    <img src="styles/legend/Soil_pH_Coastal_50__0to30cm_13_4.png" /> 7.0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Soil_pH_Coastal_50__0to30cm_13.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8870171.314106, 810853.800476, 8950205.150893, 1032880.722193]
        })
    });
var lyr_Chlorophyll_Index_2025_December_toMay_14 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Chlorophyll_Index_2025_December_to-May<br />\
    <img src="styles/legend/Chlorophyll_Index_2025_December_toMay_14_0.png" /> -0.3005<br />\
    <img src="styles/legend/Chlorophyll_Index_2025_December_toMay_14_1.png" /> -0.1037<br />\
    <img src="styles/legend/Chlorophyll_Index_2025_December_toMay_14_2.png" /> 0.0930<br />\
    <img src="styles/legend/Chlorophyll_Index_2025_December_toMay_14_3.png" /> 0.2898<br />\
    <img src="styles/legend/Chlorophyll_Index_2025_December_toMay_14_4.png" /> 0.4866<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Chlorophyll_Index_2025_December_toMay_14.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8874884.031776, 890770.717231, 8888321.470759, 937343.926046]
        })
    });
var lyr_wind20252020_15 = new ol.layer.Image({
        opacity: 1,
        
    title: 'wind(2025-2020)<br />\
    <img src="styles/legend/wind20252020_15_0.png" /> 3.4006<br />\
    <img src="styles/legend/wind20252020_15_1.png" /> 4.2192<br />\
    <img src="styles/legend/wind20252020_15_2.png" /> 5.0379<br />\
    <img src="styles/legend/wind20252020_15_3.png" /> 5.8565<br />\
    <img src="styles/legend/wind20252020_15_4.png" /> 6.6751<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/wind20252020_15.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8870440.641953, 810887.020251, 8950407.287125, 1032799.422048]
        })
    });
var lyr_average_temp_25_may_16 = new ol.layer.Image({
        opacity: 1,
        
    title: 'average_temp_25_may<br />\
    <img src="styles/legend/average_temp_25_may_16_0.png" /> 27.6115<br />\
    <img src="styles/legend/average_temp_25_may_16_1.png" /> 28.0908<br />\
    <img src="styles/legend/average_temp_25_may_16_2.png" /> 28.5701<br />\
    <img src="styles/legend/average_temp_25_may_16_3.png" /> 29.0494<br />\
    <img src="styles/legend/average_temp_25_may_16_4.png" /> 29.5287<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/average_temp_25_may_16.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8870440.641953, 810887.020251, 8950407.287125, 1032799.422048]
        })
    });
var format_GND_Census_17 = new ol.format.GeoJSON();
var features_GND_Census_17 = format_GND_Census_17.readFeatures(json_GND_Census_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GND_Census_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GND_Census_17.addFeatures(features_GND_Census_17);
var lyr_GND_Census_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GND_Census_17, 
                style: style_GND_Census_17,
                popuplayertitle: 'GND_Census',
                interactive: false,
                title: '<img src="styles/legend/GND_Census_17.png" /> GND_Census'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleSatelliteHybrid_1.setVisible(true);lyr_CartoDark_2.setVisible(true);lyr_CartoLight_3.setVisible(true);lyr_EsriImagery_4.setVisible(true);lyr_EsriStreet_5.setVisible(true);lyr_EsriTopographic_6.setVisible(true);lyr_bathymetrycopy_7.setVisible(false);lyr_bathymetry_8.setVisible(false);lyr_tree_cover_2000_puttalam_9.setVisible(false);lyr_tree_loss_year_puttalam_10.setVisible(false);lyr_MODIS_NDVI_2025_05_11.setVisible(false);lyr_CHIRPS_Rainfall_May_2025_12.setVisible(false);lyr_Soil_pH_Coastal_50__0to30cm_13.setVisible(false);lyr_Chlorophyll_Index_2025_December_toMay_14.setVisible(false);lyr_wind20252020_15.setVisible(false);lyr_average_temp_25_may_16.setVisible(false);lyr_GND_Census_17.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleSatelliteHybrid_1,lyr_CartoDark_2,lyr_CartoLight_3,lyr_EsriImagery_4,lyr_EsriStreet_5,lyr_EsriTopographic_6,lyr_bathymetrycopy_7,lyr_bathymetry_8,lyr_tree_cover_2000_puttalam_9,lyr_tree_loss_year_puttalam_10,lyr_MODIS_NDVI_2025_05_11,lyr_CHIRPS_Rainfall_May_2025_12,lyr_Soil_pH_Coastal_50__0to30cm_13,lyr_Chlorophyll_Index_2025_December_toMay_14,lyr_wind20252020_15,lyr_average_temp_25_may_16,lyr_GND_Census_17];
lyr_GND_Census_17.set('fieldAliases', {'PROVINCE_N': 'PROVINCE_N', 'DISTRICT_N': 'DISTRICT_N', 'DSD_N': 'DSD_N', 'DSD_C': 'DSD_C', 'GND_N': 'GND_N', 'GND_NO': 'GND_NO', 'GND_C': 'GND_C', 'PROVINCE_C': 'PROVINCE_C', 'DISTRICT_C': 'DISTRICT_C', 'GN_UID': 'GN_UID', 'OID_': 'OID_', 'UID_DIST_D': 'UID_DIST_D', 'TOT_POP': 'TOT_POP', 'MALE': 'MALE', 'FEMALE': 'FEMALE', 'RANK_POP': 'RANK_POP', 'RATIOSEX': 'RATIOSEX', 'RANK_SR': 'RANK_SR', '0TO14': '0TO14', '15TO59': '15TO59', 'OVER60': 'OVER60', 'RATIODEPEN': 'RATIODEPEN', 'RANK_DR': 'RANK_DR', 'BUDDHIST': 'BUDDHIST', 'HINDU': 'HINDU', 'ISLAM': 'ISLAM', 'ROMANCATHO': 'ROMANCATHO', 'OTHERCHRIS': 'OTHERCHRIS', 'OTHERELIGI': 'OTHERELIGI', 'SINHALESE': 'SINHALESE', 'SRILANKATA': 'SRILANKATA', 'INDIANTAMI': 'INDIANTAMI', 'SRILANKAMO': 'SRILANKAMO', 'OTHERETHGR': 'OTHERETHGR', 'NAME_DIST_': 'NAME_DIST_', 'NUM_GN': 'NUM_GN', 'Area': 'Area', 'CL': 'CL', });
lyr_GND_Census_17.set('fieldImages', {'PROVINCE_N': 'TextEdit', 'DISTRICT_N': 'TextEdit', 'DSD_N': 'TextEdit', 'DSD_C': 'TextEdit', 'GND_N': 'TextEdit', 'GND_NO': 'TextEdit', 'GND_C': 'TextEdit', 'PROVINCE_C': 'TextEdit', 'DISTRICT_C': 'TextEdit', 'GN_UID': 'TextEdit', 'OID_': 'Range', 'UID_DIST_D': 'TextEdit', 'TOT_POP': 'Range', 'MALE': 'Range', 'FEMALE': 'Range', 'RANK_POP': 'Range', 'RATIOSEX': 'TextEdit', 'RANK_SR': 'TextEdit', '0TO14': 'Range', '15TO59': 'Range', 'OVER60': 'Range', 'RATIODEPEN': 'TextEdit', 'RANK_DR': 'TextEdit', 'BUDDHIST': 'Range', 'HINDU': 'Range', 'ISLAM': 'Range', 'ROMANCATHO': 'Range', 'OTHERCHRIS': 'Range', 'OTHERELIGI': 'Range', 'SINHALESE': 'Range', 'SRILANKATA': 'Range', 'INDIANTAMI': 'Range', 'SRILANKAMO': 'Range', 'OTHERETHGR': 'Range', 'NAME_DIST_': 'TextEdit', 'NUM_GN': 'TextEdit', 'Area': 'TextEdit', 'CL': 'TextEdit', });
lyr_GND_Census_17.set('fieldLabels', {'PROVINCE_N': 'no label', 'DISTRICT_N': 'no label', 'DSD_N': 'no label', 'DSD_C': 'no label', 'GND_N': 'no label', 'GND_NO': 'no label', 'GND_C': 'no label', 'PROVINCE_C': 'no label', 'DISTRICT_C': 'no label', 'GN_UID': 'no label', 'OID_': 'no label', 'UID_DIST_D': 'no label', 'TOT_POP': 'no label', 'MALE': 'no label', 'FEMALE': 'no label', 'RANK_POP': 'no label', 'RATIOSEX': 'no label', 'RANK_SR': 'no label', '0TO14': 'no label', '15TO59': 'no label', 'OVER60': 'no label', 'RATIODEPEN': 'no label', 'RANK_DR': 'no label', 'BUDDHIST': 'no label', 'HINDU': 'no label', 'ISLAM': 'no label', 'ROMANCATHO': 'no label', 'OTHERCHRIS': 'no label', 'OTHERELIGI': 'no label', 'SINHALESE': 'no label', 'SRILANKATA': 'no label', 'INDIANTAMI': 'no label', 'SRILANKAMO': 'no label', 'OTHERETHGR': 'no label', 'NAME_DIST_': 'no label', 'NUM_GN': 'no label', 'Area': 'no label', 'CL': 'no label', });
lyr_GND_Census_17.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});