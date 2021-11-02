<template>
  <!-- Simple form that send with formsubmit, currently exposes the email to web crawlers
  //! find a way to fix this. Maybe with env varibales? -->
  <div class="section-form" id="contact">
    <h2 class="contact-form_title">{{ text.title }}</h2>
    <div class="section-form__contact">
      <form :action="link" method="POST" class="contact-form">
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
        <input type="submit" value="Send" id="btn-submit" />
      </form>
      <div class="contact-details">
        <h3 class="contact-details__title">Contact</h3>
        <div
          v-for="(contactDetail, index) in english.contactDetails"
          :key="index"
          class="contact-detail"
        >
          <icon
            ><component :is="contactDetail.icon" :iconStyle="'height:3rem'"
          /></icon>
          <p>{{ contactDetail.text }}</p>
        </div>
        <p><i>Contact us for an exact location</i></p>
      </div>
    </div>
  </div>
</template>

<script>
import Email from "./SvgIcon/Email.vue";
import Phone from "./SvgIcon/Phone.vue";
import Location from "./SvgIcon/Location.vue";
import Hours from "./SvgIcon/Hours.vue";
export default {
  components: {
    Email,
    Phone,
    Location,
    Hours,
  },
  data() {
    return {
      text: {},
      link: "https://formsubmit.co/kodyvansloten1@gmail.com",
      english: {
        title: "WE'RE HAPPY TO HEAR FROM YOU",
        name: "Name",
        email: "E-mail",
        message: "Message",
        contactDetails: [
          {
            icon: "Phone",
            text: "+855 61 960 015",
          },
          { icon: "Email", text: "test@test.com" },
          { icon: "Hours", text: " Monday to Thursday, 8:00am to 5:00pm" },
          { icon: "Location", text: "Phnom Penh Thmey, Khan Sen Sok" },
        ],
      },
      khmer: {
        title: "WE'RE HAPPY TO HEAR FROM YOU",
        name: "Name",
        email: "E-mail",
        message: "Message",
        contactDetails: [
          {
            icon: "Phone",
            text: "+855 61 960 015",
          },
          { icon: "Email", text: "test@test.com" },
          { icon: "Hours", text: " Monday to Thursday, 8:00am to 5:00pm" },
          { icon: "Location", text: "Phnom Penh Thmey, Khan Sen Sok" },
        ],
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

<style lang="scss">
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
  &__contact {
    display: flex;
    justify-content: space-around;
    width: 90%;
  }
}
.contact-form {
  display: flex;
  flex-direction: column;
  max-width: 70rem;
  margin: 0 10rem;
  flex: 1;
}
.contact-details {
  text-align: center;
  &__title {
    font-size: 2rem;
    margin-bottom: 2.3rem;
  }
}
.contact-detail {
  display: flex;
  margin-bottom: 1rem;
  font-size: 1.75rem;
  icon {
    margin-right: 2rem;
  }
  p {
    text-align: left;
  }
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
#btn-submit {
  align-self: flex-end;
  background-color: var(--color-primary);
  margin-right: 3rem;
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
    margin: 5rem 0 0 0;
  }
  .section-form {
    &__contact {
      display: flex;
      flex-direction: column-reverse;
      justify-content: space-around;
      align-items: center;
      width: 90%;
    }
  }
}
</style>
