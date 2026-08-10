"""Prepare replaceable demo media without modifying the original uploads."""

from pathlib import Path
from PIL import Image, ImageOps

PROJECT = Path(__file__).resolve().parents[1]
SOURCE = PROJECT / "media" / "inbox" / "photos"
OUTPUT = PROJECT / "images"

MEDIA = {
    "hero": [
        ("hero/laboratorio precision diesel.webp", "hero-01.webp"),
        ("hero/banco de pruebas.jpg", "hero-02.webp"),
        ("hero/diagnostico electronico.jpg", "hero-03.webp"),
        ("hero/Sistema de inyeccion diesel.jpg", "hero-04.webp"),
        ("hero/camion.webp", "hero-05.webp"),
        ("hero/turbo.jpg", "hero-06.webp"),
    ],
    "workshop": [
        ("workshop/taller viejo.jpg", "taller-anterior.webp"),
        ("workshop/taller2020.jpg", "taller-actual.webp"),
    ],
    "services": [
        ("services/Diagnostico por escaner.png", "diagnostico.webp"),
        ("services/Laboratorio de Inyectores.jpg", "inyectores.webp"),
        ("services/reparacion de turbos.webp", "turbos.webp"),
        ("services/Bombas de Inyección.jpg", "bombas.webp"),
        ("services/Motores Diésel, Gasolina e Híbridos.jpg", "motores.webp"),
        ("services/Mantenimiento Diésel.jpg", "mantenimiento.webp"),
    ],
    "gallery": [
        ("Bomba de inyeccion en banco de Pruebas DP200.JPG", "banco-pruebas-dp200.webp"),
        ("Bomba Desarmada e Inyectores (CUMMINS) N14 Celect.JPG", "bomba-inyectores-cummins.webp"),
        ("Cabeza Nueva (HYUNDAI) H100.JPG", "cabeza-hyundai-h100.webp"),
        ("Desmontaje de Bomba de inyeccion (PERKINS) Delphi.JPG", "desmontaje-bomba-perkins.webp"),
        ("Inyectores (FORD) Transit.jpg", "inyectores-ford-transit.webp"),
        ("Montaje de un Turbo en Unidad.jpg", "montaje-turbo.webp"),
        ("Reparacion de Motor (HYUNDAI) H100.JPG", "motor-hyundai-h100.webp"),
        ("Revision de Cigueñal Dañado(Cummins) 400 Big Cam (2).JPG", "ciguenal-cummins.webp"),
        ("Revision de Turbo (NISSAN) NP300 (1).JPG", "revision-turbo-np300.webp"),
        ("Turbo (DEUTZ).JPG", "turbo-deutz.webp"),
        ("Bombas Unitarias (MERCEDEZ BENZ) 210 (1).JPG", "bombas-unitarias-mercedes.webp"),
        ("Inyectores Maquinaria.jpg", "inyectores-maquinaria.webp"),
    ],
    "cases": [
        ("Turbo Dañado (CUMMINS) 350 BIGCAM.jpg", "turbo-cummins-antes.webp"),
        ("Turbo Reparado (CUMMINS) 350 BIGCAM.jpg", "turbo-cummins-despues.webp"),
        ("Bomba de Inyeccion (PERKINS) DP210 (1).JPG", "bomba-perkins-antes.webp"),
        ("Bomba de Inyeccion (PERKINS) DP210 (2).JPG", "bomba-perkins-despues.webp"),
        ("Inyectores (VOLKSWAGEN) Transporter (1).JPG", "inyectores-vw-antes.webp"),
        ("Inyectores (VOLKSWAGEN) Transporter (2).JPG", "inyectores-vw-despues.webp"),
        ("Reparacion de Motor (PERKINS) Cabeza de motor (1).JPG", "motor-perkins-antes.webp"),
        ("Reparacion de Motor (PERKINS) Cabeza de motor (3).JPG", "motor-perkins-despues.webp"),
        ("Bomba en Banco de Pruebas (STANADYNE) DB4.JPG", "bomba-stanadyne-banco.webp"),
        ("Desarmado de Motor (Nissan) Urvan (3).JPG", "motor-nissan-urvan.webp"),
        ("Reparacion de Motor de Generador de Luz  (1).JPG", "motor-generador.webp"),
        ("Balancines Nuevos y Arbol de levas Nuevo comparacion (HYUNDAI) H100.JPG", "balancines-hyundai.webp"),
    ],
}


def convert(source: Path, destination: Path, max_width: int = 1600) -> None:
    destination.parent.mkdir(parents=True, exist_ok=True)
    with Image.open(source) as opened:
        image = ImageOps.exif_transpose(opened).convert("RGB")
        if image.width > max_width:
            height = round(image.height * max_width / image.width)
            image = image.resize((max_width, height), Image.Resampling.LANCZOS)
        image.save(destination, "WEBP", quality=82, method=6)


for section, items in MEDIA.items():
    for relative_source, filename in items:
        source = SOURCE / relative_source
        if not source.exists():
            raise FileNotFoundError(source)
        convert(source, OUTPUT / section / filename)

print(f"Prepared {sum(map(len, MEDIA.values()))} demo images.")
