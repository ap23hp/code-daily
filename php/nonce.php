<!-- 1. wp_head mein PHP chala
   → wp_create_nonce() → 'a1b2c3d4' banaya
   → <head> mein daal diya:
   <script>var milaniData = { nonce: 'a1b2c3d4' }</script>

2. Browser ne page load kiya
   → milaniData JS mein available hai

3. User ka GPS detect hua
   → JS ne AJAX bheja:
   action=detect_city&nonce=a1b2c3d4&lat=49.28

4. Server pe PHP ne check kiya
   → 'a1b2c3d4' match hua ✅ → city return ki

5. Hacker ne request bheji
   → nonce nahi pata → missing
   → Server ne reject kiya  -->