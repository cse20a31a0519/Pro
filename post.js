import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getDatabase, ref, set, get } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyB5iAUnK_5AP7ijrcQvlRfvCSfXrH9n6Ak",
    authDomain: "index-16f53.firebaseapp.com",
    databaseURL: "https://index-16f53-default-rtdb.firebaseio.com",
    projectId: "index-16f53",
    storageBucket: "index-16f53.appspot.com",
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
      "description": "Learn the basics of graphic design with best hands on expirence!!.",
      "price": 0.00,
      "image": "https://tse2.mm.bing.net/th?id=OIP.sdbIKmNxGA-AyQtLneXw4wHaE8&pid=Api&P=0&h=180",
      "video_links": [
        {
  "title": "What is Graphic Design",
            "url":"https://www.youtube.com/watch?v=dFSia1LZI4Y&list=PLYfCBK8IplO4E2sXtdKMVpKJZRBEoMvpn&index=2"},
  {"title": "The Elements of Design",
  "url":"https://www.youtube.com/watch?v=F0PTse89XIE&list=PLYfCBK8IplO4E2sXtdKMVpKJZRBEoMvpn&index=3"
  },
  {"title": "Color Theory: Understanding the Power of Color",
  "url":"https://www.youtube.com/watch?v=F0PTse89XIE&list=PLYfCBK8IplO4E2sXtdKMVpKJZRBEoMvpn&index=4"
  },
  {"title": "Composition: Arranging Elements for Impact",
  "url":"https://www.youtube.com/watch?v=F0PTse89XIE&list=PLYfCBK8IplO4E2sXtdKMVpKJZRBEoMvpn&index=5"
  },
  {"title":" Principles of Design: Guiding Your Creativity",
  "url":"https://www.youtube.com/watch?v=F0PTse89XIE&list=PLYfCBK8IplO4E2sXtdKMVpKJZRBEoMvpn&index=6"
  },
  {"title":"White Space (Negative Space): The Power of Emptiness",
  "url":"https://www.youtube.com/watch?v=F0PTse89XIE&list=PLYfCBK8IplO4E2sXtdKMVpKJZRBEoMvpn&index=7"
  },
  {"title":"Design Process: A Step-by-Step Approach",
  "url":"https://www.youtube.com/watch?v=F0PTse89XIE&list=PLYfCBK8IplO4E2sXtdKMVpKJZRBEoMvpn&index=8"
  },
  {"title":" Introduction to Design Software: Your Digital Toolkit",
  "url":"https://www.youtube.com/watch?v=F0PTse89XIE&list=PLYfCBK8IplO4E2sXtdKMVpKJZRBEoMvpn&index=9"
  },
  {"title":"Applying Your Knowledge: Practice Exercises and Resources",
  "url":"https://www.youtube.com/watch?v=F0PTse89XIE&list=PLYfCBK8IplO4E2sXtdKMVpKJZRBEoMvpn&index=10"
  },
  {"title":"Conclusion",
  "url":"https://www.youtube.com/watch?v=F0PTse89XIE&list=PLYfCBK8IplO4E2sXtdKMVpKJZRBEoMvpn&index=11"
  },]},
    {
      "id": 2,
      "title": "UI/UX Design Basics",
      "type":"free",
      "description": "Learn the principles of user interface and user experience design.",
      "price": 0.00,
      "image": "https://www.appsdevpro.com/blog/wp-content/uploads/2022/06/Ui-ux-cover-imge.jpg",
      "video_links": [
        { "title":"What is UI/UX Design? – Understanding the Difference",
          "url":"https://www.youtube.com/watch?v=8GofoyfO3TA&list=PLpKyNBYcYNJec4bUTVZUqxBQF5ezd96RT"},
        {
          "title":"The User-Centered Design Process: Putting Users First",
          "url":"https://www.youtube.com/watch?v=78901https://www.youtube.com/watch?v=uYM161RaFLs&list=PLpKyNBYcYNJec4bUTVZUqxBQF5ezd96RT&index=2"
        },
        {
          "title":" User Research Basics: Understanding Your Users",
          "url":"https://www.youtube.com/watch?v=78901https://www.youtube.com/watch?v=uYM161RaFLs&list=PLpKyNBYcYNJec4bUTVZUqxBQF5ezd96RT&index=3"
        },
        {
          "title":"Wireframing & Prototyping: Planning the User Interface",
          "url":"https://www.youtube.com/watch?v=78901https://www.youtube.com/watch?v=uYM161RaFLs&list=PLpKyNBYcYNJec4bUTVZUqxBQF5ezd96RT&index=4"
        },
        {
          "title":"UI Design Principles: Creating Visually Appealing Interfaces",
          "url":"https://www.youtube.com/watch?v=78901https://www.youtube.com/watch?v=uYM161RaFLs&list=PLpKyNBYcYNJec4bUTVZUqxBQF5ezd96RT&index=6"
        },
        {
          "title":"Usability & Accessibility: Designing for Everyone",
          "url":"https://www.youtube.com/watch?v=78901https://www.youtube.com/watch?v=uYM161RaFLs&list=PLpKyNBYcYNJec4bUTVZUqxBQF5ezd96RT&index=7"
        },
        {
          "title":"Interaction Design (IxD) Basics: Designing for Engagement",
          "url":"https://www.youtube.com/watch?v=78901https://www.youtube.com/watch?v=uYM161RaFLs&list=PLpKyNBYcYNJec4bUTVZUqxBQF5ezd96RT&index=8"
        },
        {
          "title":"User Testing: Validating Your Designs",
          "url":"https://www.youtube.com/watch?v=78901https://www.youtube.com/watch?v=uYM161RaFLs&list=PLpKyNBYcYNJec4bUTVZUqxBQF5ezd96RT&index=9"
        },
        {
          "title":" Tools & Resources for UI/UX Designers",
          "url":"https://www.youtube.com/watch?v=78901https://www.youtube.com/watch?v=uYM161RaFLs&list=PLpKyNBYcYNJec4bUTVZUqxBQF5ezd96RT&index=10"
        }
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
        {
          "title":"Advanced Masking Techniques: Precision and Flexibility",
          "url":"https://www.youtube.com/watch?v=Q2E1npU5xmk&list=PLSoOtQkDh8ByH7x6eQfjVt09V9GJMxL2Z&index=1"
        },
        {
          "title":"Mastering Smart Objects: Efficient and Flexible Workflows",
          "url":"https://www.youtube.com/watch?v=Q2E1npU5xmk&list=PLSoOtQkDh8ByH7x6eQfjVt09V9GJMxL2Z&index=2"
        },
        {
          "title":"Frequency Separation: Advanced Retouching",
          "url":"https://www.youtube.com/watch?v=Q2E1npU5xmk&list=PLSoOtQkDh8ByH7x6eQfjVt09V9GJMxL2Z&index=3"
        },
        {
          "title":"Dodge and Burn: Sculpting with Light and Shadow",
          "url":"https://www.youtube.com/watch?v=Q2E1npU5xmk&list=PLSoOtQkDh8ByH7x6eQfjVt09V9GJMxL2Z&index=4"
        },
        {
          "title":"Advanced Text Effects: Beyond the Basics",
          "url":"https://www.youtube.com/watch?v=Q2E1npU5xmk&list=PLSoOtQkDh8ByH7x6eQfjVt09V9GJMxL2Z&index=5"
        },
        {
          "title":"Creating Custom Brushes and Patterns: Expanding Your Toolkit",
          "url":"https://www.youtube.com/watch?v=Q2E1npU5xmk&list=PLSoOtQkDh8ByH7x6eQfjVt09V9GJMxL2Z&index=6"
        },
        {
          "title":"Actions and Automation: Enhancing Efficiency",
          "url":"https://www.youtube.com/watch?v=Q2E1npU5xmk&list=PLSoOtQkDh8ByH7x6eQfjVt09V9GJMxL2Z&index=7"
        },
        {
          "title":"Advanced Compositing: Seamlessly Blending Multiple Images",
          "url":"https://www.youtube.com/watch?v=Q2E1npU5xmk&list=PLSoOtQkDh8ByH7x6eQfjVt09V9GJMxL2Z&index=8"
        },
        {
          "title":"Frequency Separation: Advanced Retouching",
          "url":"https://www.youtube.com/watch?v=Q2E1npU5xmk&list=PLSoOtQkDh8ByH7x6eQfjVt09V9GJMxL2Z&index=9"
        },
        {
          "title":"Advanced File Management and Output: Preparing Files for Various Uses",
          "url":"https://www.youtube.com/watch?v=Q2E1npU5xmk&list=PLSoOtQkDh8ByH7x6eQfjVt09V9GJMxL2Z&index=10"
        }
      ]
    },
    {
      "id": 4,
      "title": "Mastering Adobe Illustrator",
      "type": "premium",
      "description": "Become an expert in Adobe Illustrator.",
      "price": 59.99,
      "image": "https://logos-world.net/wp-content/uploads/2020/06/Adobe-Logo.png",
      "video_links": [
        { "title": "Introduction to Adobe Illustrator", "url": "https://www.youtube.com/watch?v=Q4JaXVELZx4&list=PLTC8awFvBUmMUZLjKkvoz0qyVzIl-cDf8&index=1" },
        { "title": "Navigating the Adobe Illustrator Interface", "url": "https://www.youtube.com/watch?v=Q4JaXVELZx4&list=PLTC8awFvBUmMUZLjKkvoz0qyVzIl-cDf8&index=2" },
        { "title": "Creating Simple Shapes and Objects", "url": "https://www.youtube.com/watch?v=Q4JaXVELZx4&list=PLTC8awFvBUmMUZLjKkvoz0qyVzIl-cDf8&index=3" },
        { "title": "Working with Layers in Illustrator", "url": "https://www.youtube.com/watch?v=Q4JaXVELZx4&list=PLTC8awFvBUmMUZLjKkvoz0qyVzIl-cDf8&index=4" },
        { "title": "Mastering the Pen Tool", "url": "https://www.youtube.com/watch?v=Q4JaXVELZx4&list=PLTC8awFvBUmMUZLjKkvoz0qyVzIl-cDf8&index=5" },
        { "title": "Advanced Drawing Techniques", "url": "https://www.youtube.com/watch?v=Q4JaXVELZx4&list=PLTC8awFvBUmMUZLjKkvoz0qyVzIl-cDf8&index=6" },
        { "title": "Color and Gradient Usage", "url": "https://www.youtube.com/watch?v=Q4JaXVELZx4&list=PLTC8awFvBUmMUZLjKkvoz0qyVzIl-cDf8&index=7" },
        { "title": "Typography and Text Effects in Illustrator", "url": "https://www.youtube.com/watch?v=Q4JaXVELZx4&list=PLTC8awFvBUmMUZLjKkvoz0qyVzIl-cDf8&index=8" },
        { "title": "Creating Complex Illustrations", "url": "https://www.youtube.com/watch?v=Q4JaXVELZx4&list=PLTC8awFvBUmMUZLjKkvoz0qyVzIl-cDf8&index=9" },
        { "title": "Exporting and Saving Your Artwork", "url": "https://www.youtube.com/watch?v=Q4JaXVELZx4&list=PLTC8awFvBUmMUZLjKkvoz0qyVzIl-cDf8&index=10" }
      ]
    }
    
  ]
  
  const dataScience = [
    {
      "id": 1,
      "title": "Introduction to Data Science",
      "type": "free",
      "description": "Learn the basics of data science and analytics.",
      "price": 0.00,
      "image": "https://tse4.mm.bing.net/th?id=OIP.EZtIWLspw0anVgHATWsUbwHaEM&pid=Api&P=0&h=180",
      "video_links": [
        { "title": "Introduction to Data Science - Part 1", "url": "https://www.youtube.com/watch?v=eaFaD_IBYW4&list=PLeo1K3hjS3us_ELKYSj_Fth2tIEkdKXvV&index=2" },
        { "title": "Data Science Fundamentals", "url": "https://www.youtube.com/watch?v=eaFaD_IBYW4&list=PLeo1K3hjS3us_ELKYSj_Fth2tIEkdKXvV&index=3" },
        { "title": "Data Analysis Techniques", "url": "https://www.youtube.com/watch?v=eaFaD_IBYW4&list=PLeo1K3hjS3us_ELKYSj_Fth2tIEkdKXvV&index=4" },
        { "title": "Data Visualization Basics", "url": "https://www.youtube.com/watch?v=eaFaD_IBYW4&list=PLeo1K3hjS3us_ELKYSj_Fth2tIEkdKXvV&index=5" },
        { "title": "Machine Learning Overview", "url": "https://www.youtube.com/watch?v=eaFaD_IBYW4&list=PLeo1K3hjS3us_ELKYSj_Fth2tIEkdKXvV&index=6" },
        { "title": "Statistical Analysis for Data Science", "url": "https://www.youtube.com/watch?v=eaFaD_IBYW4&list=PLeo1K3hjS3us_ELKYSj_Fth2tIEkdKXvV&index=7" },
        { "title": "Data Mining Techniques", "url": "https://www.youtube.com/watch?v=eaFaD_IBYW4&list=PLeo1K3hjS3us_ELKYSj_Fth2tIEkdKXvV&index=8" },
        { "title": "Big Data and Cloud Computing", "url": "https://www.youtube.com/watch?v=eaFaD_IBYW4&list=PLeo1K3hjS3us_ELKYSj_Fth2tIEkdKXvV&index=9" },
        { "title": "Data Science Project Lifecycle", "url": "https://www.youtube.com/watch?v=eaFaD_IBYW4&list=PLeo1K3hjS3us_ELKYSj_Fth2tIEkdKXvV&index=10" },
        { "title": "Career Paths in Data Science", "url": "https://www.youtube.com/watch?v=eaFaD_IBYW4&list=PLeo1K3hjS3us_ELKYSj_Fth2tIEkdKXvV&index=11" }
      ]
    },
    {
      "id": 2,
      "title": "Data Visualization with Python",
      "type": "free",
      "description": "Learn how to visualize data using Python libraries.",
      "price": 0.00,
      "image": "https://tse3.mm.bing.net/th?id=OIP.aMMiqtF0-RM6etLMZfbwRgHaES&pid=Api&P=0&h=180",
      "video_links": [
        { "title": "Introduction to Data Visualization", "url": "https://www.youtube.com/watch?v=Ca-jniIPpsM&list=PLZ2ps__7DhBZ12NClTmMLsnU0mF9ZUSG_&index=2" },
        { "title": "Matplotlib Tutorial", "url": "https://www.youtube.com/watch?v=Ca-jniIPpsM&list=PLZ2ps__7DhBZ12NClTmMLsnU0mF9ZUSG_&index=3" },
        { "title": "Seaborn for Statistical Plots", "url": "https://www.youtube.com/watch?v=Ca-jniIPpsM&list=PLZ2ps__7DhBZ12NClTmMLsnU0mF9ZUSG_&index=4" },
        { "title": "Interactive Plots with Plotly", "url": "https://www.youtube.com/watch?v=Ca-jniIPpsM&list=PLZ2ps__7DhBZ12NClTmMLsnU0mF9ZUSG_&index=5" },
        { "title": "Creating Effective Charts and Graphs", "url": "https://www.youtube.com/watch?v=Ca-jniIPpsM&list=PLZ2ps__7DhBZ12NClTmMLsnU0mF9ZUSG_&index=6" },
        { "title": "Data Storytelling with Visualizations", "url": "https://www.youtube.com/watch?v=Ca-jniIPpsM&list=PLZ2ps__7DhBZ12NClTmMLsnU0mF9ZUSG_&index=7" },
        { "title": "Customizing Plots in Python", "url": "https://www.youtube.com/watch?v=Ca-jniIPpsM&list=PLZ2ps__7DhBZ12NClTmMLsnU0mF9ZUSG_&index=8" },
        { "title": "Working with Different Data Formats", "url": "https://www.youtube.com/watch?v=Ca-jniIPpsM&list=PLZ2ps__7DhBZ12NClTmMLsnU0mF9ZUSG_&index=9" },
        { "title": "Advanced Visualization Techniques", "url": "https://www.youtube.com/watch?v=Ca-jniIPpsM&list=PLZ2ps__7DhBZ12NClTmMLsnU0mF9ZUSG_&index=10" },
        { "title": "Data Visualization Best Practices", "url": "https://www.youtube.com/watch?v=Ca-jniIPpsM&list=PLZ2ps__7DhBZ12NClTmMLsnU0mF9ZUSG_&index=11" }
      ]
    },
    {
      "id": 3,
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
      "id": 4,
      "title": "Advanced Machine Learning with Python",
      "type": "premium",
      "description": "Dive deep into machine learning with Python.",
      "price": 79.99,
      "image": "https://tse4.mm.bing.net/th?id=OIP.dvWnEZMHpvDHcBTiliPhnwHaEB&pid=Api&P=0&h=180",
      "video_links": [
        { "title": "Introduction to Advanced Machine Learning", "url": "https://www.youtube.com/watch?v=ukzFI9rgwfU&list=PLEiEAq2VkUULYYgj13YHUWmRePqiu8Ddy&index=1" },
        { "title": "Data Preprocessing for Machine Learning", "url": "https://www.youtube.com/watch?v=ukzFI9rgwfU&list=PLEiEAq2VkUULYYgj13YHUWmRePqiu8Ddy&index=2" },
        { "title": "Supervised Learning Models", "url": "https://www.youtube.com/watch?v=ukzFI9rgwfU&list=PLEiEAq2VkUULYYgj13YHUWmRePqiu8Ddy&index=3" },
        { "title": "Unsupervised Learning and Clustering", "url": "https://www.youtube.com/watch?v=ukzFI9rgwfU&list=PLEiEAq2VkUULYYgj13YHUWmRePqiu8Ddy&index=4" },
        { "title": "Deep Learning Techniques", "url": "https://www.youtube.com/watch?v=ukzFI9rgwfU&list=PLEiEAq2VkUULYYgj13YHUWmRePqiu8Ddy&index=5" },
        { "title": "Model Evaluation and Hyperparameter Tuning", "url": "https://www.youtube.com/watch?v=ukzFI9rgwfU&list=PLEiEAq2VkUULYYgj13YHUWmRePqiu8Ddy&index=6" },
        { "title": "Advanced Neural Networks", "url": "https://www.youtube.com/watch?v=ukzFI9rgwfU&list=PLEiEAq2VkUULYYgj13YHUWmRePqiu8Ddy&index=7" },
        { "title": "Machine Learning with TensorFlow", "url": "https://www.youtube.com/watch?v=ukzFI9rgwfU&list=PLEiEAq2VkUULYYgj13YHUWmRePqiu8Ddy&index=8" },
        { "title": "Working with Big Data in Machine Learning", "url": "https://www.youtube.com/watch?v=ukzFI9rgwfU&list=PLEiEAq2VkUULYYgj13YHUWmRePqiu8Ddy&index=9" },
        { "title": "Building Real-World Machine Learning Projects", "url": "https://www.youtube.com/watch?v=ukzFI9rgwfU&list=PLEiEAq2VkUULYYgj13YHUWmRePqiu8Ddy&index=10" }
      ]
    },
    {
      "id": 5,
      "title": "Deep Learning with TensorFlow",
      "type": "premium",
      "description": "Learn deep learning with TensorFlow framework.",
      "price": 89.99,
      "image": "https://tse1.mm.bing.net/th?id=OIP.7jxo3wwLyZo0wy7P-cA5JwHaEK&pid=Api&P=0&h=180",
      "video_links": [
        { "title": "Introduction to TensorFlow", "url": "https://www.youtube.com/watch?v=6M5VXKLf4D4&list=PLEiEAq2VkUUIYQ-mMRAGilfOKyWKpHSip&index=1" },
        { "title": "TensorFlow Setup and Basics", "url": "https://www.youtube.com/watch?v=6M5VXKLf4D4&list=PLEiEAq2VkUUIYQ-mMRAGilfOKyWKpHSip&index=2" },
        { "title": "Building Neural Networks in TensorFlow", "url": "https://www.youtube.com/watch?v=6M5VXKLf4D4&list=PLEiEAq2VkUUIYQ-mMRAGilfOKyWKpHSip&index=3" },
        { "title": "Training Models with TensorFlow", "url": "https://www.youtube.com/watch?v=6M5VXKLf4D4&list=PLEiEAq2VkUUIYQ-mMRAGilfOKyWKpHSip&index=4" },
        { "title": "Convolutional Neural Networks in TensorFlow", "url": "https://www.youtube.com/watch?v=6M5VXKLf4D4&list=PLEiEAq2VkUUIYQ-mMRAGilfOKyWKpHSip&index=5" },
        { "title": "Advanced Deep Learning Techniques", "url": "https://www.youtube.com/watch?v=6M5VXKLf4D4&list=PLEiEAq2VkUUIYQ-mMRAGilfOKyWKpHSip&index=6" },
        { "title": "TensorFlow for NLP and Computer Vision", "url": "https://www.youtube.com/watch?v=6M5VXKLf4D4&list=PLEiEAq2VkUUIYQ-mMRAGilfOKyWKpHSip&index=7" },
        { "title": "Working with Large Datasets in TensorFlow", "url": "https://www.youtube.com/watch?v=6M5VXKLf4D4&list=PLEiEAq2VkUUIYQ-mMRAGilfOKyWKpHSip&index=8" },
        { "title": "Optimizing Models for Performance", "url": "https://www.youtube.com/watch?v=6M5VXKLf4D4&list=PLEiEAq2VkUUIYQ-mMRAGilfOKyWKpHSip&index=9" },
        { "title": "Deploying Deep Learning Models", "url": "https://www.youtube.com/watch?v=6M5VXKLf4D4&list=PLEiEAq2VkUUIYQ-mMRAGilfOKyWKpHSip&index=10" },
        { "title": "TensorFlow Best Practices", "url": "https://www.youtube.com/watch?v=6M5VXKLf4D4&list=PLEiEAq2VkUUIYQ-mMRAGilfOKyWKpHSip&index=11" }
      ]
    }  
  ]
  const It=  [
    {
      "id": 1,
      "title": "HTML Course",
      "type": "free",
      "description": "Learn the basics of HTML with hands on experience!!",
      "price": 0.0,
      "image": "https://miro.medium.com/v2/resize:fit:952/1*NhrDO5wY9Ea_HjnnWcmJbw.png",
      "video_links": [
        { "title": "HTML Introduction", "url": "https://www.youtube.com/watch?v=UB1O30fR-EE" },
        { "title": "HTML Basics - Introduction to HTML", "url": "https://www.youtube.com/watch?v=pQN-pnXPaVg" },
        { "title": "HTML for Beginners", "url": "https://www.youtube.com/watch?v=DPnqb74Smug" },
        { "title": "HTML5 Tutorial for Beginners", "url": "https://www.youtube.com/watch?v=G3e-cpL7ofc" },
        { "title": "HTML Forms and Inputs", "url": "https://www.youtube.com/watch?v=88PXJAA6szs" },
        { "title": "Creating Links and Images in HTML", "url": "https://www.youtube.com/watch?v=qz0aGYrrlhU" },
        { "title": "HTML5 Features Explained", "url": "https://www.youtube.com/watch?v=kUMe1FH4CHE" },
        { "title": "HTML Tables and Lists", "url": "https://www.youtube.com/watch?v=oxjJ6cMrD1c" },
        { "title": "HTML5 Semantic Elements", "url": "https://www.youtube.com/watch?v=3LgJpkx-hz0" },
        { "title": "Advanced HTML Tips and Tricks", "url": "https://www.youtube.com/watch?v=nwa1aZlTzcg" }
      ]
    },    
    {
      "id": 2,
      "title": "CSS Course",
      "type": "free",
      "description": "Learn how to style websites using CSS.",
      "price": 0.0,
      "image": "https://tse2.mm.bing.net/th?id=OIP.psUMNRQC6-K_XFEnUMJo3AHaEK&pid=Api&P=0&h=180",
      "video_links": [
        { "title": "Introduction to CSS", "url": "https://www.youtube.com/watch?v=yfoY53QXEnI" },
        { "title": "CSS Selectors and Specificity", "url": "https://www.youtube.com/watch?v=1Rs2ND1ryYc" },
        { "title": "CSS Layout: Flexbox", "url": "https://www.youtube.com/watch?v=HcOc7P5BMi4" },
        { "title": "CSS Grid Tutorial", "url": "https://www.youtube.com/watch?v=s7ONvIgOWdM" },
        { "title": "Responsive Design with CSS", "url": "https://www.youtube.com/watch?v=3T_Jy1CqH9U" },
        { "title": "CSS Transitions and Animations", "url": "https://www.youtube.com/watch?v=ieTHC78giGQ" },
        { "title": "Styling Forms with CSS", "url": "https://www.youtube.com/watch?v=0afZj1G0BIE" },
        { "title": "CSS Variables and Custom Properties", "url": "https://www.youtube.com/watch?v=lOeQUwdAjE0" },
        { "title": "Best Practices in CSS", "url": "https://www.youtube.com/watch?v=Edsxf_NBFrw" },
        { "title": "Advanced CSS Techniques", "url": "https://www.youtube.com/watch?v=uBXTQx5CtRA" }
      ]
    },    
    {
      "id": 3,
      "title": "Web Development Bootcamp",
      "type": "premium",
      "description": "Learn to build websites using HTML, CSS, and JavaScript.",
      "price": 49.99,
      "image": "https://tse1.mm.bing.net/th?id=OIP.uf8a4yylbfUOSgWvCjn4PAHaDF&pid=Api&P=0&h=180",
      "video_links": [
        { "title": "Introduction to Web Development", "url": "https://www.youtube.com/watch?v=jBzwzrDvZ18" },
        { "title": "HTML Crash Course", "url": "https://www.youtube.com/watch?v=3JluqTojuME" },
        { "title": "CSS Basics", "url": "https://www.youtube.com/watch?v=PkZNo7MFNFg" },
        { "title": "JavaScript Tutorial", "url": "https://www.youtube.com/watch?v=UB1O30fR-EE" },
        { "title": "Responsive Design with CSS", "url": "https://www.youtube.com/watch?v=yfoY53QXEnI" },
        { "title": "DOM Manipulation with JavaScript", "url": "https://www.youtube.com/watch?v=w7ejDZ8SWv8" },
        { "title": "Building a Website with HTML and CSS", "url": "https://www.youtube.com/watch?v=sBws8MSXN7A" },
        { "title": "JavaScript Functions and Events", "url": "https://www.youtube.com/watch?v=4UZrsTqkcW4" },
        { "title": "Making Your Site Interactive with JavaScript", "url": "https://www.youtube.com/watch?v=3tCm-l2A8gE" },
        { "title": "Deploying Your Website", "url": "https://www.youtube.com/watch?v=rfscVS0vtbw" }
      ]
    },    
    {
      "id": 4,
      "title": "C++",
      "type": "premium",
      "description": "Learn the C++ programming language.",
      "price": 34.99,
      "image": "https://www.simplilearn.com/ice9/free_resources_article_thumb/What_is_CPP.jpg",
      "video_links": [
        { "title": "Introduction to C++ Programming", "url": "https://www.youtube.com/watch?v=vLnPwxZdW4Y" },
        { "title": "Setting Up C++ Environment", "url": "https://www.youtube.com/watch?v=Rub-JsjMhWY" },
        { "title": "Basic Syntax and Structure in C++", "url": "https://www.youtube.com/watch?v=1v_4dL9uX7A" },
        { "title": "Functions in C++", "url": "https://www.youtube.com/watch?v=mUQZ1qmKlLY" },
        { "title": "C++ Data Types and Variables", "url": "https://www.youtube.com/watch?v=yGB9jhsEsr8" },
        { "title": "Control Flow in C++", "url": "https://www.youtube.com/watch?v=4bYgqGuLfD4" },
        { "title": "Arrays and Strings in C++", "url": "https://www.youtube.com/watch?v=bzQ0LgaFL_4" },
        { "title": "Object-Oriented Programming in C++", "url": "https://www.youtube.com/watch?v=fogqSOcZQkI" },
        { "title": "Advanced C++ Concepts", "url": "https://www.youtube.com/watch?v=ztHM_o4NO-Q" },
        { "title": "Error Handling and Debugging in C++", "url": "https://www.youtube.com/watch?v=o4LsdN8KXO0" }
      ]
    },
    {
      "id": 5,
      "title": "Python Course",
      "type": "premium",
      "description": "Learn Python programming from basic to advanced.",
      "price": 34.99,
      "image": "https://tse4.mm.bing.net/th?id=OIP.4kSdlOKEQqdYroo_Bdg_dAHaEK&pid=Api&P=0&h=180",
      "video_links": [
        { "title": "Python Programming for Beginners", "url": "https://www.youtube.com/watch?v=rfscVS0vtbw" },
        { "title": "Variables and Data Types in Python", "url": "https://www.youtube.com/watch?v=H1elmMBnykA" },
        { "title": "Control Flow in Python", "url": "https://www.youtube.com/watch?v=VAcKlsfM3Kk" },
        { "title": "Functions in Python", "url": "https://www.youtube.com/watch?v=YYXdXT2l-Gg" },
        { "title": "Working with Lists and Tuples", "url": "https://www.youtube.com/watch?v=5f44B9NNZ9w" },
        { "title": "Dictionaries and Sets in Python", "url": "https://www.youtube.com/watch?v=0d5lApCbb4A" },
        { "title": "Object-Oriented Programming in Python", "url": "https://www.youtube.com/watch?v=AnDmw6F7tYo" },
        { "title": "Error Handling and Exceptions", "url": "https://www.youtube.com/watch?v=V60u5JtXlDw" },
        { "title": "Working with Files in Python", "url": "https://www.youtube.com/watch?v=KB9kVhOVNKo" },
        { "title": "Advanced Python Concepts", "url": "https://www.youtube.com/watch?v=J7dO2NKPj7I" }
      ]
    },    
    {
      "id": 6,
      "title": "Azure Course",
      "type": "premium",
      "description": "Learn Microsoft Azure cloud services.",
      "price": 44.99,
      "image": "https://dce0qyjkutl4h.cloudfront.net/wp-content/uploads/2022/09/Microsoft-azure-cloud-migration.jpg",
      "video_links": [
        { "title": "Introduction to Microsoft Azure", "url": "https://www.youtube.com/watch?v=22zZXp6JfB4" },
        { "title": "Azure Core Services Overview", "url": "https://www.youtube.com/watch?v=aFkmfcmN6Mw" },
        { "title": "Setting up an Azure Account", "url": "https://www.youtube.com/watch?v=U3X8s_YR9E4" },
        { "title": "Creating Virtual Machines in Azure", "url": "https://www.youtube.com/watch?v=3ybsuQftIh0" },
        { "title": "Managing Azure Storage", "url": "https://www.youtube.com/watch?v=msJ9dH5PTb8" },
        { "title": "Azure Networking Basics", "url": "https://www.youtube.com/watch?v=8m02mUq6ZT4" },
        { "title": "Using Azure Active Directory", "url": "https://www.youtube.com/watch?v=1JmGTzj8nmE" },
        { "title": "Deploying Applications to Azure", "url": "https://www.youtube.com/watch?v=2fAq7xsL9n0" },
        { "title": "Azure Monitoring and Management", "url": "https://www.youtube.com/watch?v=j5p1qgI-SyM" },
        { "title": "Azure Security Best Practices", "url": "https://www.youtube.com/watch?v=ZKzgLw3Zl5o" }
      ]
    },    
    {
      "id": 7,
      "title": "C# Course",
      "type": "free",
      "description": "Learn C# programming from beginner to advanced.",
      "price": 0.0,
      "image": "https://tse2.mm.bing.net/th?id=OIP.TlyeYC31BoaaRXgdAbNcqAHaEo&pid=Api&P=0&h=180",
      "video_links": [
        { "title": "Introduction to C# Programming", "url": "https://www.youtube.com/watch?v=GhQdlIFylQ8" },
        { "title": "C# Basics: Variables and Data Types", "url": "https://www.youtube.com/watch?v=0paVJ27fF4o" },
        { "title": "Control Flow in C#", "url": "https://www.youtube.com/watch?v=2oTSGs6XvsQ" },
        { "title": "Working with Methods in C#", "url": "https://www.youtube.com/watch?v=CYc9VlaeMG8" },
        { "title": "C# Object-Oriented Programming (OOP)", "url": "https://www.youtube.com/watch?v=8kXkpcCpHmM" },
        { "title": "Exception Handling in C#", "url": "https://www.youtube.com/watch?v=GFfhvOdaBaE" },
        { "title": "Collections and Arrays in C#", "url": "https://www.youtube.com/watch?v=vINi3dLMaj8" },
        { "title": "LINQ in C#", "url": "https://www.youtube.com/watch?v=d5Tmcz5U7YA" },
        { "title": "Advanced C# Concepts", "url": "https://www.youtube.com/watch?v=-vMtbHT6oQY" },
        { "title": "C# Best Practices and Tips", "url": "https://www.youtube.com/watch?v=FHHrZ-rgFJs" }
      ]
    },    
    {
      "id": 8,
      "title": "PHP Course",
      "type": "premium",
      "description": "Learn PHP for web development with hands on experience !!",
      "price": 34.99,
      "image": "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
      "video_links": [
        { "title": "Introduction to PHP", "url": "https://www.youtube.com/watch?v=OK_JCtrrv-c" },
        { "title": "Setting Up Your PHP Development Environment", "url": "https://www.youtube.com/watch?v=7TLfD0rRjK4" },
        { "title": "PHP Syntax and Variables", "url": "https://www.youtube.com/watch?v=0LwntkD9gO0" },
        { "title": "Working with Functions in PHP", "url": "https://www.youtube.com/watch?v=2pMxV6GxfEc" },
        { "title": "Control Structures in PHP", "url": "https://www.youtube.com/watch?v=e3Fiqfzxb58" },
        { "title": "Arrays and Loops in PHP", "url": "https://www.youtube.com/watch?v=GTV-cI3bYlM" },
        { "title": "Object-Oriented Programming in PHP", "url": "https://www.youtube.com/watch?v=le1bFrwL91w" },
        { "title": "PHP and MySQL Integration", "url": "https://www.youtube.com/watch?v=XN2umBG8r_A" },
        { "title": "Debugging PHP Code", "url": "https://www.youtube.com/watch?v=5e5BRhmgwnY" },
        { "title": "Building a PHP Web Application", "url": "https://www.youtube.com/watch?v=a5j-2lVr6FY" }
      ]
    },
    {
      "id": 9,
      "title": "React Course",
      "type": "premium",
      "description": "Learn to build user interfaces with React.",
      "price": 39.99,
      "image": "https://tse2.mm.bing.net/th?id=OIP.kCO0xLdUeD10Vio6fF4k8AHaEo&pid=Api&P=0&h=180",
      "video_links": [
        { "title": "React JS Tutorial for Beginners", "url": "https://www.youtube.com/watch?v=Ke90Tje7VS0" },
        { "title": "React JS Crash Course", "url": "https://www.youtube.com/watch?v=w7ejDZ8SWv8" },
        { "title": "React for Beginners", "url": "https://www.youtube.com/watch?v=bMknfKXIFA8" },
        { "title": "React JS Fundamentals", "url": "https://www.youtube.com/watch?v=4UZrsTqkcW4" },
        { "title": "Building React Applications", "url": "https://www.youtube.com/watch?v=QFaFIcGhPoM" },
        { "title": "React Router Tutorial", "url": "https://www.youtube.com/watch?v=SqcY0GlETPk" },
        { "title": "State and Props in React", "url": "https://www.youtube.com/watch?v=nTeuhbP7wdE" },
        { "title": "React Component Life Cycle", "url": "https://www.youtube.com/watch?v=mnqNAF3c8AE" },
        { "title": "Working with React Hooks", "url": "https://www.youtube.com/watch?v=99WjItEQlB8" },
        { "title": "Advanced React Concepts", "url": "https://www.youtube.com/watch?v=f55qeKGgB_M" }
      ]
    },
    {
      "id": 10,
      "title": "SQL Course",
      "type": "premium",
      "description": "Learn to manage databases using SQL.",
      "price": 34.99,
      "image": "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png",
      "video_links": [
        { "title": "Introduction to SQL", "url": "https://www.youtube.com/watch?v=HXV3zeQKqGY" },
        { "title": "SQL Basics Tutorial", "url": "https://www.youtube.com/watch?v=7S_tz1z_5bA" },
        { "title": "Understanding SQL Queries", "url": "https://www.youtube.com/watch?v=6ddjP1Twjho" },
        { "title": "SQL Joins Explained", "url": "https://www.youtube.com/watch?v=9HIdZhxuGyw" },
        { "title": "SQL Subqueries Tutorial", "url": "https://www.youtube.com/watch?v=guCyB9TmL38" },
        { "title": "Working with SQL Databases", "url": "https://www.youtube.com/watch?v=9PJWHg5kDdQ" },
        { "title": "SQL Aggregate Functions", "url": "https://www.youtube.com/watch?v=T0zSGcZu6vA" },
        { "title": "Advanced SQL Queries", "url": "https://www.youtube.com/watch?v=OOjV7QwDd1Q" },
        { "title": "SQL Optimization Techniques", "url": "https://www.youtube.com/watch?v=ktvUTjTBJbs" },
        { "title": "Final Project: SQL Database Management", "url": "https://www.youtube.com/watch?v=9ytT2_xHpxI" }
      ]
    },  
    {
      "id": 11,
      "title": "Java Course",
      "type": "premium",
      "description": "Learn Java programming from basics to advanced.",
      "price": 39.99,
      "image": "https://static.vecteezy.com/system/resources/previews/022/100/686/original/java-logo-transparent-free-png.png",
      "video_links": [
        { "title": "Introduction to Java Programming", "url": "https://www.youtube.com/watch?v=grEKMHGY9YY" },
        { "title": "Setting Up Your Java Development Environment", "url": "https://www.youtube.com/watch?v=GoXwIVyNvX0" },
        { "title": "Java Variables and Data Types", "url": "https://www.youtube.com/watch?v=8cm1x4bC610" },
        { "title": "Java Control Flow Statements", "url": "https://www.youtube.com/watch?v=kz9vH7XBdpE" },
        { "title": "Working with Loops in Java", "url": "https://www.youtube.com/watch?v=TBwx9fyqf9I" },
        { "title": "Java Methods and Functions", "url": "https://www.youtube.com/watch?v=xk4zADywHjY" },
        { "title": "Object-Oriented Programming in Java", "url": "https://www.youtube.com/watch?v=R-MYY9I1hzc" },
        { "title": "Java Arrays and Collections", "url": "https://www.youtube.com/watch?v=s9wW2Pp6wY8" },
        { "title": "Advanced Java Concepts", "url": "https://www.youtube.com/watch?v=grEKMHGY9YY" },
        { "title": "Java Exception Handling", "url": "https://www.youtube.com/watch?v=p8LRv1D7h8M" }
      ]
    },
    {
      "id": 12,
      "title": "AWS Course",
      "type": "premium",
      "description": "Learn Amazon Web Services (AWS) for cloud computing.",
      "price": 49.99,
      "image": "https://kemsys.com/wp-content/uploads/2021/07/AWS-IoT-Connecting-enterprise-devices-Digitalization-Kemsys.png",
      "video_links": [
        { "title": "Introduction to AWS", "url": "https://www.youtube.com/watch?v=Ia-UEYYR44s" },
        { "title": "Getting Started with AWS Cloud", "url": "https://www.youtube.com/watch?v=3hBmIu4iydY" },
        { "title": "AWS EC2 Overview", "url": "https://www.youtube.com/watch?v=AnYf0V1-ByA" },
        { "title": "Setting up AWS S3", "url": "https://www.youtube.com/watch?v=AiX9w5kUE-8" },
        { "title": "AWS IAM and User Management", "url": "https://www.youtube.com/watch?v=dTF4XHJSI4w" },
        { "title": "AWS Lambda: Serverless Computing", "url": "https://www.youtube.com/watch?v=v_7bTBRq6A0" },
        { "title": "Working with AWS RDS", "url": "https://www.youtube.com/watch?v=J3gIu96q03k" },
        { "title": "AWS VPC and Networking", "url": "https://www.youtube.com/watch?v=2RuB2j8WVeI" },
        { "title": "Deploying Apps on AWS", "url": "https://www.youtube.com/watch?v=Jrbge5HnJYo" },
        { "title": "Advanced AWS Services", "url": "https://www.youtube.com/watch?v=sxxFg9fbQHc" }
      ]
    },
    {
      "id": 13,
      "title": "Node.js Course",
      "type": "premium",
      "description": "Learn to build web applications with Node.js.",
      "price": 34.99,
      "image": "https://www.mattgoldspink.co.uk/wp-content/uploads/2016/08/nodejs-1024x768.png",
      "video_links": [
        { "title": "Introduction to Node.js", "url": "https://www.youtube.com/watch?v=RLpIq3dlOb4" },
        { "title": "Setting Up Node.js", "url": "https://www.youtube.com/watch?v=TlB_eWDSMt4" },
        { "title": "Building Your First Node.js App", "url": "https://www.youtube.com/watch?v=O1Ro5GVc-O8" },
        { "title": "Understanding npm (Node Package Manager)", "url": "https://www.youtube.com/watch?v=nKIu9K6F6uA" },
        { "title": "Creating RESTful APIs with Node.js", "url": "https://www.youtube.com/watch?v=8z7dXQ_7Lxg" },
        { "title": "Working with Express.js", "url": "https://www.youtube.com/watch?v=10SMcxbr3Qo" },
        { "title": "Handling Asynchronous Code", "url": "https://www.youtube.com/watch?v=RZSOwJoGQDQ" },
        { "title": "Connecting to a Database with Node.js", "url": "https://www.youtube.com/watch?v=1VZIEfbC_5k" },
        { "title": "Authentication and Authorization in Node.js", "url": "https://www.youtube.com/watch?v=nA1tbzIvi1s" },
        { "title": "Deploying Your Node.js Application", "url": "https://www.youtube.com/watch?v=02QOMR49dh0" }
      ]
    },
    {
      "id": 14,
      "title": "Angular Course",
      "type": "premium",
      "description": "Learn Angular framework for building dynamic web applications.",
      "price": 49.99,
      "image": "https://www.devopsschool.com/blog/wp-content/uploads/2023/12/image-15-1024x576.png",
      "video_links": [
        { "title": "Introduction to Angular", "url": "https://www.youtube.com/watch?v=htPYk6QxacQ" },
        { "title": "Setting Up Angular Environment", "url": "https://www.youtube.com/watch?v=3qBXWUpoPHo" },
        { "title": "Understanding Angular Components", "url": "https://www.youtube.com/watch?v=htH7KGRN9V4" },
        { "title": "Building Angular Modules", "url": "https://www.youtube.com/watch?v=x0V-V9avco8" },
        { "title": "Routing and Navigation in Angular", "url": "https://www.youtube.com/watch?v=GgVHTY64ke0" },
        { "title": "Forms in Angular", "url": "https://www.youtube.com/watch?v=ZmP7J5itvYg" },
        { "title": "Using Angular Services", "url": "https://www.youtube.com/watch?v=KzQI3VEXZJw" },
        { "title": "Angular Observables and RxJS", "url": "https://www.youtube.com/watch?v=1PkcM1zGc9g" },
        { "title": "Testing in Angular", "url": "https://www.youtube.com/watch?v=0LqqQYs7bt0" },
        { "title": "Deploying Angular Application", "url": "https://www.youtube.com/watch?v=Fd5jL8fFE5k" }
      ]
    }
]
  let  postForm=document.getElementById("Pbtn");
postForm.addEventListener("click",async(e)=>{
  e.preventDefault()

 
   await set(ref(database,"admin/courses"),{
    DataScience:dataScience,
    Designing:designing ,
    It:It
   }).then(()=>{
    alert("job posted successfully")
   })
 
})