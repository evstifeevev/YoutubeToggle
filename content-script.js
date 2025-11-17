function toggleUrlHandler(command) {
    if(!command)
    {
        return;
    }

    let currentUrl = window.location.href;
    const youtubeUrlPrefix = "https://www.youtube.com";
    const youtubeMusicUrlPrefix = "https://music.youtube.com";
    const youtubeShortUrlPrefix = "https://www.youtube.com/shorts/";
    const youtubeVideoUrlPrefix = "https://www.youtube.com/watch?v=";

    const oldToNewPrefixesMusic = [
        {
            oldPrefix: youtubeUrlPrefix,
            newPrefix: youtubeMusicUrlPrefix,
        },
        {
            oldPrefix: youtubeMusicUrlPrefix,
            newPrefix: youtubeUrlPrefix,
        },
    ];

    const oldToNewPrefixesShort = [
        {
            oldPrefix: youtubeShortUrlPrefix,
            newPrefix: youtubeVideoUrlPrefix,
        },
        {
            oldPrefix: youtubeVideoUrlPrefix,
            newPrefix: youtubeShortUrlPrefix,
        },
    ];

    let prefixRule = null;

    if(command === "toggleYoutubeShort") {
        prefixRule = oldToNewPrefixesShort.find((prefix) =>
            currentUrl.startsWith(prefix.oldPrefix)
        );
    }
    else {
        prefixRule = oldToNewPrefixesMusic.find((prefix) =>
            currentUrl.startsWith(prefix.oldPrefix)
        );
    }

    if (!prefixRule) {
        return;
    }

    let updatedUrl = currentUrl.replace(
        prefixRule.oldPrefix,
        prefixRule.newPrefix
    );

    // open updated url in the same tab
    window.open(updatedUrl, "_self");
}