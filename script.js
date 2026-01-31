// Bu fayl OCR natijasini olish va AI orqali xatolarni tekshirishni boshlash uchun ishlatiladi

// OCR natijasini AI bilan tekshirish funksiya (demo)
function checkTextErrors(text) {
  // Demo uchun: noto'g'ri so'zlarni aniqlash o'rniga oddiy "Turkcha xatolarni tekshirish" yozamiz
  // Keyinchalik OpenAI API bilan bog'lanib, xatolarni ko'rsatish mumkin

  // Oddiy misol: agar text ichida 'gittim' so'zi bo'lsa xatolik deb hisoblaymiz
  let correctedText = text.replace(/gittim/g, 'gitmek istiyorum'); 
  let message = Natija (demo):\n\n${correctedText}\n\n(Shuni AI orqali tekshirish mumkin);

  // Natijani HTML sahifada ko'rsatish
  document.getElementById('result').textContent = message;
}
