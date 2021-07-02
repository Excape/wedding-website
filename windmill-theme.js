export default {
  button: {
    primary: {
      base: "text-white bg-map-red border border-transparent",
      active: "hover:opacity-90",
    },
  },
  input: {
    base: "block w-full text-sm focus:outline-none dark:text-gray-600 leading-5 rounded-md disabled:cursor-not-allowed disabled:opacity-50",
    valid:
      "border-map-green focus:border-map-green focus:ring focus:ring-map-green",
    invalid:
      "border-map-red focus:border-map-red focus:ring focus:ring-map-red",
  },
  helperText: {
    base: "text-m mt-1 inline-block",
    valid: "text-xl text-map-green",
    invalid: "text-lg text-map-red font-bold",
  },
};
