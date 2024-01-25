/**
 * This view is an example list of people.
 */
Ext.define("MyApp.controller.UserController", {
  extend: "Ext.app.ViewController",
  alias: "controller.userForm",
  onItemSelected: function (sender, record) {
    Ext.Msg.confirm("Confirm", "Are you sure?", "onConfirm", this);
  },

  onAddClick: function () {
    var me = this,
      form = me.getView().down("#formPanel").getForm(),
      grid = me.getView().down("#dataPanel"),
      gridStore = grid.down("#gridPanel").getStore(),
      formData = form.getFieldValues(),
      viewModel = this.getViewModel();
    if (true) {
      let data = Ext.create("MyApp.model.Personnel", {
        name: formData.userName,
        email: formData.email,
        gender: formData.rb,
      });

      gridStore.add(data);
      viewModel.set("count", viewModel.data.count + 1);
    } else {
      Ext.msg.alert("Please fill the form");
    }
  },

  onClear: function () {
    var me = this,
      form = me.getView().down("#formPanel").getForm();
    if (form) {
      form.reset();
    }
  },
});
