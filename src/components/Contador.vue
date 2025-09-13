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
    <div class="grid grid-cols-4 gap-4 max-w-lg mx-auto">
        <div v-for="({ key, label }) in units" :key="key" class="text-center">
            <div class="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-2">
                <div class="text-3xl font-bold text-white">
                    {{ String(timeLeft[key as keyof typeof timeLeft]).padStart(2, "0") }}
                </div>
            </div>
            <div class="text-sm text-white/80 uppercase tracking-wider">
                {{ label }}
            </div>
        </div>
    </div>
</template>