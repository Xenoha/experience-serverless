<template>
  <section class="auth__container">
    <div class="left__section">
      <amplify-authenticator class="align-self-center" username-alias="email">
        <amplify-sign-up slot="sign-up" username-alias="email" :form-fields.prop="formFields" />
        <amplify-sign-in slot="sign-in" username-alias="email" :form-fields.prop="formFields" />
      </amplify-authenticator>
    </div>
    <div class="right__section" :style="image">
      <img class="image" :src="reflectLogo" />
    </div>
  </section>
</template>

<script>
import AuthLayout from '@/layouts/Auth'

export default {
  name: 'Auth',
  data () {
    return {
      image: {
        backgroundImage: 'url(' + require('@/assets/reflect/cloud_BG.jpg') + ')'
      },
      reflectLogo: require('@/assets/reflect/reflect_url_logo.png'),
      formFields: [
        {
          label: 'Email',
          type: 'email',
          placeholder: 'name@yourCompany.com',
          required: true
        },
        {
          label: 'Password',
          type: 'password',
          required: true
        }
      ]
    }
  },
  created () {
    this.$emit('update:layout', AuthLayout)
  }
}
</script>

<style lang="scss">
.auth__container {
  display: flex;
  height: 100vh;
}

.left__section {
  background-color: black;
  flex-basis: 30%;
  display: flex;
  justify-content: center;
}

.right__section {
  flex-basis: 70%;
  background-size: 100% 100%;

  img {
    display: flex;
    margin-top: 45vh;
    margin-left: 24vw;
  }
}
</style>
