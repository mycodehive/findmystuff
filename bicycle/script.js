function contactOwner() {
    const phoneNumber = "010-8496-6990";
    
    // 재미있는 알림 메시지
    alert("연락을 시도해주셔서 감사합니다! 주인의 눈물 샘이 10% 회복되었습니다.");
    
    // 모바일에서 전화 연결
    window.location.href = `tel:${phoneNumber}`;
}

// 스크롤 시 카드가 서서히 나타나는 효과 (선택 사항)
window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.info-card, .reward');
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < window.innerHeight - 50) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
});
