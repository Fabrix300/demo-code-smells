class Client {
    clientType: number;
    clientDesignation: string;
}

function switching(client: Client){
    switch (client.clientType) {
        case 1:
            client.clientDesignation = "realClient";
            break;
        case 2:
            client.clientDesignation = "notSoCoolClient";
            break;
        case 3:
            client.clientDesignation = "theClientIsHuman";
            break;
        case 4:
            client.clientDesignation = "isThisClient";
            break;
        case 5:
            client.clientDesignation = "coolClient";
            break;
        case 6:
            client.clientDesignation = "awesomeClient";
            break; 
        case 7:
            client.clientDesignation = "niceClient";
            break;
        default:
            client.clientDesignation = "notClient";
            break;
    }
}