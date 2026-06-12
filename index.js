const axios = require("axios");

const URL =
  "https://lift-api.vfsglobal.com/appointment/CheckIsSlotAvailable";

async function check(name, visaCategoryCode) {
  try {
    const response = await axios.post(URL, {
      countryCode: "SAU",
      missionCode: "PRT",
      vacCode: "PORRIY",
      visaCategoryCode,
      roleName: "Individual",
      loginUser: "test@test.com",
      payCode: ""
    });

    console.log(
      new Date().toISOString(),
      name,
      response.status
    );
  } catch (e) {
    console.log(
      new Date().toISOString(),
      name,
      e.response?.status || "ERROR"
    );
  }
}

async function run() {
  await check("D2", "LSVRVFS");
  await check("D3", "LSTVRVF");
  console.log("--------------------------------");
}

run();

setInterval(run, 60000);
