import { getToken } from "../utils/helper";

const baseURL = process.env.REACT_APP_NOT_SERVER_BASE_URL;
const regURL = process.env.REACT_APP_NOT_AUTH_REG_LOCATION;
const loginURL = process.env.REACT_APP_NOT_AUTH_LOG_LOCATION;
const skillsURL = process.env.REACT_APP_NOT_SKILLS_LOCATION;

// const baseURL = process.env.REACT_APP_NOT_SERVER_BASE_URL || 'https://autumn-delicate-wilderness.glitch.me/v1';
// const regURL = process.env.REACT_APP_NOT_AUTH_REG_LOCATION || '/auth/register';
// const loginURL = process.env.REACT_APP_NOT_AUTH_LOG_LOCATION || '/auth/login';
// const skillsURL = process.env.REACT_APP_NOT_SKILLS_LOCATION || '/content/skills';

//#region  old code
// const login = {
//   email: "testas.testas1@gmail.com",
//   password: "secret123",
// };
// const testSkill = {
//   title: "Test rest",
//   description: "Lorem ipsum",
// };

// function print() {
//   console.log("baseURL", baseURL);
//   console.log("regURL", regURL);
//   console.log("loginURL", loginURL);
//   console.log("skillsURL", skillsURL);
//   console.log("skillsURL endpoint", `${baseURL}${skillsURL}`);
//   pull_Skills();
//   //   fetch_login(login);
//   //   fetch_registration(login);
//   //   push_Skills(testSkill);
// }
//#endregion

async function pull_Skills() {
  try {
    const response = await fetch(
      `${baseURL}${skillsURL}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getToken()}`,
        },
      }
    );
    if (response.status === 200) {
      const data = await response.json();
      //   console.log(data);
      return data;
    }
    if (response.status === 400) {
      console.log("pull_Skills - serverstatus");
      return false;
    }
  } catch (error) {
    console.log("error", error);
  }
}
async function push_Skills(dataToSend) {
  try {
    const response = await fetch(
      `${baseURL}${skillsURL}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getToken()}`,
        },
        body: JSON.stringify(dataToSend),
      }
    );
    if (response.status === 200) {
      const data = await response.json();
      return data;
    }
    if (response.status === 400) {
      console.log("push_Skills - serverstatus");
      return false;
    }
  } catch (error) {
    console.log("error", error);
  }
}
async function fetch_login(userData) {
  try {
    const response = await fetch(
      `${baseURL}${loginURL}`,
      {
        method: "POST",
        // mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    );
    if (response.status === 200) {
      const data = await response.json();
      //   console.log(data);
      return data;
    }
    if (response.status === 400) {
      console.log(`err: 'Incorrect email or password'`);
      return false;
    }
  } catch (error) {
    console.log("error", error);
  }
}
async function fetch_registration(userData) {
  try {
    const response = await fetch(
      `${baseURL}${regURL}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    );
    // console.log(response.status);
    if (response.status === 200) {
      const data = await response.json();
      //   console.log(data);
      return data;
    }
    if (response.status === 400) {
      console.log(`err: 'Incorrect email or password'`);
      return false;
    }
  } catch (error) {
    console.log("error", error);
  }
}

export { fetch_registration, fetch_login, push_Skills, pull_Skills, baseURL};
