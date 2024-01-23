/**
 * This view is an example list of people.
 */
Ext.define("MyApp.view.main.UserForm", {
  extend: "Ext.form.Panel",
  xtype: "mainform",
  title: "User Form",
  controller: "userForm",
  height: 350,
  width: 300,
  bodyPadding: 20,
  defaultType: "textfield",
  items: [
    {
      fieldLabel: "Username",
      name: "userName",
      msgTarget: "under", // location of the error message
      invalidText: '"{0}" bad. "{1}" good.',
      regex: /[A-Za-z]+/i,
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
        { boxLabel: "Male" },
        { boxLabel: "Female" },
        { boxLabel: "Others" },
      ],
    },
    {
      xtype: "combobox",
      fieldLabel: "Vaccinated",
      store: ["Dose-1", "Dose-2", "Booster"],
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
  ],
});
