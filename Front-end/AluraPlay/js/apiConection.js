async function videosList() {
    const response = await fetch('http://localhost:3000/videos');
    const videos = await response.json();
    return videos;
}

async function createVideo(title, description, url, image) {
    const response = await fetch('http://localhost:3000/videos', {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: title,
            descricao: `${description} mil visualizações`,
            url: url,
            imagem: image
        })
    });

    const video = await response.json();
    return video;
}

export const apiConection = {
    videosList,
    createVideo
}