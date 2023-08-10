import frappe
from frappe.model.document import Document
from frappe.utils import flt, today


@frappe.whitelist(allow_guest=True)
def make_therapy_session(therapy_plan, patient, therapy_type, company, appointment=None):
    therapy_type_doc = frappe.get_doc("Therapy Type", therapy_type)

    therapy_session = frappe.new_doc("Therapy Session")
    therapy_session.therapy_plan = therapy_plan
    therapy_session.company = company
    therapy_session.patient = patient
    therapy_session.therapy_type = therapy_type_doc.name  # Set the therapy_type field
    therapy_session.duration = therapy_type_doc.default_duration
    therapy_session.rate = therapy_type_doc.rate

    if not therapy_session.codification_table and therapy_type_doc.codification_table:
        for item in therapy_type_doc.codification_table:
            therapy_session.append(
                "codification_table",
                {
                    "medical_code": item.medical_code,
                    "medical_code_standard": item.medical_code_standard,
                    # Add more fields here based on your codification_table structure
                }
            )

    therapy_session.appointment = appointment

    if frappe.flags.in_test:
        therapy_session.start_date = frappe.utils.today()

    therapy_session.insert(ignore_permissions=True)

    return therapy_session.as_dict()
