<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const timeLeft = ref<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
});

const units = [
    { key: "days", label: "Dias" },
    { key: "hours", label: "Horas" },
    { key: "minutes", label: "Minutos" },
    { key: "seconds", label: "Segundos" },
];

let timer: number | null = null;

onMounted(() => {
    const targetDate = new Date("2026-08-15T00:00:00").getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const difference = targetDate - now;

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
            (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        timeLeft.value = { days, hours, minutes, seconds };
    }

    updateCountdown();
    timer = window.setInterval(updateCountdown, 1000);
});

onUnmounted(() => {
    if (timer) clearInterval(timer);
});
</script>

<template>
    <div class="countdown">
        <div v-for="({ key, label }) in units" :key="key" class="countdown-item">
            <div class="countdown-value">
                {{ String(timeLeft[key as keyof typeof timeLeft]).padStart(2, "0") }}
            </div>
            <div class="countdown-label">{{ label }}</div>
        </div>
    </div>
</template>

<style scoped>
/* GLASS GERAL */
.countdown {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    max-width: 800px;
    margin: 2rem auto;
    padding: 1.5rem;

    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.2);
}

@media (min-width: 640px) {
    .countdown {
        grid-template-columns: repeat(4, 1fr);
    }
}

/* ITEM */
.countdown-item {
    text-align: center;
    background: rgba(255, 255, 255, 0.15);
    border-radius: 12px;
    padding: 1rem 0.5rem;
    border: 1px solid rgba(255, 255, 255, 0.25);
}

/* VALOR */
.countdown-value {
    font-size: 2rem;
    font-weight: bold;
    color: #fff;
    margin-bottom: 0.25rem;
}

/* LABEL */
.countdown-label {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: rgba(255, 255, 255, 0.85);
}
</style>
