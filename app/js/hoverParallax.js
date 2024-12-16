if (window.innerWidth >= 1200){
    const parallaxDecJS = document.querySelector('.parallaxDecJS');
    const items = document.querySelectorAll('.decJS');
    const textBox = document.querySelector('.text-box');

    // Kiểm tra sự tồn tại của các phần tử trước khi thiết lập và thêm sự kiện
    if (parallaxDecJS) {
        if (items.length > 0) {
            gsap.set(items, { x: 0, y: 0 });
        }
        if (textBox) {
            gsap.set(textBox, { x: 0, y: 0 });
        }

        parallaxDecJS.addEventListener('mousemove', (e) => {
            const rect = parallaxDecJS.getBoundingClientRect();
            const offsetX = e.clientX - rect.left;
            const offsetY = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const moveX = (centerX - offsetX) / 20;
            const moveY = (centerY - offsetY) / 20;

            items.forEach((item, index) => {
                const depth = (index + 1) / items.length;
                const translateX = moveX * depth;
                const translateY = moveY * depth;

                gsap.to(item, {
                    x: translateX,
                    y: translateY,
                    ease: "power3.out",
                    duration: 0.5
                });
            });

            if (textBox) {
                // Di chuyển text box chậm hơn một chút so với các item khác
                const textBoxDepth = 0.5; // Điều chỉnh giá trị này để thay đổi tốc độ
                const textBoxTranslateX = moveX * textBoxDepth;
                const textBoxTranslateY = moveY * textBoxDepth;

                gsap.to(textBox, {
                    x: textBoxTranslateX,
                    y: textBoxTranslateY,
                    ease: "power3.out",
                     duration: 0.5
                });
            }
        });
    }
}