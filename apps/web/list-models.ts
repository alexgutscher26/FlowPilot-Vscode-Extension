const apiKey = process.env.OPENROUTER_API_KEY

async function listModels() {
  if (!apiKey) {
    console.error("No API key found!")
    return
  }

  try {
    const response = await fetch("https://openrouter.ai/api/v1/models", {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    })

    if (!response.ok) {
      console.error("Failed to list models:", response.status, response.statusText)
      return
    }

    const data = await response.json()
    const freeModels = data.data.filter((m: any) => m.id.includes("free"))
    await Bun.write("models.json", JSON.stringify(freeModels, null, 2))
    console.log("Wrote models to models.json")
  } catch (e) {
    console.error("Error:", e)
  }
}

listModels()
