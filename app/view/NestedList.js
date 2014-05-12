/**
 * Demonstrates a NestedList, which uses a TreeStore to drill down through hierarchical data
 */
Ext.define('Kitchensink.view.NestedList', {
    extend: 'Ext.NestedList',
    requires: [
        'Ext.data.TreeStore',
        'Kitchensink.view.EditorPanel',
        'Kitchensink.model.Cars'
    ],

    config: {
		autoload: true,
        store: {
            type: 'tree',
            id: 'NestedListStore',
            model: 'Kitchensink.model.Cars',
			//itemTpl:'<div class="contact">{src} </div>',
            root: {},
            proxy: {
                type: 'ajax',
                url: 'carregions.json'
            }
        },
       // displayField: 'text',
       /* listeners: {
            leafitemtap: function(me, list, index, item) {
				//alert('cc');
                var editorPanel = Ext.getCmp('editorPanel') || new Kitchensink.view.EditorPanel();
                editorPanel.setRecord(list.getStore().getAt(index));
                if (!editorPanel.getParent()) {
                    Ext.Viewport.add(editorPanel);
                }
                editorPanel.show();
            }
        }*/
    },

    platformConfig: [{
        platform: 'blackberry',
        toolbar: {
            ui: 'dark'
        }
    }]
});
