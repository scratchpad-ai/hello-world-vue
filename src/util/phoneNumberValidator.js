import _ from "lodash";
import { FORMAT_OPTIONS } from "@/const/phoneNumberValidator.js";

/**
 * validates a phone number based on the provided valid formats
 * can optionally include an extension
 *
 * @param {string} input - a string to validate
 * @param {Array<string>} formats - an array of valid phone numbers
 * @param {string} extension - an optional extension
 * @returns {boolean} - whether the input was valid
 */
export default function validatePhoneNumber(input, formats, extension) {
  // default formats
  formats = formats || _.map(FORMAT_OPTIONS, "value");

  // append formats with extension
  if (extension) {
    formats = [
      ...formats,
      ..._.map(formats, (format) => `${format}${extension}`),
    ];
  }

  // create a map keyed by template
  const templateMap = _.keyBy(formats);

  // convert input to template format
  const inputTemplate = convertToTemplate(input);

  // check if input is in the template map
  return !!templateMap[inputTemplate];
}

function convertToTemplate(format) {
  format = format || "";

  // US template special case
  if (
    format.substring(0, 2) === "+1" &&
    _.filter(format, (char) => char.match(/\d/g)).length === 11
  ) {
    return `+1${transformInputToTemplate(format.substring(2))}`;
  }
  return transformInputToTemplate(format);
}

function transformInputToTemplate(format) {
  return format.replace(/\d/g, "#");
}
