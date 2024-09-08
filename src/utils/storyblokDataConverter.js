const padL = (nr) => `${nr}`.padStart(2, "0");

export function getDateStoryblokFormat(date) {
    return (`${date.getFullYear()}-${padL(date.getMonth() + 1)}-${padL(date.getDate())} ${padL(date.getHours())}:${padL(date.getMinutes())}`);
}

export function getDateFromStoryblokFormat(date) {
    const dt = new Date(date);

    return `${padL(dt.getDate())}.${padL(dt.getMonth() + 1)}.${dt.getFullYear()}`;
}

