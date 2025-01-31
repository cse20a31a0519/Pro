import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import { getDatabase, ref, set ,get } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyB5iAUnK_5AP7ijrcQvlRfvCSfXrH9n6Ak",
    authDomain: "index-16f53.firebaseapp.com",
    projectId: "index-16f53",
    storageBucket: "index-16f53.firebasestorage.app",
    messagingSenderId: "171804052014",
    appId: "1:171804052014:web:c38d9d50835d551cafadbf"
  };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

const designing =  [
    {
      "id": 1,
      "title": "Graphic Design Fundamentals",
      "type":"Free",
      "description": "Learn the basics of graphic design with best explanation!!.",
      "price": 0.00,
      "image": "https://tse2.mm.bing.net/th?id=OIP.sdbIKmNxGA-AyQtLneXw4wHaE8&pid=Api&P=0&h=180",
      "video_links": [
        "https://www.youtube.com/watch?v=dFSia1LZI4Y&list=PLYfCBK8IplO4E2sXtdKMVpKJZRBEoMvpn&index=2",
        "https://www.youtube.com/watch?v=F0PTse89XIE&list=PLYfCBK8IplO4E2sXtdKMVpKJZRBEoMvpn&index=3",
        "https://www.youtube.com/watch?v=F0PTse89XIE&list=PLYfCBK8IplO4E2sXtdKMVpKJZRBEoMvpn&index=4",
        "https://www.youtube.com/watch?v=F0PTse89XIE&list=PLYfCBK8IplO4E2sXtdKMVpKJZRBEoMvpn&index=5",
        "https://www.youtube.com/watch?v=F0PTse89XIE&list=PLYfCBK8IplO4E2sXtdKMVpKJZRBEoMvpn&index=6",
        "https://www.youtube.com/watch?v=F0PTse89XIE&list=PLYfCBK8IplO4E2sXtdKMVpKJZRBEoMvpn&index=7",
        "https://www.youtube.com/watch?v=F0PTse89XIE&list=PLYfCBK8IplO4E2sXtdKMVpKJZRBEoMvpn&index=8",
        "https://www.youtube.com/watch?v=F0PTse89XIE&list=PLYfCBK8IplO4E2sXtdKMVpKJZRBEoMvpn&index=9",
        "https://www.youtube.com/watch?v=F0PTse89XIE&list=PLYfCBK8IplO4E2sXtdKMVpKJZRBEoMvpn&index=10",
        "https://www.youtube.com/watch?v=F0PTse89XIE&list=PLYfCBK8IplO4E2sXtdKMVpKJZRBEoMvpn&index=11",
        
      ]
    },
    {
      "id": 2,
      "title": "UI/UX Design Basics",
      "type":"free",
      "description": "Learn the principles of user interface and user experience design.",
      "price": 0.00,
      "image": "https://www.appsdevpro.com/blog/wp-content/uploads/2022/06/Ui-ux-cover-imge.jpg",
      "video_links": [
        "https://www.youtube.com/watch?v=8GofoyfO3TA&list=PLpKyNBYcYNJec4bUTVZUqxBQF5ezd96RT",
        "https://www.youtube.com/watch?v=78901https://www.youtube.com/watch?v=uYM161RaFLs&list=PLpKyNBYcYNJec4bUTVZUqxBQF5ezd96RT&index=2",
        "https://www.youtube.com/watch?v=78901https://www.youtube.com/watch?v=uYM161RaFLs&list=PLpKyNBYcYNJec4bUTVZUqxBQF5ezd96RT&index=3",
        "https://www.youtube.com/watch?v=78901https://www.youtube.com/watch?v=uYM161RaFLs&list=PLpKyNBYcYNJec4bUTVZUqxBQF5ezd96RT&index=4",
        "https://www.youtube.com/watch?v=78901https://www.youtube.com/watch?v=uYM161RaFLs&list=PLpKyNBYcYNJec4bUTVZUqxBQF5ezd96RT&index=5",
        "https://www.youtube.com/watch?v=78901https://www.youtube.com/watch?v=uYM161RaFLs&list=PLpKyNBYcYNJec4bUTVZUqxBQF5ezd96RT&index=6",
        "https://www.youtube.com/watch?v=78901https://www.youtube.com/watch?v=uYM161RaFLs&list=PLpKyNBYcYNJec4bUTVZUqxBQF5ezd96RT&index=7",
        "https://www.youtube.com/watch?v=78901https://www.youtube.com/watch?v=uYM161RaFLs&list=PLpKyNBYcYNJec4bUTVZUqxBQF5ezd96RT&index=8",
        "https://www.youtube.com/watch?v=78901https://www.youtube.com/watch?v=uYM161RaFLs&list=PLpKyNBYcYNJec4bUTVZUqxBQF5ezd96RT&index=9",
        "https://www.youtube.com/watch?v=78901https://www.youtube.com/watch?v=uYM161RaFLs&list=PLpKyNBYcYNJec4bUTVZUqxBQF5ezd96RT&index=10",
      ]
    },
    {
      "id": 3,
      "title": "Advanced Photoshop Techniques",
      "type":"premium",
      "description": "Master advanced tools and techniques in Photoshop with hands on !!",
      "price": 49.99,
      "image": "https://tse2.mm.bing.net/th?id=OIP.3mu1f2O9SiJauoSf9yo23AHaHa&pid=Api&P=0&h=180",
      "video_links": [
        "https://www.youtube.com/watch?v=Q2E1npU5xmk&list=PLSoOtQkDh8ByH7x6eQfjVt09V9GJMxL2Z&index=1",
        "https://www.youtube.com/watch?v=Q2E1npU5xmk&list=PLSoOtQkDh8ByH7x6eQfjVt09V9GJMxL2Z&index=2",
        "https://www.youtube.com/watch?v=Q2E1npU5xmk&list=PLSoOtQkDh8ByH7x6eQfjVt09V9GJMxL2Z&index=3",
        "https://www.youtube.com/watch?v=Q2E1npU5xmk&list=PLSoOtQkDh8ByH7x6eQfjVt09V9GJMxL2Z&index=4",
        "https://www.youtube.com/watch?v=Q2E1npU5xmk&list=PLSoOtQkDh8ByH7x6eQfjVt09V9GJMxL2Z&index=5",
        "https://www.youtube.com/watch?v=Q2E1npU5xmk&list=PLSoOtQkDh8ByH7x6eQfjVt09V9GJMxL2Z&index=6",
        "https://www.youtube.com/watch?v=Q2E1npU5xmk&list=PLSoOtQkDh8ByH7x6eQfjVt09V9GJMxL2Z&index=7",
        "https://www.youtube.com/watch?v=Q2E1npU5xmk&list=PLSoOtQkDh8ByH7x6eQfjVt09V9GJMxL2Z&index=8",
        "https://www.youtube.com/watch?v=Q2E1npU5xmk&list=PLSoOtQkDh8ByH7x6eQfjVt09V9GJMxL2Z&index=9",
        "https://www.youtube.com/watch?v=Q2E1npU5xmk&list=PLSoOtQkDh8ByH7x6eQfjVt09V9GJMxL2Z&index=10"
      ]
    },
    {
      "id": 4,
      "title": "Mastering Adobe Illustrator",
      "type":"premium",
      "description": "Become an expert in Adobe Illustrator.",
      "price": 59.99,
      "image": "https://logos-world.net/wp-content/uploads/2020/06/Adobe-Logo.png",
      "video_links": [
        "https://www.youtube.com/watch?v=Q4JaXVELZx4&list=PLTC8awFvBUmMUZLjKkvoz0qyVzIl-cDf8&index=1",
        "https://www.youtube.com/watch?v=Q4JaXVELZx4&list=PLTC8awFvBUmMUZLjKkvoz0qyVzIl-cDf8&index=2",
        "https://www.youtube.com/watch?v=Q4JaXVELZx4&list=PLTC8awFvBUmMUZLjKkvoz0qyVzIl-cDf8&index=3",
        "https://www.youtube.com/watch?v=Q4JaXVELZx4&list=PLTC8awFvBUmMUZLjKkvoz0qyVzIl-cDf8&index=4",
        "https://www.youtube.com/watch?v=Q4JaXVELZx4&list=PLTC8awFvBUmMUZLjKkvoz0qyVzIl-cDf8&index=5",
        "https://www.youtube.com/watch?v=Q4JaXVELZx4&list=PLTC8awFvBUmMUZLjKkvoz0qyVzIl-cDf8&index=6",
        "https://www.youtube.com/watch?v=Q4JaXVELZx4&list=PLTC8awFvBUmMUZLjKkvoz0qyVzIl-cDf8&index=7",
        "https://www.youtube.com/watch?v=Q4JaXVELZx4&list=PLTC8awFvBUmMUZLjKkvoz0qyVzIl-cDf8&index=8",
        "https://www.youtube.com/watch?v=Q4JaXVELZx4&list=PLTC8awFvBUmMUZLjKkvoz0qyVzIl-cDf8&index=9",
        "https://www.youtube.com/watch?v=Q4JaXVELZx4&list=PLTC8awFvBUmMUZLjKkvoz0qyVzIl-cDf8&index=10",
      ]
    }
  ]

