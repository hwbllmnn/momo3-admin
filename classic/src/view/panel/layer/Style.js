Ext.define('MoMo.admin.view.panel.layer.Style',{
    extend: 'Ext.panel.Panel',

    xtype: 'momo-layer-style',

    requires: [
        'Mapmavin.admin.view.panel.layer.StyleController',
        'Mapmavin.admin.view.panel.layer.StyleModel'

//        'Mapmavin.admin.view.panel.sld.Styler'
    ],

    controller: 'momo-layer-style',
    viewModel: {
        type: 'momo-layer-style'
    },

    routeId: 'style',

    title: 'Style', // TODO use title formula from viewmodel
//    bind: {
//        title: '{title}'
//    },

    padding: 20,

    items: [{
        xtype: 'fieldset',
        title: 'Generate Style for Layer'
//        items: [{
//            xtype: 'momo-panel-sld-styler',
//            bind: {
//                dspLayerName: 'DSP {layer.name}'
//            },
//            layerUrl: '/momo/geoserver.action'
//        }]
    }]
});