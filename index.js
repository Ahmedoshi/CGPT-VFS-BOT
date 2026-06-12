const axios = require("axios");

async function check() {

    try {

        const response = await axios.post(
            "https://lift-api.vfsglobal.com/appointment/CheckIsSlotAvailable"
        );

        console.log(
            new Date().toISOString(),
            "YES",
            response.status
        );

    } catch (e) {

        if (e.response) {

            console.log(
                new Date().toISOString(),
                "NO",
                e.response.status
            );

        } else {

            console.log(
                new Date().toISOString(),
                "ERROR"
            );

        }

    }

}

check();

setInterval(
    check,
    300000
);
