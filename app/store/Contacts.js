Ext.define('ExtMail.store.Contacts', {
    extend: 'Ext.data.Store',
    alias: 'store.Contacts',
    model: 'ExtMail.model.Contact',
    autoLoad: true,
    proxy: {
        type: 'rest',
        url: 'http://localhost:3000/contacts',
        // reader: {
        //     type: 'json',
        //     transform: function(data) {
        //         return Ext.Array.map(data.result, ExtMail.util.Object.snakeCaseToCamelCase);
        //     }
        // }
        reader: {
            type: 'json',
            rootProperty: 'rows'
        }
    }
});
