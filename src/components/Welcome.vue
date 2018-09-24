<template>
    <section-block class="welcome">
        <h1 class="title">
            <span class="name">Adilson</span>
            <span class="surname">Tavares</span>
        </h1>
        <img class="me" src="/static/img/welcome/adilson.png">
        <div class="locale-buttons">
            <locale-button language="pt-br" />
            <locale-button language="en-us" />
        </div>
        <contact-button class="contact-button" />
    </section-block>
</template>

<script>
import ContactButton from './ContactButton'
import LocaleButton from './LocaleButton'
import SectionBlock from './SectionBlock'

export default {
    name: 'welcome',
    components: {
        SectionBlock,
        ContactButton,
        LocaleButton
    }
}
</script>

<style scoped>
.welcome {
    font-weight: 400;
    display: flex;
    position: relative;
    justify-content: center;
    max-height: 640px;
}

.welcome > img.me {
    position: absolute;
    bottom: 0px;
}

.title {
    text-transform: uppercase;
    margin-top: 50px;
}

.title > span {
    display: block;
}

.title > .name {
    font-size: 80px;
    color: #FFFFFF;
    font-weight: bold;
}

.title > .surname {
    font-size: 85px;
    color: #CDCED0;
    font-weight: 400;
}

.contact-button {
    position: absolute;
    bottom: 48px;
    right: 60px;
}

.locale-buttons {
    position: absolute;
    bottom: 48px;
    left: 60px;
}
</style>
