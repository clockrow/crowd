<template>
    <div>
        <v-card-title class="d-flex text--black">
            <v-icon class="mr-2" color="black">mdi-crown</v-icon>
            <div>ランキング登録</div>
        </v-card-title>
        <v-card-text class="ml-8 py-0">
            <p v-show="showForm">・複数回の登録はお控えください。</p>
            <p v-show="showForm">・チームでプレイされた場合は、代表者がチーム名を1回登録してください。</p>
            <p v-show="showForm">・入力できる名前は最大20文字です。</p>
            <p v-show="existName">・登録名：「{{ inputName.trim() }}」で登録しました。</p>
            <p v-show="noName">・登録しました。</p>
        </v-card-text>
        <v-card-text class="pt-0">
            <v-form v-show="showForm" @submit.prevent="registerRanking">
                <v-text-field v-model="inputName" :readonly="!showPostBtn" placeholder="登録名を入力してください。" maxlength="20"
                    counter />
                <recaptcha />
                <v-btn v-show="showPostBtn" color="primary" type="submit" class="mt-4">登録</v-btn>
            </v-form>
        </v-card-text>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, onMounted, computed, useContext, onBeforeUnmount } from '@nuxtjs/composition-api'
import { GameInfo } from '~/assets/games/utils/game_info'
import axios from "axios"

import { ReCaptchaInstance } from '@nuxtjs/recaptcha';

declare module '@nuxt/types' {
    interface Context {
        $recaptcha: ReCaptchaInstance
    }
}


export default defineComponent({
    props: {
        gameInfo: {
            type: Object as PropType<GameInfo>,
            required: true
        },
        pageName: {
            type: String,
            required: true
        }
    },
    setup(props) {
        const showForm = ref(true)
        const showPostBtn = ref(true)

        const inputName = ref("")

        const noName = ref(false)
        const existName = computed((): boolean => {
            if (noName.value === true) return false
            else return !showForm.value
        })

        const { $recaptcha } = useContext();


        onMounted(() => {
            // 登録済み 
            if (localStorage.getItem(`registered_name_${props.gameInfo.directoryName}`)) {
                showForm.value = false
                showPostBtn.value = false
                inputName.value = localStorage.getItem(`registered_name_${props.gameInfo.directoryName}`) || ""
                if (inputName.value === "") noName.value = true
            }

        })

        onBeforeUnmount(() => {
            $recaptcha.destroy()
        })

        const registerRanking = async () => {
            if (inputName.value.trim() === "") {
                return
            }

            try {
                const token = await $recaptcha.getResponse()

                if (window.confirm(`登録名：「${inputName.value}」で登録します\nよろしいですか?`)) {
                    showPostBtn.value = false
                    const postUrl = `${props.gameInfo.rankingUrl}register/${props.pageName}/`
                    await axios.post(postUrl, {
                        name: inputName.value,
                        token: token
                    }).then((res) => {
                        // 登録成功 
                        if (res.status === 200) {
                            showForm.value = false
                            localStorage.setItem(`registered_name_${props.gameInfo.directoryName}`, inputName.value.trim());
                        }
                        // 登録失敗 
                        else {
                            alert("登録に失敗しました。")
                            showPostBtn.value = true
                        }
                    }).catch(() => {
                        alert("ネットワークエラーが発生しました。")
                        showPostBtn.value = true
                    })


                }

                await $recaptcha.reset()

            } catch (error) {
                // console.log('Login error:', error)
            }



        }
        return {
            showForm, inputName, showPostBtn, registerRanking, noName, existName
        }
    }
})
</script>

