async function cripta() {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        // Cambia la siguiente línea para cargar tu archivo HTML local
        await page.goto('file:///ruta/a/tu/archivo/nuevoFormulario.html');
        await page.waitForSelector('[id="tinymce"]');
        console.log("Archivo 'nuevoFormulario' encontrado. Iniciando web scraping...");
        const recomendados = await page.evaluate(() => {
            const tinymceFrame = document.getElementById('default_ifr');
            if (tinymceFrame) {
                const tinymceDocument = tinymceFrame.contentDocument || tinymceFrame.contentWindow.document;
                const paragraph = tinymceDocument.querySelector('p');
                return paragraph ? paragraph.innerText : 'No se encontró ningún párrafo';
            } else {
                return 'No se encontró el iframe con ID "default_ifr"';
            }
        });
        console.log(recomendados);
        await browser.close();
    } catch (error) {
        console.log("Error al acceder al archivo 'nuevoFormulario'");
    }
}

document.getElementById("btn-export_1").addEventListener("click", cripta);





