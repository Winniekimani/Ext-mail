Ext.define('ExtMail.store.Contacts', {
    extend: 'Ext.data.Store',
    alias: 'store.Contacts',
    model: 'ExtMail.model.Contact',
    autoLoad: true,
    proxy: {
        type: 'rest',
        url: 'contacts',
        reader: {
            type: 'json',
            transform: function(data) {
                return Ext.Array.map(data.result, ExtMail.util.Object.snakeCaseToCamelCase);
            }
        }
    }
});
