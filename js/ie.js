    // 별 생성
    function createStars() {
      const starsContainer = document.getElementById('stars');
      for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        starsContainer.appendChild(star);
      }
    }

    // 시간대별 메시지
    const timeMessages = [
      { time: 'Dawn · 06:00', greeting: 'Good Morning!!' },
      { time: 'Morning · 09:00', greeting: 'Have a Great Day!!' },
      { time: 'Afternoon · 15:00', greeting: 'Enjoy Your Day!!' },
      { time: 'Evening · 18:00', greeting: 'Good Evening!!' }
    ];

    let currentTimeIndex = 0;
    const timeDisplay = document.getElementById('timeDisplay');
    const greeting = document.getElementById('greeting');

    // 시간 업데이트
    function updateTime() {
      const current = timeMessages[currentTimeIndex];
      timeDisplay.textContent = current.time;
      greeting.textContent = current.greeting;
      currentTimeIndex = (currentTimeIndex + 1) % timeMessages.length;
    }

    // 5초마다 시간 변경
    setInterval(updateTime, 5000);

    // 컨트롤 기능
    let isPaused = false;
    let currentSpeed = 1;

    const pauseBtn = document.getElementById('pauseBtn');
    const speedBtn = document.getElementById('speedBtn');
    const resetBtn = document.getElementById('resetBtn');

    pauseBtn.addEventListener('click', () => {
      isPaused = !isPaused;
      document.body.style.animationPlayState = isPaused ? 'paused' : 'running';
      document.querySelectorAll('*').forEach(el => {
        el.style.animationPlayState = isPaused ? 'paused' : 'running';
      });
      pauseBtn.textContent = isPaused ? '▶ Play' : '⏸ Pause';
    });

    speedBtn.addEventListener('click', () => {
      currentSpeed = currentSpeed === 1 ? 2 : currentSpeed === 2 ? 0.5 : 1;
      document.querySelectorAll('*').forEach(el => {
        const duration = window.getComputedStyle(el).animationDuration;
        if (duration !== '0s') {
          const baseTime = parseFloat(duration);
          el.style.animationDuration = (baseTime / currentSpeed) + 's';
        }
      });
      speedBtn.textContent = currentSpeed === 2 ? '⚡ 2x Speed' : currentSpeed === 0.5 ? '🐌 0.5x Speed' : '⚡ Speed Up';
    });

    resetBtn.addEventListener('click', () => {
      location.reload();
    });

    // 이미지 로딩 완료 후 로딩 화면 제거
    window.addEventListener('load', () => {
      document.getElementById('loading').classList.add('hidden');
      createStars();
    });

    // 키보드 단축키
    document.addEventListener('keydown', (e) => {
      if (e.code === 'Space') {
        e.preventDefault();
        pauseBtn.click();
      } else if (e.code === 'KeyS') {
        speedBtn.click();
      } else if (e.code === 'KeyR') {
        resetBtn.click();
      }
    });