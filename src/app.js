import getData from "./lib/service.js";

(async () => {
  try {
    const user = await getData(11);
    console.log(user);
  } catch (error) {
    console.error(error);
  }
})();

// I couldn't handle wrong user_id error
