use actix_files::NamedFile;
use actix_web::{get, web, App, HttpServer, Responder};

#[get("/")]
async fn index() -> impl Responder {
    NamedFile::open("./static/html/index.html")
}

#[get("/alien_packs")]
async fn alien_packs() -> impl Responder {
    NamedFile::open("./static/html/alien_packs.html")
}

#[get("/coming_soon")]
async fn coming_soon() -> impl Responder {
    NamedFile::open("./static/html/coming_soon.html")
}

async fn error_404() -> impl Responder {
    NamedFile::open("./static/html/error_404.html")
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .service(actix_files::Files::new("/static", "./static").show_files_listing().prefer_utf8(true))
            .service(index)
            .service(alien_packs)
            .service(coming_soon)
            .default_service(web::route().to(error_404))
    })
    .bind(("127.0.0.1", 8080))?
    .run()
    .await
}