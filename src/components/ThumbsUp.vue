<template>
    <div v-if="show" class="thumbs-up-animation">
      <i class="bi bi-hand-thumbs-up-fill"></i>
      <span class="user-added-text">User Added!</span>
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
    },
  };
  </script>
  
  <style scoped>
  /* CSS styles similar to the previous example */
  .thumbs-up-animation {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    gap: 10px;
    animation: thumbsUpMove 2s ease-in-out forwards;
    z-index: 2;
  }
  
  .thumbs-up-animation i {
    font-size: 2.5rem;
    color: #34a853;
    animation: bounce 0.5s ease forwards;
  }
  
  .thumbs-up-animation .user-added-text {
    font-size: 1.2rem;
    color: #34a853;
    opacity: 0;
    animation: fadeInText 0.5s 0.5s forwards;
  }
  
  @keyframes thumbsUpMove {
    0% {
      transform: translate(-50%, 50%) scale(0.5);
      opacity: 0;
    }
    30% {
      opacity: 1;
    }
    70% {
      transform: translate(-50%, -150%) scale(1.5);
    }
    100% {
      transform: translate(-50%, -200%) scale(1);
      opacity: 0;
    }
  }
  
  @keyframes bounce {
    0% {
      transform: scale(0.5);
    }
    60% {
      transform: scale(1.3);
    }
    100% {
      transform: scale(1);
    }
  }
  
  @keyframes fadeInText {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  </style>
  