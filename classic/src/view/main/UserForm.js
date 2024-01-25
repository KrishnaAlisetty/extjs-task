/**
 * This view is an example list of people.
 */
Ext.define("MyApp.view.main.UserForm", {
  extend: "Ext.form.Panel",
  xtype: "mainform",
  title: "User Form",
  height: 350,
  width: 300,
  bodyPadding: 20,
  defaultType: "textfield",
  initComponent: function () {
    var me = this;
    this.items = [
      {
        fieldLabel: "Username",
        name: "userName",
        msgTarget: "under", // location of the error message
        invalidText: '"{0}" bad. "{1}" good.',
        regex: /[A-Za-z]+/i,
        required: true,
      },
      {
        fieldLabel: "Email",
        name: "email",
        vtype: "email",
      },
      {
        fieldLabel: "Password",
        name: "password",
        inputType: "password",
      },
      {
        fieldLabel: "Confirm Password",
        name: "confirmPassword",
        inputType: "password",
      },
      {
        xtype: "radiogroup",
        fieldLabel: "Gender",
        columns: 1,
        verticle: true,
        items: [
          { boxLabel: "Male", name: "rb", inputValue: "Male" },
          { boxLabel: "Female", name: "rb", inputValue: "Female" },
          { boxLabel: "Others", name: "rb", inputValue: "Others" },
        ],
        listeners: {
          change: (radioBtn, newValue) => {
            //keeping parent `this` object
            var parentInstnace = me;
          },
        },
      },
      {
        xtype: "combobox",
        fieldLabel: "Vaccinated",
        itemId: "vaccineCombo",
        store: ["Dose-1", "Dose-2", "Booster"],
        editable: false,
      },

      {
        xtype: "panel",
        layout: "hbox",

        items: [
          {
            xtype: "button",
            text: "Submit",
            handler: "onAddClick",
          },
          {
            xtype: "button",
            text: "Clear",
            handler: "onClear",
          },
        ],
      },
    ];
    this.callParent(arguments);
  },
});
