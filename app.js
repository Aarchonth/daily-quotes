const quotes = [
                    "Stay hungry, stay foolish. – Steve Jobs",
                    "Simplicity is the soul of efficiency. – Austin Freeman",
                    "Code is like humor. When you have to explain it, it’s bad. – Cory House",
                    "First, solve the problem. Then, write the code. – John Johnson",
                    "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
                    "In this world, is the destiny of mankind controlled by some transcendental entity or law? – Berserk",
                    "Man cannot remake himself without suffering, for he is both the marble and the sculptor. – Alexis Carrel",
                    "He who has a why to live can bear almost any how. – Friedrich Nietzsche",
                ];
const outros = [
                    "See you, Space Cowboy…",
                    "Stay sharp, samurai.",
                    "Until we meet again, wanderer.",
                    "The hunt goes on…",
                    "Fade into the night.",
                    "Strength and honor.",
                    "Dream beyond the code.",
                    "No gods, no kings, only man.",
                    "Glory to the brave.",
                    "Rest easy, warrior.",
                    "Keep walking the path.",
                    "Into the void we go.",
                    "Stay hungry, stay foolish.",
                    "Another chapter ends…",
                    "Steel sharpens steel."
                ];
function a()
        {          
                const randomQuotes = Math.floor(Math.random()* quotes.length)
                const randomOutro = Math.floor(Math.random()* outros.length)
                document.getElementById("quote").innerText = quotes[randomQuotes]
                document.getElementById("end").innerText = outros[randomOutro]
        }
a();
setInterval(a,2000)