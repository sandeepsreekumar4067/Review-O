<template>
  <NavBar
    :user="user"
    :title="title"
    :subtitle="subtitle"
    @toggle-sidebar="setSidebarActive"
  />
  <div class="user-review-container">
    <div :class="['user-review-components', { active: isSideBarActive }]">
      <SideBar :isActive="isSideBarActive" :activeSpan="4" />
      <!-- container about app image and description -->
      <div class="app-header-container">
        <div class="app-image">
          <img :src="icon" alt="" />
        </div>
        <div class="app-description">
          <div class="app-title">
            {{ title }}
          </div>
          <div class="app-desc">
            {{ description }}
          </div>
        </div>
      </div>
      <!-- App review container -->
      <div class="app-review-section">
        <div
          class="review"
          v-for="(review, index) in restaurant_reviews.reviews"
          :key="index"
        >
          <div class="review-user-image">
            <img :src="img" alt="" />
          </div>
          <div class="review-user-details">
            <div class="review-user-name">
              {{ review.customer_name }}
            </div>
            <div class="review-user-comment">
              {{ review.review_text }}
            </div>
            <div
              :class="['reply-button', { active: review.replyActive }]"
              @click="activeReply(index)"
            >
              Reply
              <i class="bi bi-reply"></i>
            </div>
            <div :class="['review-text-area', { active: review.replyActive }]">
              <textarea
                v-model="review.ai_response"
                id=""
                :placeholder="review.placeholder"
              ></textarea>
              <div class="review-selection-container">
                <span @click="getProfessionalAiResponse(review,index)"> Professional Reply </span>
                <span @click="getCasualAiResponse(review, index)">
                  Casual Reply
                </span>
                <span @click="getFriendlyAiResponse(review, index)">
                  Friendly Reply
                </span>
                <div class="send-review-button">
                  send
                  <i class="bi bi-send"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FooterComponent />
</template>
  
<script>
import NavBar from "@/components/NavBar.vue";
import "../style/userreview.css";
import SideBar from "@/components/SideBar.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import img from "../assets/userName.svg";
export default {
  components: {
    NavBar,
    SideBar,
    FooterComponent,
  },
  props: ["title", "subtitle", "description", "icon"], // Accept props passed via router
  data() {
    return {
      user: "Sandeep",
      isSideBarActive: true,
      img: img,
      restaurant_reviews: {
        restaurant_name: "The Gourmet Spot",
        reviews: [
          {
            review_id: 1,
            customer_name: "John Doe",
            placeholder: "Your or Ai response",
            replyActive: false,
            rating: 5,
            review_text:
              "Amazing, perfectly cooked dish. Very nice plating. Everything was so fresh, light and tasty! Couldn't even tell the waffle was gluten free, the hash was a mix of root veg and the dairy free holidase did not disappoint!Also, very nice setting and emasculate bathrooms with plants and fresh cut flowers.",
            date: "2023-09-12",
            ai_response: "",
          },
          {
            review_id: 2,
            customer_name: "Jane Smith",
            rating: 5,
            replyActive: false,
            placeholder: "Your or Ai response",

            review_text:
              "What a great place.  Fantastic prices for the absolute quality you get.  I was so happy to dig into this pesto pasta.  It was so delicious that I was half finished before I thought to take a photo for the review.  The staff was extremely friendly and helpful.  There is also an impressive bakery section.",
            date: "2023-09-14",
            ai_response: "",
          },
          {
            review_id: 5,
            customer_name: "Sam Wilson",
            replyActive: false,
            placeholder: "Your or Ai response",
            rating: 3,
            review_text:
              "I had gone to Sea to Sky Gondola and I came across the Festal Cafe in Squamish. I really loved their food and a great ambience. The portion size was really good and the ingredients used looked high quality. I would highly recommend people to go there and enjoy their food.",
            date: "2023-09-18",
            ai_response: "",
          },
          {
            review_id: 4,
            replyActive: false,
            customer_name: "Emily Davis",
            rating: 5,
            placeholder: "Your or Ai response",
            review_text:
              "Best dining experience I've had in a while! The chef's special was mind-blowing. Highly recommended!",
            date: "2023-09-21",
            ai_response: "",
          },
          {
            review_id: 5,
            customer_name: "Mark Lee",
            replyActive: false,
            placeholder: "Your or Ai response",
            rating: 2,
            review_text:
              "Disappointed. The food was cold when served, and the portions were smaller than expected.",
            date: "2023-09-22",
            ai_response: "",
          },
        ],
      },
    };
  },
  methods: {
    setSidebarActive() {
      this.isSideBarActive = !this.isSideBarActive;
    },
    activeReply(index) {
      // Loop through all reviews and set `replyActive` to false
      this.restaurant_reviews.reviews.forEach((review, i) => {
        review.replyActive = i === index ? !review.replyActive : false;
      });
    },
    async getFriendlyAiResponse(review, index) {
      this.restaurant_reviews.reviews[index].placeholder =
        "Please wait as the reply is being Generated";
      fetch("http://127.0.0.1:8000/friendly_ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          restaurant_name: this.restaurant_reviews.restaurant_name,
          reviews: [
            {
              review_id: 1,
              customer_name: review.customer_name,
              rating: review.rating,
              review_text: review.review_text,
              date: review.date,
            },
          ],
        }),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            alert("Failed to connect to backend");
          }
        })
        .then((result) => {
          if (result && result.length > 0) {
            this.restaurant_reviews.reviews[index].ai_response =
              result[0].ai_response;
          }
        })
        .catch((err) => {
          alert(err);
        });
    },
    async getCasualAiResponse(review, index) {
      this.restaurant_reviews.reviews[index].placeholder =
      "Please wait as the reply is being Generated";
      fetch("http://127.0.0.1:8000/casual_ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          restaurant_name: this.restaurant_reviews.restaurant_name,
          reviews: [
            {
              review_id: 1,
              customer_name: review.customer_name,
              rating: review.rating,
              review_text: review.review_text,
              date: review.date,
            },
          ],
        }),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            alert("Failed to connect to the backend");
          }
        })
        .then((result) => {
          this.restaurant_reviews.reviews[index].ai_response =
            result[0].ai_response;
        })
        .catch((err) => {
          alert(err);
        });
    },
    async getProfessionalAiResponse(review, index) {
      this.restaurant_reviews.reviews[index].placeholder =
      "Please wait as the reply is being Generated";
      fetch("http://127.0.0.1:8000/professional_ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          restaurant_name: this.restaurant_reviews.restaurant_name,
          reviews: [
            {
              review_id: 1,
              customer_name: review.customer_name,
              rating: review.rating,
              review_text: review.review_text,
              date: review.date,
            },
          ],
        }),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            alert("Failed to connect to backend");
          }
        })
        .then((result) => {
          this.restaurant_reviews.reviews[index].ai_response =
            result[0].ai_response;
        })
        .catch((err) => {
          alert(err);
        });
    },
  },
};
</script>
  

  