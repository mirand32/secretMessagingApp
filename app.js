// if domain has hash decode hash and display secret msg
if (window.location.hash) {
    const { hash } = window.location
    const codedMsg = atob(hash.slice(1))
    displayMsg(codedMsg)
}
// hide msg form and add decoded msg to DOM
function displayMsg(msg){
    document.querySelector(".createMsg--container").classList.add("hidden")
    document.querySelector(".displayMsg--container").classList.remove("hidden")
    document.querySelector(".displayMsg--container").querySelector("h1").innerHTML = `${msg}`
}

function encryptMsg(text){
    const encrypted = btoa(text)
    return window.location + "#" + encrypted
}

function onSubmit(e){
    e.preventDefault()
    // encrypt msg and put into link contianer input
    const link = encryptMsg(document.querySelector("#msg--input").value)
    document.querySelector("#link--input").value=link
    // hide create msg block and display link block
    document.querySelector(".createMsg--container").classList.add("hidden")
    document.querySelector(".link--container").classList.remove("hidden")
    this.reset()
}

// copy link input to clickboard on click
function copyLink(e){
    e.preventDefault()
    const link=document.querySelector("#link--input")
    link.select()
    document.execCommand("copy")
}

document.querySelector(".msgForm").addEventListener("submit", onSubmit)
document.querySelector(".button--copy").addEventListener("click", copyLink)