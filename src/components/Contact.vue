<template>
  <div class="section-form" id="contact">
    <h2 class="contact-form_title">{{ text.title }}</h2>

    <form
      action="https://formsubmit.co/kodyvansloten1@gmail.com"
      method="POST"
      class="contact-form"
    >
      <!-- Name -->
      <input
        class="input input--1"
        required
        name="name"
        v-model="contact.name"
        :placeholder="text.name"
        type="text"
        autocomplete="off"
      />
      <!-- Email -->
      <input
        class="input input--2"
        required
        name="email"
        v-model="contact.email"
        :placeholder="text.email"
        type="email"
        autocomplete="off"
      />
      <!-- Message -->
      <textarea
        class="input input--3"
        name="message"
        v-model="contact.message"
        rows="9"
        :placeholder="text.message"
      ></textarea>
      <input type="submit" value="Send it!" class="btn-submit" />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: {},
      english: {
        title: "WE'RE HAPPY TO HEAR FROM YOU",
        name: "Name",
        email: "E-mail",
        message: "Message",
      },
      khmer: {
        title: "asdfasdf",
        name: "asdfasdf",
        email: "asdfasdf",
        message: "adsfasdf",
      },
      contact: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  created() {
    this.setLanguage("english");
  },
  watch: {
    $language() {
      this.setLanguage(this.$language);
    },
  },
  methods: {
    async setLanguage(language) {
      if (language === "english") {
        this.text = this.english;
      } else {
        this.text = this.khmer;
      }
    },
    onSubmit() {
      alert("submitted");
    },
  },
};
</script>

<style>
.contact-form_title {
  margin: 9rem 0 6rem 0;
  font-size: 4rem;
  letter-spacing: 3px;
  color: #464646;
  text-transform: uppercase;
  text-align: center;
}

.section-form {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.contact-form {
  width: 50%;
  display: flex;
  flex-direction: column;
}
input[type="text"],
input[type="email"],
textarea {
  box-sizing: border-box;
  width: 100%;
  padding: 1.2rem;
  margin-bottom: 3rem;
  border-radius: 8px;
  border: 1px solid rgb(189, 189, 189);
  font-family: "Open sans";
  font-size: 1.6rem;
  background-color: rgb(254, 254, 254);
  resize: none;
}
.btn-submit {
  align-self: flex-end;
}
textarea {
  height: 100px;
}
*:focus {
  outline: none;
}
@media only screen and (max-width: 1020px) {
  .contact-form_title {
    margin: 3rem 0 4rem 0;
    font-size: 2.9rem;
    letter-spacing: 2px;
    color: #464646;
    text-transform: uppercase;
    text-align: center;
  }
  .contact-form {
    width: 80%;
  }
}
</style>