const dataScience = [
    {
      "id": 1,
      "title": "Introduction to Data Science",
      "type":"free",
      "description": "Learn the basics of data science and analytics.",
      "price": 0.00,
      "image": "https://tse4.mm.bing.net/th?id=OIP.EZtIWLspw0anVgHATWsUbwHaEM&pid=Api&P=0&h=180",
     "video_links": [
        "https://www.youtube.com/watch?v=eaFaD_IBYW4&list=PLeo1K3hjS3us_ELKYSj_Fth2tIEkdKXvV&index=2",
        "https://www.youtube.com/watch?v=eaFaD_IBYW4&list=PLeo1K3hjS3us_ELKYSj_Fth2tIEkdKXvV&index=3",
        "https://www.youtube.com/watch?v=eaFaD_IBYW4&list=PLeo1K3hjS3us_ELKYSj_Fth2tIEkdKXvV&index=4",
        "https://www.youtube.com/watch?v=eaFaD_IBYW4&list=PLeo1K3hjS3us_ELKYSj_Fth2tIEkdKXvV&index=5",
        "https://www.youtube.com/watch?v=eaFaD_IBYW4&list=PLeo1K3hjS3us_ELKYSj_Fth2tIEkdKXvV&index=6",
        "https://www.youtube.com/watch?v=eaFaD_IBYW4&list=PLeo1K3hjS3us_ELKYSj_Fth2tIEkdKXvV&index=7",
        "https://www.youtube.com/watch?v=eaFaD_IBYW4&list=PLeo1K3hjS3us_ELKYSj_Fth2tIEkdKXvV&index=8",
        "https://www.youtube.com/watch?v=eaFaD_IBYW4&list=PLeo1K3hjS3us_ELKYSj_Fth2tIEkdKXvV&index=9",
        "https://www.youtube.com/watch?v=eaFaD_IBYW4&list=PLeo1K3hjS3us_ELKYSj_Fth2tIEkdKXvV&index=10",
        "https://www.youtube.com/watch?v=eaFaD_IBYW4&list=PLeo1K3hjS3us_ELKYSj_Fth2tIEkdKXvV&index=11"
      ]
    },
    {
      "id": 2,
      "title": "Data Visualization with Python",
      "type":"free",
      "description": "Learn how to visualize data using Python libraries.",
      "price": 0.00,
      "image": "https://tse3.mm.bing.net/th?id=OIP.aMMiqtF0-RM6etLMZfbwRgHaES&pid=Api&P=0&h=180",
      "video_links": [
        "https://www.youtube.com/watch?v=Ca-jniIPpsM&list=PLZ2ps__7DhBZ12NClTmMLsnU0mF9ZUSG_&index=2",
        "https://www.youtube.com/watch?v=Ca-jniIPpsM&list=PLZ2ps__7DhBZ12NClTmMLsnU0mF9ZUSG_&index=3",
        "https://www.youtube.com/watch?v=Ca-jniIPpsM&list=PLZ2ps__7DhBZ12NClTmMLsnU0mF9ZUSG_&index=4",
        "https://www.youtube.com/watch?v=Ca-jniIPpsM&list=PLZ2ps__7DhBZ12NClTmMLsnU0mF9ZUSG_&index=5",
        "https://www.youtube.com/watch?v=Ca-jniIPpsM&list=PLZ2ps__7DhBZ12NClTmMLsnU0mF9ZUSG_&index=6",
        "https://www.youtube.com/watch?v=Ca-jniIPpsM&list=PLZ2ps__7DhBZ12NClTmMLsnU0mF9ZUSG_&index=7",
        "https://www.youtube.com/watch?v=Ca-jniIPpsM&list=PLZ2ps__7DhBZ12NClTmMLsnU0mF9ZUSG_&index=8",
        "https://www.youtube.com/watch?v=Ca-jniIPpsM&list=PLZ2ps__7DhBZ12NClTmMLsnU0mF9ZUSG_&index=9",
        "https://www.youtube.com/watch?v=Ca-jniIPpsM&list=PLZ2ps__7DhBZ12NClTmMLsnU0mF9ZUSG_&index=10",
        "https://www.youtube.com/watch?v=Ca-jniIPpsM&list=PLZ2ps__7DhBZ12NClTmMLsnU0mF9ZUSG_&index=11"
      ]
    },
    {
      "id": 3,
      "title": "Advanced Machine Learning with Python",

      "type":"premium",
      "description": "Dive deep into machine learning with Python.",
      "price": 79.99,
      "image": "https://tse4.mm.bing.net/th?id=OIP.dvWnEZMHpvDHcBTiliPhnwHaEB&pid=Api&P=0&h=180",
      "video_links": [
        "https://www.youtube.com/watch?v=ukzFI9rgwfU&list=PLEiEAq2VkUULYYgj13YHUWmRePqiu8Ddy&index=1",
        "https://www.youtube.com/watch?v=ukzFI9rgwfU&list=PLEiEAq2VkUULYYgj13YHUWmRePqiu8Ddy&index=2",
        "https://www.youtube.com/watch?v=ukzFI9rgwfU&list=PLEiEAq2VkUULYYgj13YHUWmRePqiu8Ddy&index=3",
        "https://www.youtube.com/watch?v=ukzFI9rgwfU&list=PLEiEAq2VkUULYYgj13YHUWmRePqiu8Ddy&index=4",
        "https://www.youtube.com/watch?v=ukzFI9rgwfU&list=PLEiEAq2VkUULYYgj13YHUWmRePqiu8Ddy&index=5",
        "https://www.youtube.com/watch?v=ukzFI9rgwfU&list=PLEiEAq2VkUULYYgj13YHUWmRePqiu8Ddy&index=6",
        "hhttps://www.youtube.com/watch?v=ukzFI9rgwfU&list=PLEiEAq2VkUULYYgj13YHUWmRePqiu8Ddy&index=7",
        "https://www.youtube.com/watch?v=ukzFI9rgwfU&list=PLEiEAq2VkUULYYgj13YHUWmRePqiu8Ddy&index=8",
        "https://www.youtube.com/watch?v=ukzFI9rgwfU&list=PLEiEAq2VkUULYYgj13YHUWmRePqiu8Ddy&index=9",
        "https://www.youtube.com/watch?v=ukzFI9rgwfU&list=PLEiEAq2VkUULYYgj13YHUWmRePqiu8Ddy&index=10"
      ]
    },
    {
      "id": 4,
      "title": "Deep Learning with TensorFlow",
      "type":"premium",
      "description": "Learn deep learning with TensorFlow framework.",
      "price": 89.99,
      "image": "hhttps://tse1.mm.bing.net/th?id=OIP.7jxo3wwLyZo0wy7P-cA5JwHaEK&pid=Api&P=0&h=180",
      "video_links": [
        "https://www.youtube.com/watch?v=6M5VXKLf4D4&list=PLEiEAq2VkUUIYQ-mMRAGilfOKyWKpHSip&index=1",
        "https://www.youtube.com/watch?v=6M5VXKLf4D4&list=PLEiEAq2VkUUIYQ-mMRAGilfOKyWKpHSip&index=2",
        "https://www.youtube.com/watch?v=6M5VXKLf4D4&list=PLEiEAq2VkUUIYQ-mMRAGilfOKyWKpHSip&index=3",
        "https://www.youtube.com/watch?v=6M5VXKLf4D4&list=PLEiEAq2VkUUIYQ-mMRAGilfOKyWKpHSip&index=4",
        "https://www.youtube.com/watch?v=6M5VXKLf4D4&list=PLEiEAq2VkUUIYQ-mMRAGilfOKyWKpHSip&index=5",
        "https://www.youtube.com/watch?v=6M5VXKLf4D4&list=PLEiEAq2VkUUIYQ-mMRAGilfOKyWKpHSip&index=6",
        "https://www.youtube.com/watch?v=6M5VXKLf4D4&list=PLEiEAq2VkUUIYQ-mMRAGilfOKyWKpHSip&index=7",
        "https://www.youtube.com/watch?v=6M5VXKLf4D4&list=PLEiEAq2VkUUIYQ-mMRAGilfOKyWKpHSip&index=8",
        "https://www.youtube.com/watch?v=6M5VXKLf4D4&list=PLEiEAq2VkUUIYQ-mMRAGilfOKyWKpHSip&index=9",
        "https://www.youtube.com/watch?v=6M5VXKLf4D4&list=PLEiEAq2VkUUIYQ-mMRAGilfOKyWKpHSip&index=10",
        "https://www.youtube.com/watch?v=6M5VXKLf4D4&list=PLEiEAq2VkUUIYQ-mMRAGilfOKyWKpHSip&index=11"
      ]
    },
    {
        "id": 5,
        "title": "AI for Beginners",
        "type":"premium",
        "description": "Dive deep into machine learning with Python.",
        "price": 79.99,
        "image": "https://tse1.mm.bing.net/th?id=OIP.cm8W7HDVsi62PM5dceWJxwHaEt&pid=Api&P=0&h=180",
        "video_links": [
          "https://www.youtube.com/watch?v=ukzFI9rgwfU&list=PLEiEAq2VkUULYYgj13YHUWmRePqiu8Ddy&index=1",
          "https://www.youtube.com/watch?v=ukzFI9rgwfU&list=PLEiEAq2VkUULYYgj13YHUWmRePqiu8Ddy&index=2",
          "https://www.youtube.com/watch?v=ukzFI9rgwfU&list=PLEiEAq2VkUULYYgj13YHUWmRePqiu8Ddy&index=3",
          "https://www.youtube.com/watch?v=ukzFI9rgwfU&list=PLEiEAq2VkUULYYgj13YHUWmRePqiu8Ddy&index=4",
          "https://www.youtube.com/watch?v=ukzFI9rgwfU&list=PLEiEAq2VkUULYYgj13YHUWmRePqiu8Ddy&index=5",
          "https://www.youtube.com/watch?v=ukzFI9rgwfU&list=PLEiEAq2VkUULYYgj13YHUWmRePqiu8Ddy&index=6",
          "hhttps://www.youtube.com/watch?v=ukzFI9rgwfU&list=PLEiEAq2VkUULYYgj13YHUWmRePqiu8Ddy&index=7",
          "https://www.youtube.com/watch?v=ukzFI9rgwfU&list=PLEiEAq2VkUULYYgj13YHUWmRePqiu8Ddy&index=8",
          "https://www.youtube.com/watch?v=ukzFI9rgwfU&list=PLEiEAq2VkUULYYgj13YHUWmRePqiu8Ddy&index=9",
          "https://www.youtube.com/watch?v=ukzFI9rgwfU&list=PLEiEAq2VkUULYYgj13YHUWmRePqiu8Ddy&index=10"
        ]
      },
  ]
    const It= [
    {
        "id": 1,
        "title": "HTML Course",
        "type":"free",
        "description": "Learn the basics of HTML.",
        "price": 0.0,
        "image": "https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png",
        "video_links": [
            "https://www.youtube.com/watch?v=UB1O30fR-EE",
            "https://www.youtube.com/watch?v=pQN-pnXPaVg",
            "https://www.youtube.com/watch?v=DPnqb74Smug",
            "https://www.youtube.com/watch?v=G3e-cpL7ofc",
            "https://www.youtube.com/watch?v=88PXJAA6szs",
            "https://www.youtube.com/watch?v=qz0aGYrrlhU",
            "https://www.youtube.com/watch?v=kUMe1FH4CHE",
            "https://www.youtube.com/watch?v=oxjJ6cMrD1c",
            "https://www.youtube.com/watch?v=3LgJpkx-hz0",
            "https://www.youtube.com/watch?v=nwa1aZlTzcg"
        ]
    },
    {
        "id": 2,
        "title": "CSS Course",
        "type":"free",
        "description": "Learn how to style websites using CSS.",
        "price": 0.0,
        "image": "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
        "video_links": [
            "https://www.youtube.com/watch?v=yfoY53QXEnI",
            "https://www.youtube.com/watch?v=1Rs2ND1ryYc",
            "https://www.youtube.com/watch?v=HcOc7P5BMi4",
            "https://www.youtube.com/watch?v=s7ONvIgOWdM",
            "https://www.youtube.com/watch?v=3T_Jy1CqH9U",
            "https://www.youtube.com/watch?v=ieTHC78giGQ",
            "https://www.youtube.com/watch?v=0afZj1G0BIE",
            "https://www.youtube.com/watch?v=lOeQUwdAjE0",
            "https://www.youtube.com/watch?v=Edsxf_NBFrw",
            "https://www.youtube.com/watch?v=uBXTQx5CtRA"
        ]
    },
    {
        "id": 3,
        "title": "Web Development Bootcamp",
        "type":"premium",
        "description": "Learn to build websites using HTML, CSS, and JavaScript.",
        "price": 49.99,
        "image": "https://tse2.mm.bing.net/th?id=OIP.Voyv5GlFcNUErkDbtTDv-gHaDt&pid=Api&P=0&h=180",
        "video_links": [
            "https://www.youtube.com/watch?v=jBzwzrDvZ18",
            "https://www.youtube.com/watch?v=3JluqTojuME",
            "https://www.youtube.com/watch?v=PkZNo7MFNFg",
            "https://www.youtube.com/watch?v=UB1O30fR-EE",
            "https://www.youtube.com/watch?v=yfoY53QXEnI",
            "https://www.youtube.com/watch?v=w7ejDZ8SWv8",
            "https://www.youtube.com/watch?v=sBws8MSXN7A",
            "https://www.youtube.com/watch?v=4UZrsTqkcW4",
            "https://www.youtube.com/watch?v=3tCm-l2A8gE",
            "https://www.youtube.com/watch?v=rfscVS0vtbw"
        ]
    },
    {
        "id": 4,
        "title": "C++",
        "type":"premium",
        "description": "Learn the C++ programming language.",
        "price": 34.99,
        "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
        "video_links": [
            "https://www.youtube.com/watch?v=vLnPwxZdW4Y",
            "https://www.youtube.com/watch?v=Rub-JsjMhWY",
            "https://www.youtube.com/watch?v=1v_4dL9uX7A",
            "https://www.youtube.com/watch?v=mUQZ1qmKlLY",
            "https://www.youtube.com/watch?v=yGB9jhsEsr8",
            "https://www.youtube.com/watch?v=4bYgqGuLfD4",
            "https://www.youtube.com/watch?v=bzQ0LgaFL_4",
            "https://www.youtube.com/watch?v=fogqSOcZQkI",
            "https://www.youtube.com/watch?v=ztHM_o4NO-Q",
            "https://www.youtube.com/watch?v=o4LsdN8KXO0"
        ]
    },
            {
                "id": 5,
                "title": "Python Course",
                "type":"premium",
                "description": "Learn Python programming from basic to advanced.",
                "price": 34.99,
                "image": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
                "video_links": [
                    "https://www.youtube.com/watch?v=rfscVS0vtbw",
                    "https://www.youtube.com/watch?v=H1elmMBnykA",
                    "https://www.youtube.com/watch?v=VAcKlsfM3Kk",
                    "https://www.youtube.com/watch?v=YYXdXT2l-Gg",
                    "https://www.youtube.com/watch?v=5f44B9NNZ9w",
                    "https://www.youtube.com/watch?v=0d5lApCbb4A",
                    "https://www.youtube.com/watch?v=AnDmw6F7tYo",
                    "https://www.youtube.com/watch?v=V60u5JtXlDw",
                    "https://www.youtube.com/watch?v=KB9kVhOVNKo",
                    "https://www.youtube.com/watch?v=J7dO2NKPj7I"
                ]
            },
            {
                "id": 6,
                "title": "Azure Course",
                "type":"premium",
                "description": "Learn Microsoft Azure cloud services.",
                "price": 44.99,
                "image": "https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg",
                "video_links": [
                    "https://www.youtube.com/watch?v=22zZXp6JfB4",
                    "https://www.youtube.com/watch?v=aFkmfcmN6Mw",
                    "https://www.youtube.com/watch?v=U3X8s_YR9E4",
                    "https://www.youtube.com/watch?v=3ybsuQftIh0",
                    "https://www.youtube.com/watch?v=msJ9dH5PTb8",
                    "https://www.youtube.com/watch?v=8m02mUq6ZT4",
                    "https://www.youtube.com/watch?v=1JmGTzj8nmE",
                    "https://www.youtube.com/watch?v=2fAq7xsL9n0",
                    "https://www.youtube.com/watch?v=j5p1qgI-SyM",
                    "https://www.youtube.com/watch?v=ZKzgLw3Zl5o"
                ]
            },
            {
                "id": 7,
                "title": "C# Course",
                "type":"free",
                "description": "Learn C# programming from beginner to advanced.",
                "price": 0.0,
                "image": "https://tse2.mm.bing.net/th?id=OIP.TlyeYC31BoaaRXgdAbNcqAHaEo&pid=Api&P=0&h=180",
                "video_links": [
                    "https://www.youtube.com/watch?v=GhQdlIFylQ8",
                    "https://www.youtube.com/watch?v=0paVJ27fF4o",
                    "https://www.youtube.com/watch?v=2oTSGs6XvsQ",
                    "https://www.youtube.com/watch?v=CYc9VlaeMG8",
                    "https://www.youtube.com/watch?v=8kXkpcCpHmM",
                    "https://www.youtube.com/watch?v=GFfhvOdaBaE",
                    "https://www.youtube.com/watch?v=vINi3dLMaj8",
                    "https://www.youtube.com/watch?v=d5Tmcz5U7YA",
                    "https://www.youtube.com/watch?v=-vMtbHT6oQY",
                    "https://www.youtube.com/watch?v=FHHrZ-rgFJs"
                ]
            },
            {
                "id": 8,
                "title": "PHP Course",
                "type":"premium",
                "description": "Learn PHP for web development.",
                "price": 34.99,
                "image": "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
                "video_links": [
                    "https://www.youtube.com/watch?v=OK_JCtrrv-c",
                    "https://www.youtube.com/watch?v=7TLfD0rRjK4",
                    "https://www.youtube.com/watch?v=0LwntkD9gO0",
                    "https://www.youtube.com/watch?v=2pMxV6GxfEc",
                    "https://www.youtube.com/watch?v=e3Fiqfzxb58",
                    "https://www.youtube.com/watch?v=GTV-cI3bYlM",
                    "https://www.youtube.com/watch?v=le1bFrwL91w",
                    "https://www.youtube.com/watch?v=XN2umBG8r_A",
                    "https://www.youtube.com/watch?v=5e5BRhmgwnY",
                    "https://www.youtube.com/watch?v=a5j-2lVr6FY"
                ]
            },
    


  {
      "id": 9,
      "title": "React Course",
      "type":"premium",
      "description": "Learn to build user interfaces with React.",
      "price": 39.99,
      "image": "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      "video_links": [
          "https://www.youtube.com/watch?v=Ke90Tje7VS0",
          "https://www.youtube.com/watch?v=w7ejDZ8SWv8",
          "https://www.youtube.com/watch?v=bMknfKXIFA8",
          "https://www.youtube.com/watch?v=4UZrsTqkcW4",
          "https://www.youtube.com/watch?v=QFaFIcGhPoM",
          "https://www.youtube.com/watch?v=SqcY0GlETPk",
          "https://www.youtube.com/watch?v=nTeuhbP7wdE",
          "https://www.youtube.com/watch?v=mnqNAF3c8AE",
          "https://www.youtube.com/watch?v=99WjItEQlB8",
          "https://www.youtube.com/watch?v=f55qeKGgB_M"
      ]
  },
  {
      "id": 10,
      "title": "SQL Course",
      "type":"premium",
      "description": "Learn to manage databases using SQL.",
      "price": 34.99,
      "image": "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png",
      "video_links": [
          "https://www.youtube.com/watch?v=HXV3zeQKqGY",
          "https://www.youtube.com/watch?v=7S_tz1z_5bA",
          "https://www.youtube.com/watch?v=6ddjP1Twjho",
          "https://www.youtube.com/watch?v=9HIdZhxuGyw",
          "https://www.youtube.com/watch?v=guCyB9TmL38",
          "https://www.youtube.com/watch?v=9PJWHg5kDdQ",
          "https://www.youtube.com/watch?v=T0zSGcZu6vA",
          "https://www.youtube.com/watch?v=OOjV7QwDd1Q",
          "https://www.youtube.com/watch?v=ktvUTjTBJbs",
          "https://www.youtube.com/watch?v=9ytT2_xHpxI"
      ]
  },
  {
      "id": 11,
      "title": "Java Course",
      "type":"premium",
      "description": "Learn Java programming from basics to advanced.",
      "price": 39.99,
      "image": "https://static.vecteezy.com/system/resources/previews/022/100/686/original/java-logo-transparent-free-png.png",
      "video_links": [
          "https://www.youtube.com/watch?v=grEKMHGY9YY",
          "https://www.youtube.com/watch?v=GoXwIVyNvX0",
          "https://www.youtube.com/watch?v=8cm1x4bC610",
          "https://www.youtube.com/watch?v=kz9vH7XBdpE",
          "https://www.youtube.com/watch?v=TBwx9fyqf9I",
          "https://www.youtube.com/watch?v=xk4zADywHjY",
          "https://www.youtube.com/watch?v=R-MYY9I1hzc",
          "https://www.youtube.com/watch?v=s9wW2Pp6wY8",
          "https://www.youtube.com/watch?v=grEKMHGY9YY",
          "https://www.youtube.com/watch?v=p8LRv1D7h8M"
      ]
  },
  {
      "id": 12,
      "title": "AWS Course",
      "type":"premium",
      "description": "Learn Amazon Web Services (AWS) for cloud computing.",
      "price": 49.99,
      "image": "https://kemsys.com/wp-content/uploads/2021/07/AWS-IoT-Connecting-enterprise-devices-Digitalization-Kemsys.png",
      "video_links": [
          "https://www.youtube.com/watch?v=Ia-UEYYR44s",
          "https://www.youtube.com/watch?v=3hBmIu4iydY",
          "https://www.youtube.com/watch?v=AnYf0V1-ByA",
          "https://www.youtube.com/watch?v=AiX9w5kUE-8",
          "https://www.youtube.com/watch?v=dTF4XHJSI4w",
          "https://www.youtube.com/watch?v=v_7bTBRq6A0",
          "https://www.youtube.com/watch?v=J3gIu96q03k",
          "https://www.youtube.com/watch?v=2RuB2j8WVeI",
          "https://www.youtube.com/watch?v=Jrbge5HnJYo",
          "https://www.youtube.com/watch?v=sxxFg9fbQHc"
      ]
  },
  {
      "id": 13,
      "title": "Node.js Course",
      "type":"premium",
      "description": "Learn to build web applications with Node.js.",
      "price": 34.99,
      "image": "https://tse2.mm.bing.net/th?id=OIP.cmrREkftpZTXsL5L_8N-2QHaD9&pid=Api&P=0&h=180",
      "video_links": [
          "https://www.youtube.com/watch?v=RLpIq3dlOb4",
          "https://www.youtube.com/watch?v=TlB_eWDSMt4",
          "https://www.youtube.com/watch?v=O1Ro5GVc-O8",
          "https://www.youtube.com/watch?v=nKIu9K6F6uA",
          "https://www.youtube.com/watch?v=8z7dXQ_7Lxg",
          "https://www.youtube.com/watch?v=10SMcxbr3Qo",
          "https://www.youtube.com/watch?v=RZSOwJoGQDQ",
          "https://www.youtube.com/watch?v=1VZIEfbC_5k",
          "https://www.youtube.com/watch?v=nA1tbzIvi1s",
          "https://www.youtube.com/watch?v=02QOMR49dh0"
      ]
  },
  {
      "id": 14,
      "title": "Angular Course",
      "type":"premium",
      "description": "Learn Angular framework for building dynamic web applications.",
      "price": 49.99,
      "image": "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg",
      "video_links": [
          "https://www.youtube.com/watch?v=htPYk6QxacQ",
          "https://www.youtube.com/watch?v=3qBXWUpoPHo",
          "https://www.youtube.com/watch?v=htH7KGRN9V4",
          "https://www.youtube.com/watch?v=x0V-V9avco8",
          "https://www.youtube.com/watch?v=GgVHTY64ke0",
          "https://www.youtube.com/watch?v=ZmP7J5itvYg",
          "https://www.youtube.com/watch?v=KzQI3VEXZJw",
          "https://www.youtube.com/watch?v=1PkcM1zGc9g",
          "https://www.youtube.com/watch?v=0LqqQYs7bt0",
          "https://www.youtube.com/watch?v=Fd5jL8fFE5k"
      ]
  },
]
let  postForm=document.getElementById("pBtn");
postForm.addEventListener("click",async(e)=>{
  e.preventDefault()
 
   await set(ref(database,"admin/courses"),{
    Designing:designing,
    DataScience:dataScience,
    It:It
   }).then(()=>{
    alert("job posted successfully")
   })
 
})



