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

// Step 3: Start the game loop.
while (true) {
    let mainMenuText = "Job Simulator Archives Menu:\n\n";
    // Build the main menu text with corrected capitalization.
    for (let i = 0; i < mainMenuTitles.length; i++) {
        // Here's the new logic: Convert to lowercase, then capitalize the first letter of each word.
        const title = mainMenuTitles[i].toLowerCase().split(' ').map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(' ');
        
        mainMenuText += `${i}: ${title}\n`;
    }
    mainMenuText += "\nType a number to select a job.";

    let userMainChoice = prompt(mainMenuText);

    // Check if the user's choice is a valid number for the main menu.
    if (userMainChoice !== null) {
        let mainChoiceIndex = Number(userMainChoice);
        if (mainChoiceIndex >= 0 && mainChoiceIndex < mainMenuTitles.length) {
            
            // Get the selected job's options.
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
                    break;
                } else {
                    alert("Invalid selection. Please try again.");
                }
            } else {
                continue;
            }
        } else {
            alert("Invalid selection. Please enter a number from the list.");
        }
    } else {
        alert("Exiting archives.");
        break;
    }
}
