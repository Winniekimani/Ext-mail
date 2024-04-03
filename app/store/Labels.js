Ext.define('ExtMail.store.Labels', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.Labels',
    model: 'ExtMail.model.Label',
    // root: {
    //     name: 'Test',
    //     expanded: true
    // },
    root: {
        _id: -1,
        name: 'Root',
        expanded: true
    },
    proxy: {
        type: 'ajax',
        url: 'data/labels.json',
    },
    // proxy: {
    //     type: 'rest',
    //     url: 'http://localhost:3000/labels',
    //     // reader: {
    //     //     type: 'json',
    //     //     transform: function(data) {
    //     //         var transformRow = function(row) {
    //     //             row = ExtMail.util.Object.snakeCaseToCamelCase(row);
                    
    //     //             if (row.children && Ext.isArray(row.children)) {
    //     //                 row.children = Ext.Array.map(row.children, transformRow);
    //     //             }
    //     //             return row;
    //     //         }
    //     //         return Ext.Array.map(data, transformRow);
    //     //     }
    //     // }
    // }
});
