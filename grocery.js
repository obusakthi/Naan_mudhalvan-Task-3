const firebaseConfig = {
  apiKey: "AIzaSyDl40N-wzby02u9mqKY53sNiWHHZIj3UQE",
  authDomain: "cb5-2-1fbf4.firebaseapp.com",
  projectId: "cb5-2-1fbf4",
  storageBucket: "cb5-2-1fbf4.appspot.com",
  messagingSenderId: "15767858426",
  appId: "1:15767858426:web:84adac8b7f399e6cafed43",
  measurementId: "G-T7K0S2M3QT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

	
  // Fetch data from Firestore
const fetchData = async (documentId) => {
  try {
    const docRef = doc(db, "tasks", documentId); // Replace with your collection name
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
      const data = docSnapshot.data();
      console.log("Data:", data);
    } else {
      console.log("Document does not exist.");
    }
  } catch (error) {
    console.error("Error fetching document:", error);
  }
};

const documentId = "your-document-id"; // Replace with your document ID

fetchData(documentId);
  
  let navbar = document.querySelector('.navbar');
  document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
  }

  let searchForm = document.querySelector('.search-form');
  document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
  }

  let shoppingCart = document.querySelector('.shopping-cart');
  document.querySelector('#cart-btn').onclick = () => {
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
  }

  let loginForm = document.querySelector('.login-form');
  document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
  }

 

  window.onscroll = () => {
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
  }

var swiper = new Swiper(".product-slider", {
        loop: true,
        spaceBetween: 20,
        autoplay: {
            delay: 7500,
            disableOnInteraction: false,
        },
        centeredSlides: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1020: {
                slidesPerView: 3,
            },
        },
    });

var swiper = new Swiper(".review-slider", {
        loop: true,
        spaceBetween: 20,
        autoplay: {
            delay: 7500,
            disableOnInteraction: false,
        },
        centeredSlides: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1020: {
                slidesPerView: 3,
            },
        },
    });
