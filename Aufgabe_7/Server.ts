// mongodb+srv://<username>:<password>@yufkaspezial-hrzta.mongodb.net/<dbname>?retryWrites=true&w=majority

import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace L07_Server {
    interface Order {
        [type: string]: string | string[] | undefined;

    }
    let orders: Mongo.Collection;

    let port: number | string | undefined = process.env.PORT;
    if (port == undefined)
        port = 5001;

    let databaseUrl: string = "https://localhost:5001";

    startServer(port);
    connectToDatabase(databaseUrl);


    function startServer(_port: number | string): void {
        let server: Http.Server = Http.createServer();
        console.log(server);





        server.listen(_port);
        server.addListener("request", handleRequest);
    }

    async function connectToDatabase(_url: string): Promise<void> {
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        orders = mongoClient.db("Haushaltshilfe").collection("Orders");
        console.log("Database connection", orders != undefined);
    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("What's up?");

        _response.setHeader("content-type", "text/html; charset-utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            for (let key in url.query) {
                _response.write(key + ":" + url.query[key] + "<br>");
            }

            let jsonString: string = JSON.stringify(url.query);
            _response.write(jsonString);

            storeOrder(url.query);

        }


        _response.write("This is my response");
        _response.end();


    }

    function storeOrder(_order: Order): void {
        orders.insert(_order);

    }

}

