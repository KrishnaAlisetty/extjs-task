/**
 * This view is an example list of people.
 */
Ext.define("MyApp.controller.UserController", {
  extend: "Ext.app.ViewController",
  alias: "controller.userForm",
  onAddClick: function () {
    var me = this,
      form = this.getView().getForm();
    if (form.isValid()) {
    } else {
      Ext.msg.alert("Please fill the form");
    }
  },

  onClear: function () {
    var me = this,
      form = this.getView().getForm();
    if (form) {
      form.reset();
    }
  },
});
