const COUNTRY_LIST = [
  { name: "United States of America" },
  { name: "United Kingdoms" },
  { name: "India" }
];
// TODO: get countries dynamically from API

const DATA_STEP_1 = {
  salutation: {
    type: "select",
    options: [{ name: "Ms" }, { name: "Mr" }, { name: "Mrs" }],
    validations: {},
    errors: {},
    placeholder: "Salutation"
  },
  firstName: {
    type: "text",
    validations: {},
    errors: {
      required: "First Name cannot be left blank",
      minlength: "Minimum length 2",
      maxlength: "Maximum length 30"
    },
    placeholder: "First Name"
  },
  middleName: {
    type: "text",
    validations: {},
    errors: {
      required: "Middle Name cannot be left blank",
      minlength: "Minimum length 2",
      maxlength: "Maximum length 30"
    },
    placeholder: "Middle name"
  },
  lastName: {
    type: "text",
    validations: {},
    errors: { required: "Last Name cannot be left blank" },
    placeholder: "Last Name"
  },
  houseNumber: {
    type: "text",
    validations: {},
    errors: { required: "House Number cannot be left blank" },
    placeholder: "House Number"
  },
  streetName: {
    type: "text",
    validations: {},
    errors: { required: "Street Name cannot be left blank" },
    placeholder: "Street Name"
  },
  area: {
    type: "text",
    validations: {},
    errors: { required: "Area cannot be left blank" },
    placeholder: "Area"
  },
  city: {
    type: "text",
    validations: {},
    errors: { required: "City cannot be left blank" },
    placeholder: "City"
  },
  state: {
    type: "text",
    validations: {},
    errors: { required: "State cannot be left blank" },
    placeholder: "State"
  },
  country: {
    type: "select",
    options: COUNTRY_LIST,
    validations: {},
    errors: { required: "Country cannot be left blank" },
    placeholder: "Country"
  },
  landmark: {
    type: "text",
    validations: {},
    errors: { required: "Landmark cannot be left blank" },
    placeholder: "Landmark"
  },
  phoneNumber: {
    type: "phone",
    validations: {
      pattern: /^\d{10}$/
    },
    errors: { required: "Phone Number cannot be left blank" },
    placeholder: "Phone Number"
  },
  alternatePhoneNumber: {
    type: "phone",
    validations: {
      pattern: /^\d{10}$/
    },
    errors: { required: "Alternate Phone Number cannot be left blank" },
    placeholder: "Phone Number"
  },
  email: {
    type: "text",
    validations: {},
    errors: { required: "Email cannot be left blank" },
    placeholder: "Email"
  },
  alternateEmail: {
    type: "text",
    validations: {},
    errors: { required: "Alternate Email cannot be left blank" },
    placeholder: "Alternate Email"
  },
  fax: {
    type: "text",
    validations: {},
    errors: {},
    placeholder: "Fax"
  },
  IndividualOrOrganisation: {
    type: "text",
    validations: {},
    errors: { required: "This field cannot be left blank" },
    placeholder: "Individual Or Organisation"
  },
  taxId: {
    type: "text",
    validations: {},
    errors: {},
    placeholder: "Tax Id"
  },
  password: {
    type: "text",
    validations: {},
    errors: {},
    placeholder: "Password"
  }
};

const DATA_STEP_2 = {
  licenseNumber: {
    type: "text",
    validations: {},
    errors: {},
    placeholder: "License Number"
  },
  RegisteredName: {
    type: "text",
    validations: {},
    errors: {},
    placeholder: "Registered Name"
  },
  ownershipDetails: {
    type: "text",
    validations: {},
    errors: {},
    placeholder: "Ownership Details"
  }
};

const DATA_STEP_3 = {
  IdentityAadharOrOrganisationCertificate: {
    type: "file",
    validations: {},
    errors: {},
    placeholder: "Upload Aadhaar/Organisation Certificate"
  },
  TaxId: {
    type: "file",
    validations: {},
    errors: {},
    placeholder: "Upload tax ID document"
  }
};

const DATA_STEP_4 = {
  accountNumber: {
    type: "text",
    validations: {},
    errors: {},
    placeholder: "Account Number"
  },
  BankIfscCode: {
    type: "text",
    validations: {},
    errors: {},
    placeholder: "Bank IFSC Code"
  },
  alternateAccountNumber: {
    type: "text",
    validations: {},
    errors: {},
    placeholder: "Alternate Account Number"
  },
  IfscCodeForAlternateAccount: {
    type: "text",
    validations: {},
    errors: {},
    placeholder: "Alternate IFSC Code"
  },
  nomineeName: {
    type: "text",
    validations: {},
    errors: {},
    placeholder: "Nominee Name"
  },
  NomineeRelation: {
    type: "text",
    validations: {},
    errors: {},
    placeholder: "Nominee Relation"
  },
  NomineeContactNumber: {
    type: "text",
    validations: {},
    errors: {},
    placeholder: "Nominee Contact Number"
  },
  NomineeEmail: {
    type: "text",
    validations: {},
    errors: {},
    placeholder: "Nominee Email"
  },
  NomineeAddress: {
    type: "text",
    validations: {},
    errors: {},
    placeholder: "Nominee Addess"
  }
};

const DATA_STEP_5 = {
  experienceDetails: {
    type: "textarea",
    validations: {},
    errors: {},
    placeholder: "Experience Details"
  },
  UploadWorkDetails: {
    type: "file",
    validations: {},
    errors: {},
    placeholder: "Upload work Details"
  }
};

const DATA_STEP_6 = {};

const STEP_ITEMS = [
  { label: "Basic Details", data: DATA_STEP_1 },
  { label: "Organisational Details", data: DATA_STEP_2 },
  { label: "Upload ID Documents", data: DATA_STEP_3 },
  { label: "Account Details", data: DATA_STEP_4 },
  { label: "Experience Details", data: DATA_STEP_5 },
  { label: "Schedule Your Inspection", data: DATA_STEP_6 },
  { label: "Review & Submit", data: {} }
];

export { STEP_ITEMS };
