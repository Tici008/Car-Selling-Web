export const getTokenData = () => {
  const token = localStorage.getItem("token");
  if (!token) return null;
  try {
    // 1. Tách token thành 3 phần bằng dấu chấm
    const parts = token.split(".");
    // parts = ['eyJhbGc...', 'eyJ1c2Vy...', 'SflKxw...']

    // 2. Lấy phần payload
    const payload = parts[1];

    // 3. Decode từ Base64 thành JSON string
    const jsonString = atob(payload);
    // atob() = Base64 decode
    // jsonString = '{"id":"678f...","role":"CUSTOMER","iat":1737384536,"exp":1737470936}'

    // 4. Parse JSON string thành object
    const tokenData = JSON.parse(jsonString);
    return tokenData;
  } catch (error) {
    // Nếu token sai format hoặc không decode được
    console.error("Invalid token:", error);
    return null;
  }
};
