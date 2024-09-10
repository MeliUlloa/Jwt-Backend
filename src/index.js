const app = require("./app");

const main = () => {
    app.listen(app.get("port"));
    console.log(`Servicio en puerto ${app.get("port")}`);
    };
    main();
