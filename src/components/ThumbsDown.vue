<template>
    <div v-if="show" class="thumbs-up-container">
      <div class="thumbs-up-message">
        <i class="bi bi-hand-thumbs-down-fill"></i>
        <span>{{ title }}</span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ThumbsUpAnimation",
    props: {
      show: {
        type: Boolean,
        default: false,
      },
      title:{
        type:String
      }
    },
  };
  </script>
  
  <style scoped>
  .thumbs-up-container {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 1rem 2rem;
    border-radius: 10px;
    z-index: 1000;
    color: white;
    animation: fadeInOut 1.5s ease-in-out forwards;
  }
  
  .thumbs-up-message {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  .thumbs-up-message i {
    font-size: 2.5rem;
    color: #FF4C4C
  }
  
  .thumbs-up-message span {
    font-size: 1.5rem;
    color: #fff;
  }
  
  @keyframes fadeInOut {
    0% {
      opacity: 0;
      transform: translate(-50%, -60%);
    }
    10% {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
    90% {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
    100% {
      opacity: 0;
      transform: translate(-50%, -60%);
    }
  }
  </style>
  