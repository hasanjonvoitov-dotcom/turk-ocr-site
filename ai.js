// ai.js – AI orqali xatolarni tekshirish
async function checkWithAI(text) {
  const resultContainer = document.getElementById('result');

  // Natija oynasini tozalash
  resultContainer.textContent = "AI orqali tekshiruv ishlayapti, biroz kuting...";

  try {
    // OpenAI API chaqiruvi
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer YOUR_OPENAI_API_KEY" // API kalitni shu yerga qo'yish
      },
      body: JSON.stringify({
        "model": "gpt-4o-mini",
        "messages": [
          {
            "role": "system",
            "content": "Siz turk tilidagi yozilgan matnni grammatik va imlo xatolarini tekshirasiz."
          },
          {
            "role": "user",
            "content": Matnni tekshiring va xatolarini ko'rsating: \n${text}
          }
        ],
        "temperature": 0
      })
    });

    const data = await response.json();
    const aiText = data.choices[0].message.content;

    // Natijani sahifaga chiqarish
    resultContainer.textContent = aiText;

  } catch (err) {
    resultContainer.textContent = "Xatolik yuz berdi: " + err;
  }
}
