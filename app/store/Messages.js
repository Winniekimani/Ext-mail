Ext.define('ExtMail.store.Messages', {
    extend: 'Ext.data.Store',
    alias: 'store.Messages',
    model: 'ExtMail.model.Message',
    autoLoad: true,
    sorters: [
        {
            property: 'date',
            direction: 'DESC'
        }
    ],
    proxy: {
        type: 'rest',
        noCache: false,
        // url: 'http://localhost:3000/mails',
        // reader: {
        //     type: 'json',
        //     rootProperty: 'rows'
        // }
        api: {
            read: 'http://localhost:3000/mails',
            create: 'http://localhost:3000/mails/',
            update: 'http://localhost:3000/mails/',
            destroy: 'http://localhost:3000/mails/',

            reader: {
                type: 'json',
                transform: function (data) {
                    if (data) {
                        if (Ext.isArray(data)) {
                            data = Ext.Array.map(data, ExtMail.util.Object.snakeCaseToCamelCase);
                            
                            // turn simple array of labelIds into MessageLabel object
                            Ext.each(data, function (row) {
                                row.labels = Ext.Array.map(
                                row.labels || [],
                                function (labelId) {
                                    return {
                                        messageId: row.id,
                                        labelId: labelId,
                                    };
                                });
                            });
                        } else {
                            data = ExtMail.util.Object.snakecaseToCamelCase(data);
                        }
                    }
                    return data;
                },
            },

            writer: {
                type: 'json',
                writeAllFields: true,
                transform: function (data) {
                    if (data) {
                        data = ExtMail.util.Object.camelCaseToSnakeCase(data);
                        delete data.ID;
                        
                        // format date as server expects
                        data.DATE = Ext.Date.format(
                            Ext.Date.parse(data.DATE, 'c'), 'm/d/Y H:i:s'
                        );
                    }
                        return data;
                },
            },
        }
    }
});
