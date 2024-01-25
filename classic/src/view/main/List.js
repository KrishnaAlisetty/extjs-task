/**
 * This view is an example list of people.
 */
Ext.define("MyApp.view.main.List", {
  extend: "Ext.grid.Panel",
  xtype: "mainlist",

  requires: ["MyApp.store.Personnel"],

  title: "Personnel",
  itemId: "gridPanel",
  store: {
    type: "personnel",
  },

  columns: [
    { text: "Name", dataIndex: "name" },
    { text: "Email", dataIndex: "email", flex: 1 },
    { text: "Gender", dataIndex: "gender", flex: 1 },
  ],
});
