import ReactDOM from "react-dom/client";
import ChatbotWidget from "./modules/WidgetModule/ChatbotWidget";

window.addEventListener("load", () => {
  const container = document.getElementById("chatbot-container");
  if (container && ReactDOM.createRoot) {
    const root = ReactDOM.createRoot(container);
    root.render(<ChatbotWidget title="Support Bot" themeColor="#00bfa5" />);
  } else {
    console.error("ReactDOM is not available or the container doesn't exist.");
  }
});
