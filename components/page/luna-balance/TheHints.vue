<template>
    <div>
        <v-card-title class="d-flex text--black">
            <v-icon class="mr-2" color="black">mdi-lightbulb-on-outline</v-icon>
            <div>ヒント</div>
        </v-card-title>
        <v-card-text>
            <div class="mb-2">
                <v-btn v-show="!openHint" text @click="openHint = true">
                    <div>ヒントを見る</div>
                    <v-icon>mdi-chevron-down</v-icon>
                </v-btn>
            </div>
            <!-- --------------------------------------- -->
            <div v-show="openHint" class="mb-2">
                <v-btn text @click="open1 = !open1">
                    <div>何をするかが分からない</div>
                    <v-spacer></v-spacer>
                    <v-icon>{{ open1 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
            </div>
            <v-card v-show="open1" outlined class="mb-2">
                <v-card-title class="text-subtitle-1 pb-0 mb-4">何をするかが分からない</v-card-title>
                <v-card-text>
                    箱をタップした後に天秤の皿をタップするとタップした皿に箱を積み上げることが出来ます。
                    <br />まずは全ての箱を積んで平衡を確認しましょう。
                </v-card-text>
            </v-card>
            <!-- --------------------------------------- -->
            <div v-show="openHint" class="mb-2">
                <v-btn text @click="open2 = !open2">
                    <div>均衡を取る方法が分からない</div>
                    <v-spacer></v-spacer>
                    <v-icon>{{ open2 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
            </div>

            <HintCard v-show="isThisHint(1)">
                <template #header>均衡を取る方法が分からない</template>
                <template #content>
                    平衡を確認すると天秤が揺れながら左から3つの三角が色づきます。
                    <br />3つの条件で天秤のバランスを取る、つまり左右の重みを揃える必要があるようです。
                </template>
                <template #next>
                    <NextContent :click="nextHint" :num="2">箱が何を表しているかわからない</NextContent>
                    <NextContent :click="nextHint" :num="6">どうすれば釣り合いを取れるかが分からない</NextContent>
                    <NextContent :click="nextHint" :num="50">釣り合いが取れた後が分からない</NextContent>
                </template>
            </HintCard>

            <HintCard v-show="isThisHint(2)">
                <template #header>箱が何を表しているかわからない</template>
                <template #content>箱には欠けている円が描かれています。これは何でしょうか？</template>
                <template #next>
                    <NextContent :click="nextHint" :num="3">もっとヒント</NextContent>
                </template>
                <template #back>
                    <BackBtn :click="nextHint" :num="1" />
                </template>
            </HintCard>

            <HintCard v-show="isThisHint(3)">
                <template #header>もっとヒント</template>
                <template #content>箱には月が描かれています。箱の個数から何を示唆しているかを推測しましょう。</template>
                <template #next>
                    <NextContent :click="nextHint" :num="4">もっとヒント</NextContent>
                </template>
                <template #back>
                    <BackBtn :click="nextHint" :num="2" />
                </template>
            </HintCard>

            <HintCard v-show="isThisHint(4)">
                <template #header>もっとヒント</template>
                <template #content>箱は1月～12月を表しています。満ち欠けや試行錯誤でどの月が対応しているかを推測しましょう。</template>
                <template #next>
                    <NextContent :click="nextHint" :num="5">箱の配置の答え</NextContent>
                </template>
                <template #back>
                    <BackBtn :click="nextHint" :num="3" />
                </template>
            </HintCard>

            <HintCard v-show="isThisHint(5)">
                <template #header>箱の配置の答え</template>
                <template #content>
                    6 10 12 3 4 8
                    <br />1 7 9 11 2 5
                </template>
                <template #back>
                    <BackBtn :click="nextHint" :num="4" />
                </template>
            </HintCard>

            <!-- --- -->

            <HintCard v-show="isThisHint(6)">
                <template #header>どうすれば釣り合いを取れるかが分からない</template>
                <template #content>条件1は箱が表す数そのものの釣り合いを表しています。</template>
                <template #next>
                    <NextContent :click="nextHint" :num="7">条件1の答え</NextContent>
                    <NextContent :click="nextHint" :num="8">条件２のヒント</NextContent>
                </template>
                <template #back>
                    <BackBtn :click="nextHint" :num="1" />
                </template>
            </HintCard>

            <HintCard v-show="isThisHint(7)">
                <template #header>条件1の答え</template>
                <template #content>箱が対応している1～12の数の和が一致していれば釣り合います</template>
                <template #back>
                    <BackBtn :click="nextHint" :num="6" />
                </template>
            </HintCard>

            <HintCard v-show="isThisHint(8)">
                <template #header>条件２のヒント</template>
                <template #content>1～12月に関するある数の釣り合いを表しています。</template>
                <template #next>
                    <NextContent :click="nextHint" :num="9">条件２のもっとヒント</NextContent>
                </template>
                <template #back>
                    <BackBtn :click="nextHint" :num="7" />
                </template>
            </HintCard>

            <HintCard v-show="isThisHint(9)">
                <template #header>条件２のもっとヒント</template>
                <template #content>
                    このサイトでは「&copy;2020」が強調されています。
                    <br />本来の表記では著作者名が表記されることや出題時点では2022年であることから、2022年では成り立たない何かがあると考える必要がありそうです。
                </template>
                <template #next>
                    <NextContent :click="nextHint" :num="10">条件２の答え</NextContent>
                    <NextContent :click="nextHint" :num="11">条件3のヒント</NextContent>
                </template>
                <template #back>
                    <BackBtn :click="nextHint" :num="8" />
                </template>
            </HintCard>

            <HintCard v-show="isThisHint(10)">
                <template #header>条件２の答え</template>
                <template #content>1～12月の日数の釣り合いを表しています。</template>
                <template #back>
                    <BackBtn :click="nextHint" :num="9" />
                </template>
            </HintCard>

            <HintCard v-show="isThisHint(11)">
                <template #header>条件3のヒント</template>
                <template #content>条件2とは異なる1～12月に関するある数の釣り合いを表しています。</template>
                <template #next>
                    <NextContent :click="nextHint" :num="12">条件3のもっとヒント</NextContent>
                    <NextContent :click="nextHint" :num="14">すべての条件が分かったら</NextContent>
                </template>
                <template #back>
                    <BackBtn :click="nextHint" :num="9" />
                </template>
            </HintCard>

            <HintCard v-show="isThisHint(12)">
                <template #header>条件3のもっとヒント</template>
                <template #content>この条件は2020年でしか成り立ちません。この年は特殊な年でした。</template>
                <template #next>
                    <NextContent :click="nextHint" :num="13">条件3の答え</NextContent>
                </template>
                <template #back>
                    <BackBtn :click="nextHint" :num="11" />
                </template>
            </HintCard>

            <HintCard v-show="isThisHint(13)">
                <template #header>条件3の答え</template>
                <template #content>1～12月の祝日の数を表しています。</template>
                <template #back>
                    <BackBtn :click="nextHint" :num="12" />
                </template>
            </HintCard>

            <HintCard v-show="isThisHint(14)">
                <template #header>すべての条件が分かったら</template>
                <template #content>
                    ここまで分かったら条件をもとにどうすれば釣り合うかを考えましょう。
                    <br />条件1・２を複合して考えると絞りやすいです。
                </template>
                <template #next>
                    <NextContent :click="nextHint" :num="15">釣り合いのヒント</NextContent>
                    <NextContent :click="nextHint" :num="30">3つの条件をそろえた</NextContent>
                </template>
                <template #back>
                    <BackBtn :click="nextHint" :num="11" />
                </template>
            </HintCard>

            <HintCard v-show="isThisHint(15)">
                <template #header>釣り合いのヒント</template>
                <template #content>条件2より、29日,30日,31日,31日,31日,31日と30日,30日,30日,31日,31日,31日の釣り合いになります。</template>
                <template #next>
                    <NextContent :click="nextHint" :num="16">釣り合いのもっとヒント</NextContent>
                </template>
                <template #back>
                    <BackBtn :click="nextHint" :num="14" />
                </template>
            </HintCard>

            <HintCard v-show="isThisHint(16)">
                <template #header>釣り合いのもっとヒント</template>
                <template #content>
                    条件1より各皿の月の合計値は39になります。
                    <br />先ほどのヒントと合わせて考えると可能性はかなり絞られます
                </template>
                <template #next>
                    <NextContent :click="nextHint" :num="17">釣り合いのもっともっとヒント</NextContent>
                </template>
                <template #back>
                    <BackBtn :click="nextHint" :num="15" />
                </template>
            </HintCard>

            <HintCard v-show="isThisHint(17)">
                <template #header>釣り合いのもっともっとヒント</template>
                <template #content>
                    30日,30日,30日,31日,31日,31日の方を考えましょう。<br />
                    30日の月は4,6,9,11の4つで、このうち3つの月の和は19,21,24,26の4通りです。<br />
                    月の和を39にするために31日の月の和をそれぞれ20,18,15,13にする必要があります。

                </template>
                <template #next>
                    <NextContent :click="nextHint" :num="18">釣り合いのもっともっともっとヒント</NextContent>
                </template>
                <template #back>
                    <BackBtn :click="nextHint" :num="16" />
                </template>
            </HintCard>

            <HintCard v-show="isThisHint(18)">
                <template #header>釣り合いのもっともっともっとヒント</template>
                <template #content>
                    条件1の釣り合いを成立させるために31日の月は<br />
                    6,9,11(残り13):1,5,7<br />
                    4,9,11(残り15):3,5,7<br />
                    4,6,11(残り18):1,5,12 1,7,10 3,5,10 3,7,8<br />
                    4,6,9(残り20):1,7,12 3,5,12 3,7,10 5,7,8<br />
                    のいずれかである必要があります。このうち条件3が成立するものは1通りのみです。
                </template>
                <template #next>
                    <NextContent :click="nextHint" :num="19">釣り合いの答え</NextContent>
                </template>
                <template #back>
                    <BackBtn :click="nextHint" :num="17" />
                </template>
            </HintCard>

            <HintCard v-show="isThisHint(19)">
                <template #header>釣り合いの答え</template>
                <template #content>
                    片方が４,6,11,1,5,12になるようにすることで条件が成立します。

                </template>
                <template #back>
                    <BackBtn :click="nextHint" :num="18" />
                </template>
            </HintCard>

            <!-- ----  -->

            <HintCard v-show="isThisHint(30)">
                <template #header>すべての条件が分かったら</template>
                <template #content>
                    3つの条件をそろえても×になってしまうことがあります。
                    <br />確認時にバランスがとれていなさそうな箇所を探しましょう。
                </template>
                <template #next>
                    <NextContent :click="nextHint" :num="31">条件4ヒント</NextContent>
                </template>
                <template #back>
                    <BackBtn :click="nextHint" :num="14" />
                </template>
            </HintCard>

            <HintCard v-show="isThisHint(31)">
                <template #header>すべての条件が分かったら</template>
                <template #content>
                    皿の上のブロックがグラグラしていることがあります。
                    <br />ここでもバランスを取りましょう。
                </template>
                <template #next>
                    <NextContent :click="nextHint" :num="32">条件4の答え</NextContent>
                </template>
                <template #back>
                    <BackBtn :click="nextHint" :num="30" />
                </template>
            </HintCard>

            <HintCard v-show="isThisHint(32)">
                <template #header>条件4の答え</template>
                <template #content>下のものほど数字(条件1のもの)が大きくなるように配置しましょう。</template>
                <template #back>
                    <BackBtn :click="nextHint" :num="31" />
                </template>
            </HintCard>

            <!-- --- -->

            <HintCard v-show="isThisHint(50)">
                <template #header>釣り合いが取れた後が分からない</template>
                <template #content>
                    釣り合いを求めるための条件1～3を思い出し、各条件における数の合計を掛け合わせましょう。
                    <br />条件が分からない場合は「どうすれば釣り合いを取れるかが分からない」を参照しましょう。
                </template>
                <template #next>
                    <NextContent :click="nextHint" :num="51">釣り合い後ヒント</NextContent>
                </template>
                <template #back>
                    <BackBtn :click="nextHint" :num="1" />
                </template>
            </HintCard>

            <HintCard v-show="isThisHint(51)">
                <template #header>釣り合い後ヒント</template>
                <template #content>釣り合いを求めた時と比べ、ある部分が変わっています。</template>
                <template #next>
                    <NextContent :click="nextHint" :num="52">釣り合い後もっとヒント</NextContent>
                </template>
                <template #back>
                    <BackBtn :click="nextHint" :num="50" />
                </template>
            </HintCard>

            <HintCard v-show="isThisHint(52)">
                <template #header>釣り合い後もっとヒント</template>
                <template #content>下の「&copy;2020」が「&copy;2022」になっています。これを元に計算し直しましょう。</template>
                <template #next>
                    <NextContent :click="nextHint" :num="53">釣り合い後の答え</NextContent>
                </template>
                <template #back>
                    <BackBtn :click="nextHint" :num="51" />
                </template>
            </HintCard>

            <HintCard v-show="isThisHint(53)">
                <template #header>釣り合い後もっとヒント</template>
                <template #content>「455520」と入力するとクリアできます。</template>
                <template #back>
                    <BackBtn :click="nextHint" :num="52" />
                </template>
            </HintCard>
        </v-card-text>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

import HintCard from "./HintCard.vue"
import NextContent from "./NextContent.vue"
import BackBtn from "./BackBtn.vue"

export default defineComponent({
    setup() {
        const openHint = ref(false)
        const open1 = ref(false)
        const open2 = ref(false)
        // 均衡を取る方法が分からない 以下 
        const hintCardNum = ref<Number>(1)

        const nextHint = (nextNum: Number) => {
            hintCardNum.value = nextNum
            return undefined
        }
        const isThisHint = (thisNum: Number) => (
            open2.value && hintCardNum.value === thisNum
        )
        return {
            open1, open2,
            hintCardNum, nextHint, isThisHint, openHint
        }
    },
    components: {
        HintCard, NextContent, BackBtn
    }
})
</script>
