import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";
import { get} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";
const firebaseConfig = {
    apiKey: "AIzaSyB5iAUnK_5AP7ijrcQvlRfvCSfXrH9n6Ak",
    authDomain: "index-16f53.firebaseapp.com",
    projectId: "index-16f53",
    storageBucket: "index-16f53.firebasestorage.app",
    messagingSenderId: "171804052014",
    appId: "1:171804052014:web:c38d9d50835d551cafadbf"
  };
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const free= [
    {
        "id": 1,
        "title": "HTML Course",
        "description": "Learn the basics of HTML.",
        "price": 29.99,
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
        "description": "Learn how to style websites using CSS.",
        "price": 29.99,
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
                "id": 10,
                "title": "Azure Course",
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
                "id": 6,
                "title": "C# Course",
                "description": "Learn C# programming from beginner to advanced.",
                "price": 39.99,
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
                "id": 7,
                "title": "PHP Course",
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
            }
    
]

const premium=[
  {
      "id": 1,
      "title": "React Course",
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
      "id": 2,
      "title": "SQL Course",
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
      "id": 3,
      "title": "Java Course",
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
      "id": 4,
      "title": "AWS Course",
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
      "id": 5,
      "title": "Node.js Course",
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
      "id": 6,
      "title": "Angular Course",
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
   free:free,
   premium:premium,
   }).then(()=>{
    alert("job posted successfully")
   })
 
})

const fetchCourses = async (database) => {
    try {
        const freeCoursesSnapshot = await get(ref(database, "admin/courses/free"));
        const premiumCoursesSnapshot = await get(ref(database, "admin/courses/premium"));

        const freeCourses = freeCoursesSnapshot.exists() ? Object.values(freeCoursesSnapshot.val()) : [];
        const premiumCourses = premiumCoursesSnapshot.exists() ? Object.values(premiumCoursesSnapshot.val()) : [];

        const allCourses = [...freeCourses, ...premiumCourses];

        console.log("Courses retrieved successfully:", allCourses);
        return allCourses;
    } catch (error) {
        console.error("Error fetching courses:", error);
        return [];
    }
};

// Display courses (unchanged)
const displayCourses = (courses) => {
    const coursesContainer = document.getElementById("courses-container");
    coursesContainer.innerHTML = "";

    courses.forEach((course) => {
        const courseElement = document.createElement("div");
        courseElement.className = "course";
        courseElement.innerHTML = `
        <div class="col-md-4 mb-4">
            <div class="card h-100">
                <img src="${course.image}" class="card-img-top img-fluid" alt="${course.title}" style="max-height: 200px; object-fit: cover;">
                <div class="card-body">
                    <h5 class="card-title">${course.title}</h5>
                    <p class="card-text">${course.description}</p>
                    <button class="btn btn-secondary mt-2" onclick="navigateToSingleCourse('${course.id}')">Play All</button>
                </div>
            </div>
        </div>
    `;
        coursesContainer.appendChild(courseElement);
    });
};

fetchCourses(database).then((courses) => {
    displayCourses(courses);
});