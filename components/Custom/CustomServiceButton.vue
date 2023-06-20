<script setup>
const props = defineProps({
    link: String,
    icon: String
})
</script>

<template>
    <NuxtLink class="serviceLink" :to="link">
        <div class="" v-if="icon == 'pliers'">
            <svg class="" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
                <path d="M281-42q-17-37-25.5-91.5T246-252q0-88 18.5-154.5T320-520v-200l120-200h80l120 200v200q38 47 56 112.5T714-257q0 62-9 118.5T679-42q-35-14-57.5-47T598-160q-1-28 7.5-57.5T614-287q0-58-31-116.5T480-500q-71 38-102.5 96.5T346-286q0 38 8.5 68t8.5 57q0 39-23.5 73.5T281-42Zm199-598q-17 0-28.5-11.5T440-680q0-11 5.5-20t14.5-14v-123l-80 133v124h200v-124l-80-133v123q10 5 15 14t5 20q0 17-11.5 28.5T480-640Zm20-197h-40 40Zm-40 0h40-40Z"/>
            </svg>
            <p class="buttonText">dépannage</p>
        </div>

        <div class="" v-if="icon == 'fan'">
            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
                <path d="M424-80q-51 0-77.5-30.5T320-180q0-26 11.5-50.5T367-271q22-14 36.5-37.5T425-373q-1 0-1-.5t-2-1.5l-116 41q-17 6-33 10t-33 4q-63 0-111.5-55T80-536q0-51 30.5-77.5T179-640q26 0 51 11.5t41 35.5q14 22 39.5 37.5T373-535l1.333-2q.667-1 .667-2l-41-115q-6-17-10-33t-4-32q0-64 55-112.5T536-880q51 0 77.5 30.5T640-781q0 26-11.5 51T593-689q-26 17-40.5 45T536-586q1 1 1.5.5t1.5 1.5l115-43q17-6 32.5-9.5T719-640q81 0 121 67t40 149q0 51-32 77.5T777-320q-25 0-48.5-11.5T689-367q-14-22-37.5-36.5T587-426q-1 2-1.6 3.059-.6 1.059-1.4 1.941l42 115q6 16 10 30.5t4 30.5q1 65-54 115T424-80Zm56-340q25 0 42.5-17.5T540-480q0-25-17.5-42.5T480-540q-25 0-42.5 17.5T420-480q0 25 17.5 42.5T480-420Zm-58-165q12-5 26-9t28-6q8-45 29.5-81t54.5-58q10-7 15-17.5t5-24.5q0-16.421-10.5-27.711Q559-820 536-820q-43 0-98.5 20.547T380-719.132q0 11.208 2.5 21.17Q385-688 388-680l34 95ZM240-380q14 0 40-8l95-34q-8-14-11.5-28t-3.5-26q-45-8-81-29.5T221-560q-7-10-19-15t-23-5q-19 0-29 10.5T140-536q0 61.941 25.625 108.971Q191.25-380 240-380Zm184 240q53.13 0 104.565-23Q580-186 580-242q0-11-2-19t-6-19l-34-95q-13 6-26.5 10t-27.5 5q-8 45-29.5 81T400-221q-9 6-14.5 18.5T380-179q1 15 11 27t33 12Zm353-240q16.826 0 29.913-9.167Q820-398.333 820-424q0-44-20.5-99t-81.328-57Q707-580 697.5-578t-17.5 5l-95 35q5 8 10 25.5t5 28.5q45 8 81 29.5t58 54.5q6 8 16.667 14 10.666 6 21.333 6ZM600-484ZM476-600ZM360-476Zm124 116Z"/>
            </svg>

            <p class="buttonText">dépannage</p>
        </div>

        <div class="" v-if="icon == 'power'">
            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
                <path d="M442-180h76v-82l142-156v-191H300v191l142 155.701V-180Zm-60 60v-118L240-394v-215q0-24.75 17.625-42.375T300-669h72l-30 30v-201h60v171h156v-171h60v201l-30-30h72q24.75 0 42.375 17.625T720-609v215L578-238v118H382Zm98-275Z"/>
            </svg>

            <p class="buttonText">dépannage</p>
        </div>
    </NuxtLink>
</template>

<style scoped>
.serviceLink {
    width: min(250px, 90%);
    aspect-ratio: 1/1;
    border-radius: 500px;
    overflow: hidden;
    cursor: pointer;
    background-color: #1a1a1a;
    box-shadow: 0 0 10px black;
    transition: 300ms ease;
}
.serviceLink div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
}
.buttonText {
    color: white;
    font-size: clamp(24px, 4vw, 26px);
    font-weight: 700;
}
.serviceLink:hover div .buttonText {
    color: black;
}
svg {
    width: 60%;
    height: 120px;
}
path {
    fill: var(--brand-color-2);
}
.serviceLink:hover {
    background-color: var(--brand-color-2);
    box-shadow: 0 0 10px var(--brand-color-2);
    transition: 300ms ease;
}
.serviceLink:hover svg path {
    fill: black;
}
</style>