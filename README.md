🤖 Shifra_assistant
Shifra is a browser-based voice-activated virtual assistant built using HTML, CSS, and JavaScript. It responds to user voice commands using the Web Speech API and can perform tasks like greeting you based on the time of day, opening popular websites, and responding conversationally to certain phrases.

🚀 Features
🎤 Voice Recognition using Web Speech API

🗣️ Text-to-Speech (Speech Synthesis)

⏰ Greets based on time of the day

🔎 Opens common websites like YouTube, Google, Instagram

🧠 Handles casual conversations like "hello", "who are you", "thank you"

📅 Tells current time and date

🌐 Falls back to a Google search if command is not recognized

📁 Project Structure

Shifra_assistant/
│
├── index.html         # Main HTML file
├── style.css          # Styling for UI elements
├── script.js          # JavaScript logic for voice and interaction
├── mic.svg            # Microphone icon
├── LCPT.gif           # Animation shown while listening
├── image.png          # Logo image
├── jarvis_pic.jpg     # Favicon image
└── README.md          # Project documentation
💡 How It Works
User clicks the mic button.

Voice recognition starts.

Shifra listens and processes the spoken command.

If matched, performs an action (like opening Google, YouTube, etc.).

Otherwise, performs a Google search based on the spoken input.

🧠 Supported Commands
Command Phrase	Action
"hello" / "hey"	Responds with a greeting
"who are you"	Introduces itself
"open youtube"	Opens YouTube
"open google"	Opens Google
"open instagram"	Opens Instagram
"open calculator"	Attempts to open calculator app
"open whatsapp"	Attempts to open WhatsApp
"what's the time"	Tells the current time
"what's the date"	Tells the current date
"i love you"	Responds sweetly
"thank you"	Responds politely
Unrecognized command	Performs Google search

🌐 Browser Compatibility
✅ Google Chrome (Recommended)

⚠️ Firefox and Safari may have limited support for Web Speech API

🛠️ Setup & Usage
Clone this repository:

git clone https://github.com/yourusername/Shifra_assistant.git
cd Shifra_assistant
Open index.html in a browser (preferably Chrome).

Click on the mic button to begin using the assistant.

⚠️ Make sure your microphone is enabled and permission is granted in the browser.

🙋‍♂️ Created By
Sarthak
A passionate developer working on voice-assisted tech and web apps.

