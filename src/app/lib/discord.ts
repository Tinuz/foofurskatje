export async function sendDiscordMessage(content: string, type: string) {
  let webhookUrl = "";

  if(type === "burn") {
    webhookUrl = process.env.DISCORD_WEBHOOK_URL!;
  } else if (type === "reward") {
     webhookUrl = process.env.DISCORD_WEBHOOK_REWARD_URL!;
  } else {
    console.error("Unknown message type:", type);
    return;
  }

  if (!webhookUrl) {
    console.error("Missing Discord webhook URL");
    return;
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content }),
    });

    if (!response.ok) {
      console.error("Failed to send message to Discord:", await response.text());
    }
  } catch (error) {
    console.error("Discord webhook error:", error);
  }
}
