let teksts1 = "Teksts 1",
    teksts2 = 'ābols, bumbiers, mandarīns',
    teksts3 = `
        <h3>Teksts 3</h3>
        <div class="out">
            Šeit iet teksts
        </div>
    `;


    teksts1 += "<h2>Teksts<h2>";
    teksts1 += "<h3>Teksts<h2>";
    teksts1 += "<h2>Teksts<h2>";
    teksts1 += "<h2>Teksts<h2>";
    teksts1 += "<h2>Teksts<h2>";

    // Konkatenācija

    let attels1 = {
        url:"https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/cars/segment-page/01-images/2025-malibu-highlights-04.png?imwidth=960",
        name:"attels1",
        width:"200px"
    }

    // let imgSrc = "<img src=\"attels.jpg\" alt=\"attels\" width=\"200px\">"

    let imgSrc = "<img src=\""+attels1.url+"\" alt=\""+attels1.name+"\" width=\""+attels1.width+"\">";


    let imgSrc2 = `<img src="${attels1.url}" alt="${attels1.name}" width="${attels1.width}">`;

    console.log(imgSrc2);
    document.write(imgSrc2);



    document.write(teksts2[3],"<br>");
    document.write(teksts2.slice(-5),"<br>");
    console.log(teksts2.split(", "),"<br>");

    document.write(teksts2.toUpperCase(),"<br>");
    document.write(teksts2.toLowerCase(),"<br>");
    document.write(teksts2.search("bum"),"<br>");
    document.write(teksts2.replace("mandarīns","apelsīns"),"<br>");
    document.write(teksts2.trim(),"<br>");
    document.write(teksts2.repeat(5),"<br>");





