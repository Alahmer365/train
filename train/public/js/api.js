frappe.ui.form.on("Request for Quotation", {
  refresh: function (frm) {
    frm.add_custom_button(__("Print"), function () {
      frappe.call({
        method: "train.override.api.custom_print", // Assuming your custom method name
        args: {
          doc: frm.doc,
        },
        callback: function (data) {
          if (data.message) {
            frappe.msgprint(data.message, "Error"); // Handle potential errors
          } else {
            // Open a new page with the supplier and message data
            const supplierData = data.suppliers;
            const message = data.message_for_supplier;
            const url = `/print?supplier_data=${encodeURIComponent(
              JSON.stringify(supplierData)
            )}&message=${encodeURIComponent(message)}`;
            window.open(url, "_blank"); // Open in a new tab/window
          }
        },
      });
    });
  },
});
