const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      } else {
        entry.target.classList.remove("active"); 
        // remove this line if you DON'T want it to disappear again
      }
    });
  },
  {
    threshold: 0.2
  }
);

reveals.forEach((el) => observer.observe(el));
