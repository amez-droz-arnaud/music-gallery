import { supabase } from "../ressource/supabase";

interface loginForm {
    mail?:string;
    password?:string;
}

async function isLogged():Promise<boolean>{
    const { data: { user } } = await supabase.auth.getUser()

    if (user){
        return true
    }

    return false
}


async function loginToSupabase(username: string, password: string){
    await supabase.auth.signInWithPassword({
        email: username,
        password: password,
    })
}


async function initPage() {

    if (await isLogged() == true) {
            console.log("Connecté")
            window.location.href = "/admin-dashboard"
            return
    }

    const forms = document.getElementById("loginForm") as HTMLFormElement;

    if (!forms)
        return

    forms.addEventListener("submit", async (event) => {

        event.preventDefault();
        const formData = new FormData(forms)
        const values = Object.fromEntries(formData.entries()) as loginForm;

        const mail = values.mail
        const password = values.password
        if (!mail || !password)
            return

        await loginToSupabase(mail, password)

        if (await isLogged() == false) {
            console.log("Erreur de connexion")
            return
        }

        console.log("Connecté")
        window.location.href = "/admin-dashboard"
    })
}

initPage()
