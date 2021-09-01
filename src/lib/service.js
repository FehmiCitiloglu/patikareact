import axios from "axios";

const getData = (user_id) => {
  return new Promise(async (resolve, reject) => {
    const { data: user } = await axios(
      "https://jsonplaceholder.typicode.com/users/" + user_id
    );
    resolve(user);
    reject(`There isn't user with given id: ${user_id}`);
  });
};
export default getData;
