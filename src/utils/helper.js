export function setToken(token) {
  localStorage.setItem("token", token);
  return true;
}

export function getToken() {
  return localStorage.getItem("token");
}

export function repeat(times, word){
  let sentence='';
  for (let index = 0; index < times; index++) {
    sentence += word;
  }
  console.log(sentence)
  return sentence;
}