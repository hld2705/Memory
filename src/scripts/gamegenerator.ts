import {state} from "../scripts/menu"


document.getElementById("startbutton")?.addEventListener("click", () =>{
   
})

/**
 * Checks which settings did the user choose, and forwards it to the needed template
 */
document.getElementById("startbutton")?.addEventListener("click", () =>{
    let codeVibesTheme = document.getElementById("code_vibes_theme");
    let gamingTheme = document.getElementById("gaming_theme");
    let daProjectsTheme = document.getElementById("da_projects_theme");
    let foodsTheme = document.getElementById("foods_theme");
    if(state.theme === "code_vibes_theme"){
        codeVibesTheme = codeVibesThemeTemplate()
    } else if(state.theme === "gaming_theme"){
        gamingTheme = gamingThemeTemplate()
    } else if(state.theme === "da_projects_theme"){
        daProjectsTheme = daProjectsThemeTemplate()
    }else if(state.theme === "foods_theme"){
        foodsTheme = foodsThemeTemplate()
    }
});