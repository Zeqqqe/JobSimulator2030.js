# JobSimulator2030.js

A simple, JavaScript-based recreation of the archival menu **easter egg** from the popular game *Job Simulator*.

---

### About the Project

This script, **JobSimulator2030.js**, simulates the nested menu system found as an easter egg in *Job Simulator*. It allows users to navigate through different "job archives.", select a specific job, and then view details about a particular item or task within that job. The script uses a structured object to store all the menu data, allowing for easy expansion and modification. It runs as a single session in your browser's developer console, guiding you through the options with interactive `prompt` and `alert` dialogs.

---

### How to Use

1.  **Open a new tab**
2.  **Copy the code**: Select and copy the entire JavaScript code block provided below.
3.  **Open your console**: Open your web browser's developer console (F12 or Ctrl+Shift+I).
4.  **Paste and run**: Paste the code into the console and press **Enter**.

The script will begin immediately, and you can follow the on-screen instructions to navigate the archives.

---

### Code Overview

| Component | Description |
| :--- | :--- |
| **`archives` Object** | A JavaScript object that stores all the job titles and their corresponding descriptions. This is the central source of all the game's content and can be easily modified. |
| **Dynamic Menu Generation** | The menu text is generated dynamically by iterating through the `archives` object keys, ensuring that all jobs are correctly displayed and numbered. |
| **Error Handling** | The script includes basic checks to handle invalid or out-of-range inputs. If you enter an invalid number, an `alert` will appear, and the script will exit. |

---

### Copyable Code

```javascript
// A script that simulates the Job Simulator menu with numbered, nested options.

// Step 1: Store the menu data in a structured object.
const archives = {
    'OFFICE WORKER': {
        options: [
            "Coffee. A black, bitter liquid used to increase productivity in outdated models.",
            "Water Cooler. A designated water dispenser and social hub, where JobBots would exchange data on their daily functions.",
            "Stapler. An item used to fasten paper documents together with small metal staples. A more advanced model could be used for firing objects at other JobBots."
        ]
    },
    'GOURMET CHEF': {
        options: [
            "Chopping. A technique used to prepare food ingredients. It involved rapidly oscillating a metal blade to sever organic matter. Was often considered fun.",
            "Frying. A method of cooking food in hot oil. Considered dangerous, but was the only way to cook potatoes to human specifications.",
            "Soup. A liquid food made by combining various ingredients. Often stored in a mug for transport and easy consumption by the JobBot."
        ]
    },
    'CONVENIENCE STORE CLERK': {
        options: [
            "Slushy Machine. A device for dispensing flavored frozen drinks. Was a frequent source of malfunction, with a JobBot often having to clean up the resulting mess.",
            "Cash Register. A device used to accept payments from customers. JobBots would spend an exorbitant amount of time attempting to scan bar codes to complete a sale.",
            "Nacho Cheese. A yellow, artificial cheese product. Often combined with heated corn chips to create a simple, but popular, food item for customers."
        ]
    },
    'AUTO MECHANIC': {
        options: [
            "Tires. A rubber hoop used to provide traction and a smooth ride for vehicles. JobBots would often spend hours trying to locate a lug nut that was dropped in the dirt.",
            "Car Lift. A hydraulic platform that would lift vehicles for maintenance. JobBots would use it to service the underside of the vehicle and would sometimes forget to lower it before a test drive.",
            "Oil Change. A routine maintenance procedure involving the removal of old oil and the addition of new oil. It was a notoriously messy task, and JobBots would often be covered in oil after its completion."
        ]
    }
};

// Step 2: Get a list of the main menu titles for easy numbering.
const mainMenuTitles = Object.keys(archives);

// Step 3: Build the main menu text.
let mainMenuText = "Job Simulator Archives Menu:\n\n";
for (let i = 0; i < mainMenuTitles.length; i++) {
    const title = mainMenuTitles[i].toLowerCase().split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
    
    mainMenuText += `${i}: ${title}\n`;
}
mainMenuText += "\nType a number to select a job.";

let userMainChoice = prompt(mainMenuText);

// Check if the user's main choice is a valid number.
if (userMainChoice !== null) {
    let mainChoiceIndex = Number(userMainChoice);
    if (mainChoiceIndex >= 0 && mainChoiceIndex < mainMenuTitles.length) {
        
        const selectedJob = archives[mainMenuTitles[mainChoiceIndex]];

        // Step 4: Show the sub-menu.
        let subMenuText = `${mainMenuTitles[mainChoiceIndex].toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} Archives:\n\n`;
        for (let i = 0; i < selectedJob.options.length; i++) {
            subMenuText += `${i}: ${selectedJob.options[i].split('.')[0]}\n`;
        }
        subMenuText += "\nType a number to view an archive entry.";

        let userSubChoice = prompt(subMenuText);

        // Step 5: Check if the user's sub-choice is valid.
        if (userSubChoice !== null) {
            let subChoiceIndex = Number(userSubChoice);
            if (subChoiceIndex >= 0 && subChoiceIndex < selectedJob.options.length) {
                alert(selectedJob.options[subChoiceIndex]);
            } else {
                alert("Invalid selection. Please try again.");
            }
        }
    } else {
        alert("Invalid selection. Please enter a number from the list.");
    }
} else {
    alert("Exiting archives.");
}
