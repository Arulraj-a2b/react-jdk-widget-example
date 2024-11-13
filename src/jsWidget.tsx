import ReactDOM from "react-dom/client";
import ChatbotWidget from "./modules/WidgetModule/ChatbotWidget";

window.addEventListener("load", () => {
  const container = document.getElementById("chatbot-container");
  if (container && ReactDOM.createRoot) {
    const title = container.getAttribute("data-title") || "Bot"; // Default to "Bot" if not set
    const themeColor = container.getAttribute("data-theme-color") || "#00bfa5"; // Default theme color

    const root = ReactDOM.createRoot(container);
    root.render(<ChatbotWidget title={title} themeColor={themeColor} />);
  } else {
    console.error("ReactDOM is not available or the container doesn't exist.");
  }
});