//     // Function to fetch courses from Firebase based on the category
//     // Function to fetch courses from Firebase based on the category
// function fetchCourses(category) {
//     const categoryPath = `admin/courses/${category}`;
//     get(ref(database, categoryPath)).then(snapshot => { // Change this line
//         const courses = snapshot.val();
//         if (courses) {
//             displayCourses(courses);
//         } else {
//             document.getElementById('cards-container').innerHTML = "<p>No courses available for this category.</p>";
//         }
//     }).catch(error => {
//         console.error("Error fetching courses:", error);
//     });
// }


//     // Function to display the courses in a grid format
//     function displayCourses(courses) {
//         const container = document.getElementById('cards-container');
//         container.innerHTML = ''; // Clear previous content

//         // Convert the object into an array for easier handling
//         const coursesArray = Object.values(courses);
//         // Shuffle the array for random display
//         shuffleArray(coursesArray);

//         coursesArray.forEach(course => {
//             const isPremium = course.type === 'premium'; // Check if the course is premium
//             const courseHTML = generateCardHTML(course, isPremium);
//             container.innerHTML += courseHTML; // Add the card HTML to the container
//         });
//     }

//     // Function to generate HTML for each course card
//     function generateCardHTML(course, isPremium) {
//         return `
//             <div class="col-md-4 mb-4">
//                 <div class="card h-100">
//                     <img src="${course.image}" class="card-img-top img-fluid" alt="${course.title}" style="max-height: 200px; object-fit: cover;">
//                     <div class="card-body">
//                         <h5 class="card-title">${course.title}</h5>
//                         <p class="card-text">${course.description}</p>
//                         <p class="card-text"><strong>Price:</strong> $${course.price.toFixed(2)}</p>
//                         ${isPremium ? `
//                             <p class="premium-label"><strong>Premium Course</strong></p>
//                             <p><strong>Rating:</strong> ${course.rating}</p>
//                             <button class="btn btn-primary" onclick="navigateToPayment(${course.id})">Play Video (Premium)</button>
//                         ` : ''}
//                         <button class="btn btn-secondary mt-2" onclick="navigateToEnrollment(${course.id})">Enroll</button>
//                     </div>
//                 </div>
//             </div>
//         `;
//     }

