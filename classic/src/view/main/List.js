/**
 * This view is an example list of people.
 */
Ext.define("MyApp.view.main.List", {
  extend: "Ext.grid.Panel",
  xtype: "mainlist",

  requires: ["MyApp.store.Personnel"],

  title: "User Data",
  itemId: "gridPanel",
  store: {
    type: "personnel",
  },

  columns: [
    {
      text: "Name",
      dataIndex: "name",
      editor: {
        xtype: "textfield",
        allowBlank: false,
      },
    },
    { text: "Email", dataIndex: "email", flex: 1 },
    { text: "Gender", dataIndex: "gender", flex: 1 },
    {
      xtype: "actioncolumn",
      width: 50,
      items: [
        {
          iconCls: "x-fa fa-remove",
          tooltip: "Edit",
          handler: function (grid, rowIndex, colIndex) {
            var store = grid.getStore();
            store.remove(store.getAt(rowIndex));
          },
        },
      ],
    },
  ],
});
