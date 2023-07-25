export function validate(values) {
  const errors = {};
  const onlyGeorgian = /^[ა-ჰ]+$/;
  const onlyNumbers = /^[0-9_  -+]*$/;
  const emailValidation = /^([\w]*[\w\.]*(?!\.)@redberry.ge)/;
  if (!values.firstName) {
    errors.firstName = "ველის შევსება სავალდებულია";
  } else if (!onlyGeorgian.test(values.firstName)) {
    errors.firstName = "გამოიყენე ქართული ასოები";
  } else if (values.firstName.length < 2) {
    errors.firstName = "გამოიყენე მინიმუმ 2 სიმბოლო";
  }
  if (!values.lastName) {
    errors.lastName = "ველის შევსება სავალდებულია";
  } else if (!onlyGeorgian.test(values.lastName)) {
    errors.lastName = "გამოიყენე ქართული ასოები";
  } else if (values.lastName.length < 2) {
    errors.lastName = "გამოიყენე მინიმუმ 2 სიმბოლო";
  }
  if (!values.email) {
    errors.email = "ველის შევსება სავალდებულოა";
  } else if (!emailValidation.test(values.email)) {
    errors.email =
      "მეილი უნდა შედგებოდეს ლათინური ასოებისგან და მთავრდებოდეს @redberry.ge-ით";
  }
  if (!values.box) {
    errors.box = "ველის შევსება სავალდებულია";
  }
  if (!values.radio) {
    errors.radio = "ველის შევსება სავალდებულია";
  }
  if (!values.select) {
    errors.select = "ველის შევსება სავალდებულია";
  }

  /* if (!values.phone_number) {
    errors.phone_number = "ველის შევსება სავალდებულოა";
  } else if (!onlyNumbers.test(values.phone_number)) {
    errors.phone_number =
      "არ აკმაყოფილებს ქართული მობ-ნომრის ფორმატს (გამოიყენე მხოლოდ ციფრები)";
  } else if (values.phone_number.length < 7) {
    errors.phone_number = "ველის შევსება სავალდებულოა";
  } else if (values.phone_number.replace(/[^0-9]/g, "").length != 12) {
    errors.phone_number =
      "არ აკმაყოფილებს ქართული მობ-ნომრის ფორმატს (ციფრების რაოდენობა არ ემთხვევა ფორმატს)";
  } */
  return errors;
}
