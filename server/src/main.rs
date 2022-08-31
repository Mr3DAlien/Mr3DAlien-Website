use actix_files::NamedFile;
use actix_web::{get, web, App, HttpServer, Responder};

#[get("/")]
async fn index() -> impl Responder {
    NamedFile::open("./static/html/index.html")
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .service(actix_files::Files::new("/static", "./static").show_files_listing().prefer_utf8(true))
            .service(index)
    })
    .bind(("127.0.0.1", 8080))?
    .run()
    .await
}