<template>
    <div class="flex items-center justify-between post-header-details">
        <div class="flex items-center">
            <div class="relative flex items-center justify-center box">
                <img class="absolute w-10 h-10 rounded-full" :src="avatar" alt="" />
            </div>
            <div class="flex flex-col ml-3 leading-4">
                <span class="font-semibold">{{ username }}</span
                ><span class="text-xs">{{ location }}</span>
            </div>
        </div>
        <div><i class="fa fa-ellipsis-h" aria-hidden="true"></i></div>
    </div>
</template>

<script>
export default {
    props: ["avatar", "username", "location"]
}
</script>

<style>
.post-header-details {
    border-bottom: 1px solid var(--border-color);
    padding: 0 0.75rem;
}
</style>
