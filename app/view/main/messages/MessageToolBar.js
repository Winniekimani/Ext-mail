Ext.define('ExtMail.view.messages.MessagesToolBar', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.messages-MessagesToolbar',

    defaultListenerScope: true,
    items: [
        {
            tooltip: 'Refresh',
            iconCls: 'x-fa fa-redo',
            handler: 'onRefreshClick',
            bind: {
                hidden: '{selectedMessage}'
            }
        },
        {
            tooltip: 'Back',
            iconCls: 'x-fa fa-arrow-left',
            handler: 'onBackClick',
            hidden: true, // hide from start
            bind: {
                hidden: '{!selectedMessage}'
            }
        },
        {
            tooltip: 'Archive',
            iconCls: 'x-fa fa-archive',
            handler: 'onArchiveClick',
            hidden: true,
            bind:{
                hidden: '{!selectedMessage}'
            }
        },
        {
            tooltip: 'Un-Archive',
            iconCls: 'x-fa fa-folder-minus',
            handler: 'onUnArchiveClick',
            hidden: true,
            bind:{
                hidden: '{!selectedMessage}'
            }
        }
    ],

    onRefreshClick: function() {
        this.fireEvent('refresh')
    },

    onBackClick: function() {
        this.fireEvent('back')
    },

    onArchiveClick: function(){
        this.fireEvent('archive');
    },

    onUnArchiveClick: function(){
        this.fireEvent('unarchive');
    }
});