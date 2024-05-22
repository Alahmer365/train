import frappe 

@frappe.whitelist()
def custom_print(doc):
    
    frappe.get_doc("Request for Quotation", doc)

    print(doc.name)
   
