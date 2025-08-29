# 📌 Bajaj Finserv Health - API Challenge 

## 📖 Project Overview
This project is a **REST API** built using **Node.js (Express)** for the Bajaj Finserv Health API Challenge.
It accepts an input array (containing numbers, alphabets, or special characters) and returns a structured JSON response with:

- ✅ Separated odd and even numbers  
- ✅ Alphabets converted to uppercase  
- ✅ Special characters extracted  
- ✅ Sum of all numbers (as a string)  
- ✅ Concatenation of all alphabets in reverse order with alternating uppercase/lowercase  
- ✅ User details (Name, Roll Number, Email, User ID)  

This ensures the input data is processed and categorized neatly.

---

## 🚀 Hosted API
- **Base URL:** `https://bajaj-finserv-c5n4.vercel.app/bfhl`  
- **Method:** `POST`  
- **Content-Type:** `application/json`  

---

## 📥 Example Request
Input JSON format expected by the API:
```json
{
  "data": ["a", "1", "334", "4", "R", "$"]
}
```

---

## 📤 Example Response
The API will return:
```json
{
  "is_success": true,
  "user_id": "john doe_ddmmyyyy",
  "email": "johndoe@example.com",
  "roll_number": "22BCEXXXX",
  "odd_numbers": ["1"],
  "even_numbers": ["334","4"],
  "alphabets": ["A","R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}
```

### 🔎 Explanation of Response
- **is_success** → Confirms if the request was processed correctly.  
- **user_id** → Your full name in lowercase with DOB (format: `name_ddmmyyyy`).  
- **email** → Your registered email ID.  
- **roll_number** → Your college roll number.  
- **odd_numbers** → All odd integers (returned as strings).  
- **even_numbers** → All even integers (returned as strings).  
- **alphabets** → All alphabets converted to uppercase.  
- **special_characters** → Any characters that are neither numbers nor alphabets.  
- **sum** → Sum of all numeric values (returned as a string).  
- **concat_string** → Alphabets concatenated in reverse order with alternating caps.  

---

## ⚙️ Tech Stack
- **Backend:** Node.js with Express.js  
- **Hosting:** Vercel  

---

## 🛠️ How to Run Locally
1. Clone the repository:  
   ```bash
   git clone https://github.com/Deepbendu/Bajaj-Finserv.git
   cd Bajaj-Finserv
   ```
2. Install dependencies:  
   ```bash
   npm install
   ```
3. Start the server:  
   ```bash
   npm start
   ```
4. Test using Postman or `curl`:  
   ```bash
   curl -X POST http://localhost:3000/bfhl    -H "Content-Type: application/json"    -d '{"data":["a","1","334","4","R","$"]}'
   ```

---

## 👤 Author
- **Name:** Deepbendu Debnath    
- **Email:** debnathdeepbendu@gmail.com
