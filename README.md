# Pokemon Info Fetcher 🎮

A simple web app that lets you search for a Pokémon by name and instantly displays its official artwork and name using the [PokéAPI](https://pokeapi.co/).

---

## ✨ Features

- **Pokémon Search:** Enter any Pokémon's name to fetch its details.
- **Instant Display:** Shows the Pokémon's name and official artwork in a stylish card.
- **No Page Reload:** Uses JavaScript's Fetch API and event handling for a smooth user experience.
- **Error Handling:** (You can easily add this! See notes below.)

---

## 🛠 Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript (Vanilla)**
- **[PokéAPI](https://pokeapi.co/)**

---

## 📝 Usage

1. **HTML Setup:**
   - Make sure your HTML contains:
     ```html
     <form id="form">
       <input type="text" id="pokemonName" placeholder="Enter Pokémon name" required />
       <button type="submit">Search</button>
     </form>
     <div id="area"></div>
     <script src="app.js"></script>
     ```
   - `app.js` should contain the JavaScript code.

2. **Open your HTML file in a web browser.**

3. **How to Use:**
   - Enter a Pokémon's name (e.g., `pikachu`, `bulbasaur`).
   - Click "Search"—the Pokémon's name and artwork will appear below!

---

## 💡 Notes

- For better user experience, you can add error handling if a Pokémon is not found:
  ```js
  .catch(() => {
    const errorMsg = document.createElement("p");
    errorMsg.textContent = "Pokémon not found!";
    area.appendChild(errorMsg);
  });
  ```
- You can style the `.card` class for a more attractive layout.

---
