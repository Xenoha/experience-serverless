<template>
  <section class="auth__container">
    <div class="left__section">
      <amplify-authenticator :authConfig="authConfig" class="align-self-center" />
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
      authConfig: {
        signUpConfig: {
          header: 'Sign up for an account',
          hiddenDefaults: ['phone_number', 'username'],
          signUpFields: [
            {
              label: 'Email',
              key: 'email',
              type: 'string',
              required: true,
              displayOrder: 0
            },
            {
              label: 'Password',
              key: 'password',
              type: 'password',
              required: true,
              displayOrder: 1
            }
          ]
        },
        signInConfig: {
          username: 'user@yourcompany.com'
        },
        signOutConfig: {
          isSignOutDisplayed: false
        },
        confirmSignUpConfig: {
          header: 'Please enter the code sent to your email'
        }
      }
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
