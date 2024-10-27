const getCss = (variavel) => {
    return getComputedStyle(document.body).getPropertyValue(variavel)
}

const tickconfig = {
    color: getCss('--primary-color'),
    size:16,
    family: getCss('--font')
}

export {getCss, tickconfig}