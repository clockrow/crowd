<template>
    <v-row justify="center">
        <v-col cols="12">
            <v-card class="px-2" :color="COLOR.DARK_WHITE" tile outlined>
                <v-card-title class="justify-center text-h4">{{ title }}</v-card-title>
                <v-divider color="black" class="mt-0"></v-divider>
                <v-card-text class="text-center pb-0">
                    <div>{{ subTitle }}</div>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { COLOR } from '~/assets/variables/colors';

export default defineComponent({
    props: {
        title: {
            type: String,
            required: true
        },
        subTitle: {
            type: String,
            required: false,
            default: ""
        }
    },
    setup() {
        return {
            COLOR
        };
    },
})
</script>