//     // Function to shuffle the courses array for random display
//     function shuffleArray(array) {
//         for (let i = array.length - 1; i > 0; i--) {
//             const j = Math.floor(Math.random() * (i + 1));
//             [array[i], array[j]] = [array[j], array[i]]; // Swap elements
//         }
//     }

//     // Dummy functions for navigation (implement according to your needs)
//     function navigateToPayment(courseId) {
//         console.log(`Navigating to payment for course ID: ${courseId}`);
//         // Add actual navigation logic here
//     }

//     function navigateToEnrollment(courseId) {
//         console.log(`Navigating to enrollment for course ID: ${courseId}`);
//         // Add actual navigation logic here
//     }

//     // Example: Fetch courses for different categories
//     fetchCourses('AI');
//     fetchCourses('WebIT');
//     fetchCourses('Designing');
// const fetchCourses = async () => {
//     try {
//         // Fetch courses from different categories
//         const designingSnapshot = await get(ref(database, "admin/courses/Designing"));
//         const dataScienceSnapshot = await get(ref(database, "admin/courses/DataScience"));
//         const itSnapshot = await get(ref(database, "admin/courses/It"));

//         // Convert snapshot data to array if exists
//         const designingCourses = designingSnapshot.exists() ? Object.values(designingSnapshot.val()) : [];
//         const dataScienceCourses = dataScienceSnapshot.exists() ? Object.values(dataScienceSnapshot.val()) : [];
//         const itCourses = itSnapshot.exists() ? Object.values(itSnapshot.val()) : [];

