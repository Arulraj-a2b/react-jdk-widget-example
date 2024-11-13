const ChatbotWidget = ({ title = "bot", themeColor = "red" }) => {
  return (
    <div
      style={{
        border: `2px solid ${themeColor}`,
        padding: "2px",
        borderRadius: 100,
        position: "absolute",
        bottom: 10,
        zIndex: 999999,
        right: 10,
        height: 50,
        width: 50,
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ color: themeColor }}>{title}</div>
    </div>
  );
};

export default ChatbotWidget;
