<script>
    import { signOut } from "firebase/auth";
    import { userInformation } from "@stores/auth";
    import { fbAuth } from "@stores/firebase";
    import { Avatar } from "@ui/Avatar";
    import { Item } from "@ui/Item";
    import {
        Button,
        BUTTON_SIZES,
        BUTTON_STYLES
    } from "@ui/Button";

    async function handleLogoutClick() {
        try {
            await signOut($fbAuth);
        } catch (error) {
            console.error(error);
        }
    }

    $: userName = $userInformation?.displayName || "";
</script>

<Item transparent>
    <svelte:fragment slot="left">
        <div class="section">
            <Avatar name={userName} />
            <span class="username">{userName}</span>
        </div>
    </svelte:fragment>
    <svelte:fragment slot="right">
        <div class="section">
            <Button
                size={BUTTON_SIZES.mini}
                theme={BUTTON_STYLES.ghost}
                on:click={handleLogoutClick}
            >
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.75 8C9.75 7.86193 9.86193 7.75 10 7.75H22C22.1381 7.75 22.25 7.86193 22.25 8V25C22.25 25.4142 22.5858 25.75 23 25.75C23.4142 25.75 23.75 25.4142 23.75 25V8C23.75 7.0335 22.9665 6.25 22 6.25H10C9.0335 6.25 8.25 7.0335 8.25 8V25C8.25 25.4142 8.58579 25.75 9 25.75C9.41421 25.75 9.75 25.4142 9.75 25V8ZM17.1515 9.96213C17.0625 9.98439 17 10.0644 17 10.1562V22.8764C17 22.9521 17.0428 23.0214 17.1106 23.0553L20.7106 24.8553C20.8435 24.9218 21 24.8251 21 24.6764V9.25616C21 9.12604 20.8777 9.03057 20.7515 9.06213L17.1515 9.96213Z" fill="#8D8D8D"/>
                </svg>
            </Button>
        </div>
    </svelte:fragment>
</Item>

<style>
    .section {
        display: flex;
        align-items: center;
    }

    .username {
        max-width: 8.75rem;
        margin-left: 0.5rem;
        font-style: normal;
        font-weight: 400;
        font-size: 1.125rem;
        line-height: 1.5rem;
        color: var(--color-dark-10);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
</style>