//         // Combine and shuffle all courses randomly
//         const allCourses = [...designingCourses, ...dataScienceCourses, ...itCourses].sort(() => Math.random() - 0.5);

//         console.log("Courses retrieved successfully:", allCourses);
//         return allCourses;
//     } catch (error) {
//         console.error("Error fetching courses:", error);
//         return [];
//     }
// };

// // Enroll user in the course
// const enrollCourse = (course, userId) => {
//     const userCoursesRef = ref(database, `users/${userId}/enrolledCourses/${course.id}`);

//     // Add course to user's enrolled courses in Firebase
//     set(userCoursesRef, {
//         id: course.id,
//         title: course.title,
//         description: course.description,
//         image: course.image,
//         type: course.type
//     })
//     .then(() => {
//         Swal.fire('Success!', 'You have successfully enrolled!', 'success');
//     })
//     .catch((error) => {
//         Swal.fire('Error!', 'There was an error enrolling in the course.', 'error');
//     });
// };

// // Display courses dynamically
// const displayCourses = (courses, userId) => {
//     const coursesContainer = document.getElementById("courses-container");
//     coursesContainer.innerHTML = "";

//     courses.forEach((course) => {
//         const courseElement = document.createElement("div");
//         courseElement.className = "col-md-4 mb-4";
//         courseElement.innerHTML = `
//             <div class="card h-100">
//                 <img src="${course.image}" class="card-img-top img-fluid" alt="${course.title}" style="max-height: 200px; object-fit: cover;">
//                 <div class="card-body">
//                     <h5 class="card-title">${course.title}</h5>
//                     <p class="card-text">${course.description}</p>
//                     <button class="btn btn-secondary mt-2" onclick="navigateToSingleCourse('${course.id}')">Play All</button>
//                     <button class="btn btn-primary mt-2 enroll-btn" data-id="${course.id}" data-type="${course.type}" data-user="${userId}">Enroll</button>
//                 </div>
//             </div>
//         `;
//         coursesContainer.appendChild(courseElement);
//     });

