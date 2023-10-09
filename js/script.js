function verificar() {
    const p = document.querySelector('p#res')
    let aldo = document.querySelector('#aldo').value
    let jucimara = document.querySelector('#jucimara').value

    if (aldo.length > jucimara.length) {
        p.innerHTML = 'A'
    } else if (aldo.length < jucimara.length) {
        p.innerHTML = 'B'
    } else {
        p.innerHTML = '*'
    }
}