export const getUniquePropertyFromUrl = (name) => {
    const searchParams = new URLSearchParams(window.location.search);
    return searchParams.get(name);
}

export const getMultiplePropertyFromUrl = (name) => {
    const searchParams = new URLSearchParams(window.location.search);
    const all = searchParams.get(name);
    return all && all.length ? all.split(',') : [];
}

export const setUniquePropertyToUrl = (name, value, title = 'Product page') => {
    const url = new URL(window.location);
    url.searchParams.set(name, value);
    console.log(url, 'url');
    window.history.pushState({}, title, url);
}

// Добовляет параметр через запятую если еще не было соответствующего значения и удаляет если было
// Возвращает массив текущих значений
export const getTogglePropertyFromUrl = (name, value, title = 'Product page') => {
    const url = new URL(window.location);
    let curr = getMultiplePropertyFromUrl(name);

    if (curr.includes(value)) {
        curr = curr.filter((property) => property !== value);
    } else {
        curr.push(value);
    }

    if (curr.length) {
        url.searchParams.set(name, curr.join(','));   
    } else {
        url.searchParams.delete(name);
    }

    window.history.pushState({}, title, url);
    return curr;
}

export const deleteAllPropertyFromUrl = (title = 'Product page') => {
    const url = new URL(window.location);
    Array.from(url.searchParams.keys())
         .forEach(key => url.searchParams.delete(key));

    window.history.pushState({}, title, url);
}