//     // Attach event listeners for enroll buttons
//     document.querySelectorAll('.enroll-btn').forEach(button => {
//         button.addEventListener('click', () => {
//             const courseId = button.getAttribute('data-id');
//             const courseType = button.getAttribute('data-type');
//             handleEnrollment(courseId, courseType, userId);
//         });
//     });
// };

// // Handle course enrollment
// const handleEnrollment = (courseId, courseType, userId) => {
//     if (courseType === 'premium') {
//         Swal.fire({
//             title: 'Confirm Payment',
//             text: "This is a premium course. Please complete the payment to enroll.",
//             icon: 'warning',
//             showCancelButton: true,
//             confirmButtonText: 'Go to Payment',
//             cancelButtonText: 'Cancel'
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 window.location.href = 'payment.html';
//             }
//         });
//     } else {
//         // Enroll in free course
//         const freeCourse = { id: courseId, title: "Free Course" };
//         enrollCourse(freeCourse, userId);
//     }
// };

// // Fetch and display courses
// fetchCourses().then((courses) => {
//     const userId = "user123"; // You should dynamically get the user ID (e.g., from Firebase Authentication)
//     displayCourses(courses, userId);
// });

// const fetchCourses = async () => {
//     try {
//         const coursesSnapshot = await get(ref(database, "admin/courses"));
        
