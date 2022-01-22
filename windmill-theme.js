export default {
  button: {
    primary: {
      base: "text-white bg-map-blue border border-transparent",
      active: "hover:opacity-90",
    },
  },
  input: {
    base: "block w-full bg-map-beige-light text-map-blue font-semibold text-sm focus:outline-none dark:text-gray-600 leading-5 rounded-md disabled:cursor-not-allowed disabled:opacity-50",
    active:
      "focus:border-map-blue border-map-blue dark:border-gray-600 focus:ring focus:ring-map-blue dark:focus:border-gray-600 dark:focus:ring-gray-300 dark:bg-gray-700",
    valid:
      "border-map-green focus:border-map-green focus:ring focus:ring-map-green",
    invalid:
      "border-map-red focus:border-map-red focus:ring focus:ring-map-red",
    radio:
      "text-ma-blue bg-map-beige-light form-radio focus:border-map-blue focus:outline-none focus:ring focus:ring-map-blue focus:ring-offset-0 dark:focus:ring-gray-300",
  },
  label: {
    base: "block text-map-blue dark:text-gray-400",
  },
  helperText: {
    base: "text-m mt-1 inline-block",
    valid: "text-xl text-map-green",
    invalid: "text-lg text-map-red font-bold",
  },
  textarea: {
    base: "block w-full text-sm font-semibold dark:text-gray-300 rounded-md focus:outline-none",
    active:
      "focus:border-map-blue border-map-blue dark:border-gray-600 dark:focus:border-gray-600 dark:bg-gray-700 dark:focus:ring-gray-300 focus:ring focus:ring-map-blue",
  },
};
