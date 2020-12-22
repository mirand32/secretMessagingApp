if (window.location.hash) {
    const { hash } = window.location
    const codedMsg = atob(hash.slice(1))
    displayMsg(codedMsg)
}

function displayMsg(msg){
    document.querySelector(".createMsg--container").classList.add("hidden")
    document.querySelector(".displayMsg--container").classList.remove("hidden")
    document.querySelector(".displayMsg--container").querySelector("h1").innerHTML = `${msg}`
}

function encryptMsg(text){
    const encrypted = btoa(text)
    return window.location + "#" + encrypted
}

function handleFormSubmit(e){
    e.preventDefault()
    const link = encryptMsg(document.querySelector("#msg--input").value)
    document.querySelector("#link--input").value=link
    document.querySelector(".createMsg--container").classList.add("hidden")
    document.querySelector(".link--container").classList.remove("hidden")
    this.reset()
}

function copyLink(e){
    e.preventDefault()
    const link=document.querySelector("#link--input")
    link.select()
    document.execCommand("copy")
}

document.querySelector(".msgForm").addEventListener("submit", handleFormSubmit)
document.querySelector(".button--copy").addEventListener("click", copyLink)