//         if (!coursesSnapshot.exists()) return [];

//         const coursesData = coursesSnapshot.val();
//         const allCourses = [];

//         // Extract courses and add type information
//         Object.keys(coursesData).forEach((category) => {
//             Object.values(coursesData[category]).forEach((course) => {
//                 allCourses.push({ ...course, type: course.type || "free" });
//             });
//         });

//         // Shuffle courses randomly
//         allCourses.sort(() => Math.random() - 0.5);

//         console.log("Courses retrieved successfully:", allCourses);
//         return allCourses;
//     } catch (error) {
//         console.error("Error fetching courses:", error);
//         return [];
//     }
// };

// const enrollCourse = (course, userId) => {
//     const userCoursesRef = ref(database, `users/${userId}/enrolledCourses/${course.id}`);
    
//     set(userCoursesRef, course)
//     .then(() => {
//         Swal.fire('Success!', 'You have successfully enrolled!', 'success');
//     })
//     .catch((error) => {
//         Swal.fire('Error!', 'There was an error enrolling in the course.', 'error');
//     });
// };

// const displayCourses = (courses, userId) => {
//     const coursesContainer = document.getElementById("courses-container");
//     coursesContainer.innerHTML = "";

//     courses.forEach((course) => {
//         const courseElement = document.createElement("div");
//         courseElement.className = "course col-md-4 mb-4";
//         courseElement.innerHTML = `
//             <div class="card h-100">
//                 <img src="${course.image}" class="card-img-top img-fluid" alt="${course.title}" style="max-height: 200px; object-fit: cover;">
//                 <div class="card-body">
//                     <h5 class="card-title">${course.title}</h5>
//                     <p class="card-text">${course.description}</p>
//                     <p class="card-text"><strong>Type:</strong> ${course.type}</p>
//                     <button class="btn btn-secondary mt-2" onclick="navigateToSingleCourse('${course.id}')">Play All</button>
//                     ${course.type === "premium" ? 
//                         `<button class="btn btn-warning mt-2" onclick="handlePremiumEnrollment('${course.id}')">Premium</button>` : 
//                         `<button class="btn btn-success mt-2" onclick="enrollCourse(${JSON.stringify(course)}, '${userId}')">Free</button>`
//                     }
//                 </div>
//             </div>
//         `;
//         coursesContainer.appendChild(courseElement);
//     });
// };

