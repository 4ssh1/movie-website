module.exports = {
    theme: {
      extend: {
        keyframes: {
          fadeInOut: {
            '0%': { opacity: 0 },
            '13.33%': { opacity: 1 },   // ~0.8s into 6s
            '80%': { opacity: 1 },      // stay visible till ~4.8s
            '100%': { opacity: 0 },
          },
        },
        animation: {
          'fade-text': 'fadeInOut 6s ease-in-out infinite',
        },
      },
    },
  };
  