"use client";

import React, { useEffect, useRef } from "react";

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // تحويل اللون الأساسي إلى HSLA
    const baseHue = 182; // Hue للون #269CA1
    const baseSaturation = 62; // Saturation للون #269CA1
    const baseLightness = 39; // Lightness للون #269CA1

    // تعيين حجم الكانفاس
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // إنشاء جزيئات متحركة بألوان متناغمة
    const particles = [];
    const particleCount = window.innerWidth < 768 ? 50 : 100;

    for (let i = 0; i < particleCount; i++) {
      // إنشاء تدرجات من اللون الأساسي
      const hueVariation = baseHue + (Math.random() * 30 - 15); // ±15 درجة
      const saturation = baseSaturation + (Math.random() * 20 - 10); // ±10%
      const lightness = baseLightness + (Math.random() * 20 - 10); // ±10%
      const alpha = Math.random() * 0.4 + 0.1; // شفافية بين 0.1 و 0.5

      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 2,
        speedY: (Math.random() - 0.5) * 2,
        color: `hsla(${hueVariation}, ${saturation}%, ${lightness}%, ${alpha})`,
      });
    }

    // دالة الرسم
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // رسم خطوط متصلة بين الجزيئات القريبة
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            // استخدام تدرجات من اللون الأساسي للخطوط
            ctx.strokeStyle = `hsla(${baseHue}, ${baseSaturation}%, ${baseLightness}%, ${
              0.2 * (1 - distance / 150)
            })`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // رسم وتحديث الجزيئات
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        // تحديث المواضع
        p.x += p.speedX;
        p.y += p.speedY;

        // الارتداد عند حواف الشاشة
        if (p.x < 0 || p.x > canvas.width) p.speedX = -p.speedX;
        if (p.y < 0 || p.y > canvas.height) p.speedY = -p.speedY;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative h-[95vh] flex flex-col items-center justify-center text-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-0"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-[#269ca1]/20 via-[#1a7a7e]/10 to-[#0d4f52]/5 z-1" />

      <div className="absolute top-1/4 left-4 w-40 h-40 sm:w-64 sm:h-64 rounded-full bg-[radial-gradient(circle,rgba(38,156,161,0.3)_0%,rgba(0,0,0,0)_70%)] animate-float1" />
      <div className="absolute top-1/3 right-10 w-32 h-32 sm:w-48 sm:h-48 rounded-full bg-[radial-gradient(circle,rgba(38,156,161,0.25)_0%,rgba(0,0,0,0)_70%)] animate-float2" />
      <div className="absolute bottom-1/4 left-1/3 w-48 h-48 sm:w-72 sm:h-72 rounded-full bg-[radial-gradient(circle,rgba(38,156,161,0.2)_0%,rgba(0,0,0,0)_70%)] animate-float3" />

      <div className="relative z-10 px-4 ">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fadeIn">
          Design, Development, and Identity For Your Product
        </h1>

        <p className="text-sm sm:text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto animate-fadeIn delay-300">
          We craft stunning digital experiences that blend beautiful design with
          robust functionality—tailored to elevate your brand and engage your
          audience.
        </p>

        <div className="flex flex-row flex-wrap justify-center gap-2 animate-fadeIn delay-500">
          <button className="px-5 py-1.5 sm:px-8 sm:py-3 text-xs sm:text-base bg-gradient-to-r from-[#269ca1] to-[#1d8a8f] text-white font-medium rounded-full hover:from-[#1d8a8f] hover:to-[#14777b] transition-all transform hover:scale-105 shadow shadow-[#269ca1]/30">
            View Projects
          </button>
          <button className="px-5 py-1.5 sm:px-8 sm:py-3 text-xs sm:text-base bg-transparent border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-all">
            Contact Me
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white/40 flex justify-center">
          <div className="w-1 h-2 bg-white rounded-full mt-2 animate-scroll"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