// const handlePremiumEnrollment = (courseId) => {
//     Swal.fire({
//         title: 'Confirm Payment',
//         text: "This is a premium course. Please complete the payment to enroll.",
//         icon: 'warning',
//         showCancelButton: true,
//         confirmButtonText: 'Go to Payment',
//         cancelButtonText: 'Cancel'
//     }).then((result) => {
//         if (result.isConfirmed) {
//             window.location.href = 'payment.html';
//         }
//     });
// };

// fetchCourses().then((courses) => {
//     const userId = "user123"; // Replace with dynamic user ID
//     displayCourses(courses, userId);
// });
const fetchCourses = async () => {
    try {
        const coursesSnapshot = await get(ref(database, "admin/courses"));
        
        if (!coursesSnapshot.exists()) return [];

        const coursesData = coursesSnapshot.val();
        const allCourses = [];

        // Extract courses and add type information
        Object.keys(coursesData).forEach((category) => {
            Object.values(coursesData[category]).forEach((course) => {
                allCourses.push({ ...course, type: course.type || "free" });
            });
        });

        // Shuffle courses randomly
        allCourses.sort(() => Math.random() - 0.5);

        console.log("Courses retrieved successfully:", allCourses);
        return allCourses;
    } catch (error) {
        console.error("Error fetching courses:", error);
        return [];
    }
};

const enrollCourse = (course, userId) => {
    const userCoursesRef = ref(database, `users/${userId}/enrolledCourses`);
    
    get(userCoursesRef).then((snapshot) => {
        const enrolledCourses = snapshot.exists() ? snapshot.val() : [];
        enrolledCourses.push(course);
        
        set(userCoursesRef, enrolledCourses)
        .then(() => {
            Swal.fire('Success!', 'You have successfully enrolled!', 'success');
        })
        .catch((error) => {
            Swal.fire('Error!', 'There was an error enrolling in the course.', 'error');
        });
    });
};

const displayCourses = (courses, userId) => {
    const coursesContainer = document.getElementById("courses-container");
    coursesContainer.innerHTML = "";

    courses.forEach((course) => {
        const courseElement = document.createElement("div");
        courseElement.className = "course col-md-4 mb-4";
        courseElement.innerHTML = `
            <div class="card h-100">
                <img src="${course.image}" class="card-img-top img-fluid" alt="${course.title}">
                <div class="card-body">
                    <h5 class="card-title">${course.title}</h5>
                    <p class="card-text">${course.description}</p>
                    <p class="card-text"><strong>Type:</strong> ${course.type}</p>
                    <button onclick="navigateToSingleCourse('${course.id}')">Play All</button>
                    <button onclick="enrollCourse(${JSON.stringify(course)}, '${userId}')">Enroll</button>
                    ${course.type === "premium" ? `<button onclick="handlePremiumEnrollment('${course.id}')">Premium</button>` : ""}
                </div>
            </div>
        `;
        coursesContainer.appendChild(courseElement);
    });
};

const handlePremiumEnrollment = (courseId) => {
    Swal.fire({
        title: 'Confirm Payment',
        text: "This is a premium course. Please complete the payment to enroll.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Go to Payment',
        cancelButtonText: 'Cancel'
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = 'payment.html';
        }
    });
};

fetchCourses().then((courses) => {
    const userId = "LpjDIGFOoLNNGqSPjlm2EIZiRMn2"; // Replace with dynamically fetched user ID
    displayCourses(courses, userId);
});
