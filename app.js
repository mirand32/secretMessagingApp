const msgForm =document.querySelector(".msgForm")
const copyBtn=document.querySelector(".button--copy")
const linkContainer=document.querySelector(".link--container")
const msgContainer=document.querySelector(".displayMsg--container")
const home = document.querySelector(".home")
home.href = "file://" + window.location.pathname

if (window.location.hash){
    const hash=window.location.hash.slice(1)
    const decoded=decryptMsg(hash)
    msgForm.classList.add("hidden")
    displayMsg(decoded)
}

function displayMsg(msg){
    msgContainer.classList.remove("hidden")
    msgContainer.querySelector("h1").innerHTML=`${msg}`
}

function encryptMsg(text){
    const encrypted = btoa(text)
    const path = window.location.pathname
    return "file://" +path + "#" + encrypted
}

function decryptMsg(text){
    const decrypted = atob(text)
    return decrypted
}

function handleFormSubmit(e){
    e.preventDefault()
    const msg=document.querySelector("#msg--input").value
    const link = encryptMsg(msg)
    document.querySelector("#link--input").value=link
    msgForm.classList.add("hidden")
    linkContainer.classList.remove("hidden")
    this.reset()
}

function copyLink(e){
    e.preventDefault()
    const link=document.querySelector("#link--input")
    link.select()
    document.execCommand("copy")
}

msgForm.addEventListener("submit", handleFormSubmit)
copyBtn.addEventListener("click", copyLink)