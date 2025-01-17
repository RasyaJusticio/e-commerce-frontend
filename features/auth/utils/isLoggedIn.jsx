function getCookieValue(name) {
  const cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split("=");
    if (cookieName === name) {
      return cookieValue;
    }
  }
  return null;
}

export function isLoggedIn() {
  const isLoggedIn = getCookieValue("is_logged_in");
  
  return isLoggedIn != null;
}
