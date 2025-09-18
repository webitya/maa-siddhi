export function cn(...classes) {
  return classes.filter(Boolean).join(" ")
}

export function formatPrice(price) {
  return `₹${price}`
}

export function formatPhoneNumber(phone) {
  return phone.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3")
}

export function generateWhatsAppLink(phone, message) {
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/91${phone}?text=${encodedMessage}`
}

export function generateCallLink(phone) {
  return `tel:+91${phone}`
}

export function generateEmailLink(email, subject, body) {
  const encodedSubject = encodeURIComponent(subject)
  const encodedBody = encodeURIComponent(body)
  return `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`
}
