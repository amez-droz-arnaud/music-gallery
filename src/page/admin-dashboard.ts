import { supabase } from "../ressource/supabase"


function initPage() {
    const button = document.getElementById("logout-button")

    if (!button)
        return

    button.addEventListener("click", async () => {

        const { error } = await supabase.auth.signOut()

        if (error) {
            console.log(`Erreur : ${error}`)
            return
        }

        console.log("Déconnecté")
        window.location.href = "/admin"
    })

}

initPage()
