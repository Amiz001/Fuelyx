# Fulyx – Fuel Expense Tracker ⛽

Fulyx is a mobile fuel expense tracking application built with React Native (Expo) and a Node.js + MongoDB backend.
It allows users to log fuel expenses manually, upload receipts, and (in progress) scan fuel pump meters using OCR.

The goal is to help users track fuel costs, analyze consumption, and manage monthly expenses efficiently.

</br>

## 🚀 Features

- Manual fuel log entry
- Upload fuel receipt screenshots
- Scan fuel pump meter (OCR – in progress)
- Monthly total fuel cost & total liters summary
- Weekly fuel expense chart
- Save fuel station location
- View recent fuel logs
- JWT-based authentication
- Protected API routes
- Cloud storage ready for images

</br>

## 🛠️ Tech Stack

**Frontend**
- React Native
- Expo
- React Navigation
- Axios
- Expo Image Picker / Camera

**Backend**
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Multer (image upload handling)

**Other Tools**
- Git & GitHub

</br>

## 📸 Screenshots
<img width="393" height="852" alt="Home" src="https://github.com/user-attachments/assets/5a638176-ad84-429f-884b-2d978c98e8e8" />
<img width="393" height="852" alt="Home2" src="https://github.com/user-attachments/assets/cac4ac7a-6f58-42de-9490-7f3bebcc3d60" />
<img width="393" height="852" alt="Add Log" src="https://github.com/user-attachments/assets/ec4ed0c6-bec1-40e7-821e-8f20946e7f7b" />
<img width="393" height="852" alt="Settings~" src="https://github.com/user-attachments/assets/df4d63a8-3287-4b34-a642-888a9f58bc7a" />


</br></br>

## 🗂️ Project Structure

fulyx/
│
├── mobile-app/          # React Native Expo app
│   ├── screens/
│   ├── components/
│   ├── services/api.js
│   └── app.json
│
├── backend/             # Node.js API
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   └── server.js
│
└── README.md

## ⚙️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/your-username/parkbay.git
